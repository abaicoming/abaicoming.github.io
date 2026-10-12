/* Edit this file to update publication records and translated text. */
window.SITE_DATA = {
  publications: [
    {
      id: "skin-fold", state: "review", year: 2027, mark: "ICRA<br>2027",
      title: "Learning Press-Based Robotic Skin-Fold Retraction with Passive Compliance and Contact-Aware Action Semantics",
      authors: ["Luhao Xie", "Zizheng Li", "Lifeng Zhu", "Jian Lu", "Bodong Fan", "Aiguo Song"], corresponding: ["Lifeng Zhu"],
      venue: "IEEE International Conference on Robotics and Automation (ICRA 2027)",
      detail: { en: "Submitted", zh: "在投" },
      summary: { en: "Press-based skin-fold retraction through passive compliance, contact-aware action semantics, and real-world robot learning.", zh: "结合被动柔顺机构、接触感知动作语义与真机机器人学习，研究通过按压与切向抚平实现皮肤褶皱牵开。" },
      links: [{ label: "project", url: "https://abaicoming.github.io/press-based-skin-fold-retraction/" }],
      image: "assets/skin-fold-overview.png", imageWidth: 2226, imageHeight: 1496, imageAlt: { en: "Press-based skin-fold retraction robot and its passively compliant end effector", zh: "按压式皮肤褶皱牵开机器人与被动柔顺末端执行器" }
    },
    {
      id: "linkreviewer", state: "review", year: 2027, mark: "ICRA<br>2027",
      title: "LinkReviewer: Kinematics-Aware Vision-Language Diagnosis for Robot Manipulator Design",
      authors: ["Zizheng Li", "Luhao Xie", "Xin Chen", "Lifeng Zhu", "Aiguo Song"], corresponding: ["Lifeng Zhu"],
      venue: "IEEE International Conference on Robotics and Automation (ICRA 2027)",
      detail: { en: "Submitted", zh: "在投" },
      summary: { en: "Kinematics-aware vision–language diagnosis for robot manipulator design.", zh: "面向机器人机械臂设计的运动学感知视觉—语言诊断。" }, links: []
    },
    {
      id: "transoral", state: "review", year: 2026, mark: "TMECH",
      title: "Exploring Human-Robot Shared Control for Transoral Surgery Retraction",
      authors: ["Luhao Xie", "Lifeng Zhu", "Ziyi Zhao", "Yuan Yang", "Jiangwei Shen", "Aiguo Song"], corresponding: ["Lifeng Zhu"],
      venue: "IEEE/ASME Transactions on Mechatronics",
      detail: { en: "Under revision", zh: "返修中" },
      summary: { en: "Task-structured shared control that coordinates operator input, motion assistance, and force regulation for transoral retraction.", zh: "面向经口手术牵拉，结合任务阶段推断、操作者输入与力反馈，协调运动辅助、力调节及人机控制权。" }, links: []
    },
    {
      id: "gynecologic", state: "published", year: 2026, mark: "Intelligent<br>Medicine",
      title: "Gynecologic surgical robotics: Prospects and challenges",
      authors: ["Lifeng Zhu", "Luhao Xie", "Yang Shen"], corresponding: ["Yang Shen"],
      venue: "Intelligent Medicine", detail: { en: "2026", zh: "2026" }, doi: "10.1016/j.imed.2026.09.004",
      summary: { en: "A review of the prospects and challenges of gynecologic surgical robotics.", zh: "探讨妇科手术机器人的发展前景与挑战。" },
      links: [{ label: "paper", url: "https://doi.org/10.1016/j.imed.2026.09.004" }]
    },
    {
      id: "bronchoscopy", state: "published", year: 2026, mark: "IJMRCAS",
      title: "Dual-Modal Safety Framework for Robotic-Assisted Bronchoscopy via Endoscopic Vision and Haptic Feedback",
      authors: ["Bodong Fan", "Luhao Xie", "Lifeng Zhu", "Xiaoliang Jin", "Jian Lu", "Gaojun Teng", "Aiguo Song"], corresponding: ["Lifeng Zhu"],
      venue: "The International Journal of Medical Robotics and Computer Assisted Surgery", detail: { en: "22(4), e70198, 2026", zh: "22(4), e70198, 2026" }, doi: "10.1002/rcs.70198",
      summary: { en: "Endoscopic visual warnings and haptic feedback for collision avoidance and distal interaction perception in robot-assisted bronchoscopy.", zh: "结合内窥镜视觉预警与触觉反馈，支持机器人辅助支气管镜操作中的碰撞规避与远端交互感知。" },
      links: [{ label: "paper", url: "https://doi.org/10.1002/rcs.70198" }],
      image: "assets/bronchoscopy-dual-modal-framework.png", imageWidth: 1654, imageHeight: 938, imageAlt: {"en":"Dual-modal safety framework for robot-assisted bronchoscopy with visual risk assessment and torque-based haptic feedback","zh":"结合视觉风险评估与基于力矩的触觉反馈的机器人辅助支气管镜双模态安全框架"}
    },
    {
      id: "ctr", state: "published", year: 2025, mark: "TASE",
      title: "Curvature-Based Continuous Steering of Stiffness-Dominant Concentric Tube Robots",
      authors: ["Luhao Xie", "Lifeng Zhu", "Xiaoliang Jin", "Aiguo Song"], corresponding: ["Lifeng Zhu"],
      venue: "IEEE Transactions on Automation Science and Engineering", detail: { en: "22, 15565–15575, 2025", zh: "22, 15565–15575, 2025" }, doi: "10.1109/TASE.2025.3570861",
      presentation: { en: "Poster presentation · ICRA 2026 · Vienna, Austria", zh: "海报展示 · ICRA 2026 · 奥地利维也纳" },
      summary: { en: "Curvature-domain continuous steering that aligns the entire shape of a concentric-tube robot with target curves.", zh: "从曲率域出发研究同心管机器人的连续形状控制，使机器人整体形状随运动过程逼近目标曲线。" },
      links: [{ label: "paper", url: "https://doi.org/10.1109/TASE.2025.3570861" }, { label: "readNews", url: "https://ins.seu.edu.cn/yqkx_en/2026/0702/c57937a575382/page.htm" }],
      image: "assets/ctr-continuous-steering.png", imageWidth: 1178, imageHeight: 1014, imageAlt: {"en":"Concentric-tube robot setup, bronchial model steering experiments, and shape comparisons","zh":"同心管机器人实验装置、支气管模型连续转向实验与形状对比"}
    }
  ],
  patents: [
    {
      "id": "bronchial-sheath",
      "title": {
        "en": "Retractable multi-branch protective sheath for bronchial biopsy",
        "zh": "一种用于支气管活检的可伸缩多分支保护鞘管"
      },
      "inventors": [
        {
          "en": "Lifeng Zhu",
          "zh": "朱利丰"
        },
        {
          "en": "Luhao Xie",
          "zh": "谢路豪"
        },
        {
          "en": "Kehong Zhou",
          "zh": "周科宏"
        }
      ],
      "number": "ZL 202311553266.4",
      "publicationNumber": "CN 117338348 B",
      "filedOn": "2023-11-21",
      "grantedOn": "2026-06-19",
      "documentState": "granted",
      "owner": {
        "en": "Southeast University",
        "zh": "东南大学"
      },
      "detail": {
        "en": "Chinese invention patent · ZL 202311553266.4 · CN 117338348 B · Granted 2026.06.19",
        "zh": "中国发明专利 · ZL 202311553266.4 · CN 117338348 B · 授权公告：2026.06.19"
      }
    },
    {
      "id": "neural-time-field",
      "title": {
        "en": "Multi-target distance-field computation using physics-informed neural time fields for quadrilateral meshing",
        "zh": "面向四边网格化的基于物理信息神经时间场的多目标距离场计算方法"
      },
      "inventors": [
        {
          "en": "Lifeng Zhu",
          "zh": "朱利丰"
        },
        {
          "en": "Luhao Xie",
          "zh": "谢路豪"
        }
      ],
      "number": "202510614312.X",
      "filedOn": "2025-05-13",
      "documentState": "application-accepted",
      "owner": {
        "en": "Southeast University",
        "zh": "东南大学"
      },
      "detail": {
        "en": "Chinese invention patent application · 202510614312.X · Application accepted 2025.05.13",
        "zh": "中国发明专利申请 · 202510614312.X · 申请受理：2025.05.13"
      }
    }
  ],
  awards: [
    {
      "id": "transoral-retraction",
      "title": {
        "en": "Shared control system for robot-assisted transoral surgical retraction",
        "zh": "机器人辅助经口手术牵拉的共享控制系统"
      },
      "prize": {
        "en": "Second Prize",
        "zh": "二等奖"
      },
      "date": "2026.07",
      "team": [
        {
          "en": "Zizheng Li",
          "zh": "李梓正"
        },
        {
          "en": "Luhao Xie",
          "zh": "谢路豪"
        },
        {
          "en": "Bodong Fan",
          "zh": "樊博栋"
        }
      ],
      "advisor": {
        "en": "Lifeng Zhu",
        "zh": "朱利丰"
      },
      "certificateNumber": "A20262009"
    },
    {
      "id": "bronchoscope-teleoperation",
      "title": {
        "en": "Flexible bronchoscope teleoperation platform with visual–haptic dual-modal perception",
        "zh": "融合视觉与力觉双模态感知的柔性支气管镜遥操作平台"
      },
      "prize": {
        "en": "Second Prize",
        "zh": "二等奖"
      },
      "date": "2026.07",
      "team": [
        {
          "en": "Bodong Fan",
          "zh": "樊博栋"
        },
        {
          "en": "Luhao Xie",
          "zh": "谢路豪"
        },
        {
          "en": "Zizheng Li",
          "zh": "李梓正"
        }
      ],
      "advisor": {
        "en": "Lifeng Zhu",
        "zh": "朱利丰"
      },
      "certificateNumber": "A20261753"
    }
  ],
  translations: {
    en: {
      skip: "Skip to content", navAbout: "About", navResearch: "Research", navPubs: "Publications", navNews: "News", role: "Ph.D. Student", school: "School of Instrument Science and Engineering", university: "Southeast University", location: "Nanjing, China", profileNote: "Robot learning\nMedical robotics\nHuman–robot interaction", eyebrow: "ROBOTICS · SOUTHEAST UNIVERSITY", aboutTitle: "About me", introLead: "I am a Ph.D. student at the School of Instrument Science and Engineering, Southeast University, advised by", advisor: "Prof. Lifeng Zhu", introEnd: ".", institute: "Institute of Robot Sensing and Control Technology", keyLaboratory: "Jiangsu Province Key Laboratory for Robot Perception and Control Technology", affiliationLead: " I conduct research at the ", affiliationJoin: " and the ", affiliationEnd: ".", aboutBody: "My research spans robot learning, medical robotics, and physical human–robot interaction. I study how robots can achieve precise motion, compliant contact, and effective collaboration in confined spaces and complex interaction environments. My work spans concentric-tube robot steering, shared control for surgical retraction, and visual–haptic feedback for robot-assisted bronchoscopy.", aboutCurrent: "I am currently exploring robot learning and vision–language–action (VLA) models with compliant control, with a particular interest in connecting task understanding to real-time physical interaction.", collaboration: "I welcome conversations and collaborations in robot learning, medical robotics, and human–robot interaction.", getInTouch: "Get in touch ↗", researchTitle: "Research interests", research1Title: "Robot learning & embodied AI", research1Body: "Learning for contact-rich manipulation and connecting multimodal task understanding with compliant physical execution.", research2Title: "Medical & continuum robotics", research2Body: "Shape control and navigation for continuum robots operating in narrow, curved anatomical environments.", research3Title: "Human–robot interaction", research3Body: "Task-aware assistance, force regulation, and human–robot authority allocation for precise contact manipulation.", pubTitle: "Publications & manuscripts", achievementsTitle: "Patents & awards", achievementsCount: "{patents} patents · {awards} awards", patentsTitle: "Patents", awardsTitle: "Competition awards", competitionName: "The 11th National Biomedical Engineering Innovation Design Competition for College Students", inventors: "Inventors", teamMembers: "Team members", competitionAdvisor: "Advisor", filterAll: "All", filterPublished: "Published", filterReview: "Under review", authorNote: "My name is shown in bold; * denotes the corresponding author.", newsTitle: "News & activities", news1: "Our review “Gynecologic surgical robotics: Prospects and challenges” is published in Intelligent Medicine.", news2: "I presented our work on concentric-tube robot steering as a poster at ICRA 2026 in Vienna. The presentation was featured in our school's news.", news3: "Our work on visual–haptic feedback for robot-assisted bronchoscopy was published in The International Journal of Medical Robotics and Computer Assisted Surgery.", readPaper: "Paper ↗", readNews: "School news ↗", educationTitle: "Education", educationYear: "2024 — Present", educationDegree: "Ph.D. Student · Southeast University", educationSchool: "School of Instrument Science and Engineering", footerContact: "Contact", backTop: "Back to top ↑", groupPublished: "Published", groupReview: "Under review", paper: "Paper ↗", project: "Project page ↗", corresponding: "Corresponding author", description: "Luhao Xie (谢路豪), Ph.D. student at Southeast University. Robot learning, medical robotics, and human–robot interaction."
    },
    zh: {
      skip: "跳转到正文", navAbout: "个人简介", navResearch: "研究方向", navPubs: "学术论文", navNews: "动态", role: "博士研究生", school: "仪器科学与工程学院", university: "东南大学", location: "中国 · 南京", profileNote: "机器人学习\n医疗机器人\n人机交互", eyebrow: "机器人研究 · 东南大学", aboutTitle: "关于我", introLead: "我是东南大学仪器科学与工程学院博士研究生谢路豪，导师为", advisor: "朱利丰教授", introEnd: "。", institute: "机器人传感与控制技术研究所", keyLaboratory: "江苏省高校机器人感知与控制技术重点实验室", affiliationLead: "我在", affiliationJoin: "及", affiliationEnd: "开展研究。", aboutBody: "我的研究主要围绕机器人学习、医疗机器人与机器人物理交互展开，关注机器人如何在狭窄空间和复杂接触环境中实现精确运动、柔顺接触与有效的人机协作。已有工作涉及同心管机器人的连续形状控制、面向手术牵拉的人机共享控制，以及机器人辅助支气管镜操作中的视觉与触觉反馈。", aboutCurrent: "目前，我正在探索机器人学习、视觉—语言—动作模型（VLA）与柔顺控制的结合，关注如何协调高层任务理解与实时物理反馈，使机器人能够根据任务需求响应外部扰动、人员引导和环境约束。", collaboration: "欢迎就机器人学习、医疗机器人及人机交互开展交流与合作。", getInTouch: "联系我 ↗", researchTitle: "研究方向", research1Title: "机器人学习与具身智能", research1Body: "面向接触操作开展机器人学习研究，探索多模态任务理解与柔顺物理执行的结合。", research2Title: "医疗与连续体机器人", research2Body: "面向人体腔道等狭窄、弯曲环境，研究连续体机器人的形状控制与导航。", research3Title: "人机交互与共享控制", research3Body: "结合任务需求、操作者意图及力觉反馈，研究运动辅助、力调节与人机控制权分配。", pubTitle: "学术论文与在审工作", achievementsTitle: "专利与竞赛", achievementsCount: "{patents} 项专利成果 · {awards} 项竞赛获奖", patentsTitle: "专利", awardsTitle: "竞赛获奖", competitionName: "第十一届全国大学生生物医学工程创新设计竞赛", inventors: "发明人", teamMembers: "团队成员", competitionAdvisor: "指导教师", filterAll: "全部", filterPublished: "已发表", filterReview: "在审工作", authorNote: "本人姓名加粗；* 为通讯作者。", newsTitle: "学术动态", news1: "综述“Gynecologic surgical robotics: Prospects and challenges”发表于 Intelligent Medicine。", news2: "在维也纳 ICRA 2026 上以海报形式展示同心管机器人连续形状控制研究，并获学院报道。", news3: "机器人辅助支气管镜视觉与触觉反馈研究发表于 The International Journal of Medical Robotics and Computer Assisted Surgery。", readPaper: "论文 ↗", readNews: "学院报道 ↗", educationTitle: "教育经历", educationYear: "2024 — 至今", educationDegree: "博士研究生 · 东南大学", educationSchool: "仪器科学与工程学院", footerContact: "联系我", backTop: "返回顶部 ↑", groupPublished: "已发表论文", groupReview: "在审工作", paper: "论文 ↗", project: "项目主页 ↗", corresponding: "通讯作者", description: "谢路豪，东南大学仪器科学与工程学院博士研究生，研究方向为机器人学习、医疗机器人及人机交互。"
    }
  }
};
