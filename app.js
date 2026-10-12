(() => {
  "use strict";
  const data = window.SITE_DATA;
  let lang = "en";
  let filter = "all";
  try { if (localStorage.getItem("luhao-language") === "zh") lang = "zh"; } catch (_) {}
  const el = (tag, className, text) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  };
  const externalLink = (url, className, text) => {
    const node = el("a", className, text);
    node.href = url;
    node.target = "_blank";
    node.rel = "noopener noreferrer";
    return node;
  };
  function renderPaper(paper) {
    const t = data.translations[lang];
    const article = el("article", "paper");
    article.id = "paper-" + paper.id;
    const mark = el("div", "venue-mark" + (paper.state === "review" ? " review" : ""));
    // Venue marks contain only fixed local labels, never external content.
    paper.mark.split("<br>").forEach((part, i) => { if (i) mark.append(document.createElement("br")); mark.append(document.createTextNode(part)); });
    const body = el("div", "paper-body");
    const title = el("h3", "paper-title");
    if (paper.links.length) title.append(externalLink(paper.links[0].url, "", paper.title));
    else title.textContent = paper.title;
    const authors = el("p", "authors");
    paper.authors.forEach((name, i) => {
      if (i) authors.append(document.createTextNode(", "));
      authors.append(el(name === "Luhao Xie" ? "strong" : "span", "", name));
      if (paper.corresponding?.includes(name)) {
        const star = el("sup", "", "*"); star.title = t.corresponding; authors.append(star);
      }
    });
    if (paper.authorRole) authors.append(document.createTextNode(" · " + paper.authorRole[lang]));
    const venue = el("p", "paper-venue");
    venue.append(el("em", "", paper.venue), document.createTextNode(" · " + paper.detail[lang]));
    body.append(title, authors, venue);
    if (paper.presentation) body.append(el("p", "paper-venue paper-presentation", paper.presentation[lang]));
    body.append(el("p", "paper-description", paper.summary[lang]));
    if (paper.image) {
      const img = el("img", "paper-image");
      img.src = paper.image; img.alt = paper.imageAlt[lang]; img.loading = "lazy";
      img.width = paper.imageWidth; img.height = paper.imageHeight;
      const figure = externalLink(paper.image, "paper-figure", "");
      figure.setAttribute("aria-label", (lang === "zh" ? "查看原图：" : "View full-size figure: ") + paper.title);
      figure.title = lang === "zh" ? "点击查看原图" : "View full-size figure";
      figure.append(img);
      body.append(figure);
    }
    const links = el("div", "paper-links");
    paper.links.forEach(link => links.append(externalLink(link.url, "paper-link", t[link.label])));
    if (paper.state === "review") links.append(el("span", "status", paper.detail[lang]));
    body.append(links);
    article.append(mark, body);
    return article;
  }
  function renderPublications() {
    const list = document.getElementById("publication-list");
    list.replaceChildren();
    const states = filter === "all" ? ["published", "review"] : [filter];
    states.forEach(state => {
      const papers = data.publications.filter(p => p.state === state);
      if (!papers.length) return;
      const heading = data.translations[lang][state === "published" ? "groupPublished" : "groupReview"];
      list.append(el("h3", "paper-group-label", heading));
      papers.forEach(p => list.append(renderPaper(p)));
    });
  }
  function renderAchievements() {
    const t = data.translations[lang];
    const personName = person => person[lang];
    const namesLine = (label, people) => {
      const line = el("p", "achievement-meta");
      line.append(document.createTextNode(label + (lang === "zh" ? "：" : ": ")));
      people.forEach((person, i) => {
        if (i) line.append(document.createTextNode(lang === "zh" ? "、" : ", "));
        line.append(el(person.en === "Luhao Xie" ? "strong" : "span", "", personName(person)));
      });
      return line;
    };
    document.getElementById("achievements-count").textContent = t.achievementsCount
      .replace("{patents}", data.patents.length).replace("{awards}", data.awards.length);
    const patents = document.getElementById("patent-list");
    patents.replaceChildren();
    data.patents.forEach(patent => {
      const item = el("li", "achievement-item");
      item.append(el("h4", "achievement-title", patent.title[lang]),
        el("p", "achievement-meta", patent.detail[lang]), namesLine(t.inventors, patent.inventors));
      patents.append(item);
    });
    const awards = document.getElementById("award-list");
    awards.replaceChildren();
    data.awards.forEach(award => {
      const item = el("li", "achievement-item");
      const team = namesLine(t.teamMembers, award.team);
      team.append(document.createTextNode(" · " + t.competitionAdvisor + (lang === "zh" ? "：" : ": ") + personName(award.advisor)));
      item.append(el("h4", "achievement-title", award.title[lang]),
        el("p", "achievement-meta", award.prize[lang] + " · " + award.date), team);
      awards.append(item);
    });
  }
  function setLanguage() {
    const t = data.translations[lang];
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
    document.querySelectorAll("[data-i18n]").forEach(node => {
      const value = t[node.dataset.i18n];
      if (value !== undefined) node.textContent = value;
    });
    const note = document.querySelector(".profile-note");
    note.style.whiteSpace = "pre-line";
    const toggle = document.getElementById("language-toggle");
    toggle.textContent = lang === "en" ? "中文" : "EN";
    toggle.setAttribute("aria-label", lang === "en" ? "Switch language to Chinese" : "Switch language to English");
    document.querySelector('meta[name="description"]').content = t.description;
    document.querySelector(".portrait").alt = lang === "zh" ? "谢路豪个人照片" : "Portrait of Luhao Xie";
    document.querySelector(".filters").setAttribute("aria-label", lang === "zh" ? "筛选学术论文" : "Filter publications");
    renderPublications();
    renderAchievements();
  }
  document.getElementById("language-toggle").addEventListener("click", () => {
    lang = lang === "en" ? "zh" : "en";
    try { localStorage.setItem("luhao-language", lang); } catch (_) {}
    setLanguage();
  });
  document.querySelectorAll("[data-filter]").forEach(button => button.addEventListener("click", () => {
    filter = button.dataset.filter;
    document.querySelectorAll("[data-filter]").forEach(b => {
      const active = b.dataset.filter === filter;
      b.classList.toggle("active", active);
      b.setAttribute("aria-pressed", String(active));
    });
    renderPublications();
  }));
  setLanguage();
})();
