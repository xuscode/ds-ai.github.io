/**
 * I18N — Chinese-English translation dictionary for 3DEXPERIENCE AI Open Platform
 * Self-contained IIFE that creates a global window.I18N object.
 */
;(function () {
  'use strict';

  var translations = {
    zh: {
      // ---- Nav ----
      'nav.title': '3DEXPERIENCE AI 开放平台',
      'nav.features': '核心能力',
      'nav.quickstart': '快速接入',
      'nav.examples': '使用示例',
      'nav.docs': '开发文档',
      'nav.login': '登录',

      // ---- Hero ----
      'hero.title.main': '3DEXPERIENCE / V5 MCP',
      'hero.title.sub': '让 AI 驱动 CAD 建模与 PLM 业务流程',
      'hero.desc': '基于标准 MCP 协议，让 AI 助手直接操控 CATIA V5 与 3DEXPERIENCE 平台。',
      'hero.desc.2': '自然语言建模、自动化出图、智能 PLM 查询——一句话即可完成,虽然目前AI在生成图纸或者纯建模领域与实际工程还有很长的一段距离，但是这条技术发展的路线不会终结，AI在',
      'hero.desc.3': '编程工程项目领域已经有了很大的发展，相信随机各种大模型持续的完善推进，未来会越来越智能化，从现在开始就应该要对此进行持续投入研究。',
      'hero.cta.primary': '免费接入',
      'hero.cta.secondary': '查看文档',
      'hero.stat1.number': '200+',
      'hero.stat1.label': 'MCP 工具',
      'hero.stat2.label': '双版本支持',
      'hero.stat3.number': '本地 + 远程',
      'hero.stat3.label': '灵活部署',

      // ---- Mode Selector ----
      'mode.mcp.label': 'MCP',
      'mode.mcp.desc': '标准协议接入',
      'mode.cli.label': 'CLI',
      'mode.cli.desc': '命令行工具',
      'mode.skill.label': 'SKILL',
      'mode.skill.desc': 'AI 技能插件',

      // ---- Features ----
      'features.tag': '核心能力',
      'features.title': 'AI 驱动的 CAD/PLM 工作流',
      'features.desc': '覆盖零件建模、装配体、工程图、PLM 数据查询全链路，让 AI 成为您的工程助手',
      'features.f1.title': 'AI 零件建模',
      'features.f1.desc': '自然语言描述零件参数，AI 自动调用 CATIA API 创建特征——拉伸、旋转、打孔、倒角，一句话生成 Part。',
      'features.f2.title': '智能装配',
      'features.f2.desc': '自动插入零部件、施加约束（贴合/对齐/偏移）、生成 BOM 表。AI 理解装配关系，一键组装。',
      'features.f3.title': '自动出图',
      'features.f3.desc': '从 3D 模型自动生成三视图、剖视图、局部放大图，标注尺寸与公差。支持 CATDrawing 格式导出。',
      'features.f4.title': 'PLM 智能查询',
      'features.f4.desc': '自然语言搜索 3DEXPERIENCE 数据库——查找零件、对比版本、追踪变更历史、生成合规报告。',

      // ---- Extended features ----
      'features.ext.gsd': 'GSD 曲面',
      'features.ext.dmu': 'DMU 运动仿真',

      // ---- Quick Start ----
      'quickstart.tag': '快速接入',
      'quickstart.title': '三种方式接入，选择最适合你的',
      'quickstart.desc': '支持 MCP 协议、CLI 命令行、Skill 插件三种接入方式，灵活适配不同开发场景',
      'quickstart.mcp.step1.title': '启动 MCP Server',
      'quickstart.mcp.step1.desc': '本地启动 CATIA V5 MCP Server，自动连接正在运行的 CATIA 会话',
      'quickstart.mcp.step2.title': '配置 MCP 客户端',
      'quickstart.mcp.step3.title': '自然语言建模',
      'quickstart.mcp.step3.desc': '打开 CATIA，用自然语言描述设计意图，AI 自动执行建模操作',
      'quickstart.cli.step1.title': '安装 CLI 工具',
      'quickstart.cli.step1.desc': 'PowerShell 一键安装脚本，支持 V5 / V6 多个版本，像CAA开发的运行包，可以通过Agent的工具自动在后台批量调用',
      'quickstart.cli.step2.title': '配置连接参数',
      'quickstart.cli.step2.desc': '选择对应版本执行，脚本自动完成环境配置，大语言模型会根据当前的环境变量，智能化的提示，你应该传入哪些参数，传入参数之后，它会自适应地填入相关位置，',
      'quickstart.cli.step3.title': '命令行操作',
      'quickstart.cli.step3.desc': '安装后即可在终端使用 catia-cli 命令执行建模操作，可以在Agent内通过语音与它聊天调用相关命令，它可以在后台自动执行一些集成化的工具',
      'quickstart.skill.hero.title': 'CATIA Skill',
      'quickstart.skill.hero.desc': '让 agent 归纳总结你们的工作流,把大量的 CLI 程序或者是 MCP 命令串联起来，形成一整套工作流,减少人工干预，提高工作效率,',
      'quickstart.skill.hero.cta': '下载 Skill',
      'quickstart.skill.install.title': '安装方式',

      // ---- Mode-specific content ----
      'mode.mcp.title': 'MCP 协议接入 — 标准开放，即配即用',
      'mode.mcp.desc': '基于标准 MCP 协议，一行 JSON 配置即可让 AI 客户端连接 CATIA 与 3DEXPERIENCE',
      'mode.cli.title': 'CLI 命令行 — 一键下载CLI 工具包',
      'mode.cli.desc': '通过命令行工具，一键下载打包开发好的CAA AUTOMATION CLI程序，调用更省Token',
      'mode.skill.title': 'My 3DEXPERIENCE Skill — 技能包',
      'mode.skill.desc': '让 agent 搭建工作流，让多种工具协同工作，实现复杂任务的自动化',

      // ---- Showcase ----
      'showcase.tag': '多平台支持',
      'showcase.title': '主流 AI 客户端原生支持',
      'showcase.desc': 'MCP 协议标准开放，CATIA 插件已接入多款 AI 开发工具，开箱即用',

      // ---- Examples ----
      'examples.tag': '使用示例',
      'examples.title': '用自然语言操控 CATIA，像对话一样建模',
      'examples.desc': '在Agent内，使用日常语言描述设计意图，Agent 会根据您的需求自动找到所对应的命令行，执行 CATIA 操作',
      'examples.e1.tag': '零件建模',
      'examples.e1.text': '创建一个直径 50mm、长度 100mm 的圆柱体，在一端打 M8 螺纹孔，深度 20mm',
      'examples.e1.result': 'AI 自动创建 Part、添加 Pad、Hole 特征',
      'examples.e2.tag': '装配操作',
      'examples.e2.text': '把 flange.CATPart 和 pipe.CATPart 装配起来，法兰面贴合，螺栓孔对齐',
      'examples.e2.result': 'AI 加载零件、添加 Contact + Coincidence 约束',
      'examples.e3.tag': '参数化修改',
      'examples.e3.text': '把当前 Part 的所有 M6 孔改为 M8，壁厚从 3mm 改成 5mm',
      'examples.e3.result': 'AI 遍历参数、批量修改并触发 Update',
      'examples.e4.tag': '工程图',
      'examples.e4.text': '给当前 Part 生成三视图 + 等轴测视图，标注关键尺寸，导出为 PDF',
      'examples.e4.result': 'AI 创建 Drawing、投影视图、生成标注并导出',
      'examples.e5.tag': 'PLM 查询',
      'examples.e5.text': '查找 project_nuobo 下所有状态为 Released 的钣金零件，列出材料与版本',
      'examples.e5.result': 'AI 查询 3DEXPERIENCE 数据库，结构化返回结果',
      'examples.e6.tag': '批量处理',
      'examples.e6.text': '把 assemblies/ 目录下所有 CATProduct 导出为 STEP 格式，放到 exports/ 目录',
      'examples.e6.result': 'AI 遍历文件、批量打开、导出、保存，全程自动化',

      // ---- Architecture ----
      'arch.tag': '技术架构',
      'arch.title': 'MCP 桥接 AI 与工业软件',
      'arch.desc': '标准 MCP 协议作为中间层，将 AI 的自然语言能力与 CATIA/3DEXPERIENCE 的专业能力无缝对接',
      'arch.ai': 'AI 客户端',
      'arch.server': 'MCP Server',
      'arch.business': '工业软件',

      // ---- Footer ----
      'footer.brand': '3DEXPERIENCE / V5 AI开放平台',
      'footer.dev': '开发者',
      'footer.dev.quickstart': '快速接入',
      'footer.dev.tools': '工具列表',
      'footer.dev.api': 'API 文档',
      'footer.support': '支持',
      'footer.support.faq': '常见问题',
      'footer.support.community': '社区讨论',
      'footer.support.contact': '联系我们',
      'footer.copyright': '© 2026 3DEXPERIENCE / V5 AI开放平台. CATIA is a registered trademark of Dassault Systèmes.',
      'footer.privacy': '隐私政策',
      'footer.terms': '服务条款',

      // ---- Login modal ----
      'login.title': '用户管理模块正在开发中',
      'login.wechat': '请扫描微信添加好友',
      'login.email': '或者使用邮件',
      'login.author': '与作者联系',
      'login.close': '我知道了',

      // ---- Code block labels ----
      'code.copy': '复制',
      'code.copied': '已复制',
      'code.clipboard': '代码已复制到剪贴板',
      'code.copyFail': '复制失败，请手动复制'
    },

    en: {
      // ---- Nav ----
      'nav.title': '3DEXPERIENCE AI Open Platform',
      'nav.features': 'Core Features',
      'nav.quickstart': 'Quick Start',
      'nav.examples': 'Examples',
      'nav.docs': 'Docs',
      'nav.login': 'Login',

      // ---- Hero ----
      'hero.title.main': '3DEXPERIENCE / V5 MCP',
      'hero.title.sub': 'AI-Driven CAD Modeling & PLM Workflow',
      'hero.desc': 'Based on standard MCP protocol, let AI assistants directly control CATIA V5 and 3DEXPERIENCE platforms.',
      'hero.desc.2': 'Natural language modeling, automated drafting, intelligent PLM queries — done with a single command. While AI still has a long way to go in pure modeling and drawing generation compared to real engineering, this technology path will not end. AI in',
      'hero.desc.3': 'software engineering has already made great progress. With continuous improvement of large models, the future will be increasingly intelligent. We should start investing in research from now on.',
      'hero.cta.primary': 'Get Started Free',
      'hero.cta.secondary': 'View Docs',
      'hero.stat1.number': '200+',
      'hero.stat1.label': 'MCP Tools',
      'hero.stat2.label': 'Dual Version Support',
      'hero.stat3.number': 'Local + Remote',
      'hero.stat3.label': 'Flexible Deployment',

      // ---- Mode Selector ----
      'mode.mcp.label': 'MCP',
      'mode.mcp.desc': 'Standard Protocol',
      'mode.cli.label': 'CLI',
      'mode.cli.desc': 'Command Line Tools',
      'mode.skill.label': 'SKILL',
      'mode.skill.desc': 'AI Skill Plugins',

      // ---- Features ----
      'features.tag': 'Core Features',
      'features.title': 'AI-Driven CAD/PLM Workflow',
      'features.desc': 'Covering the full chain of part modeling, assembly, drafting, and PLM data queries — let AI be your engineering assistant',
      'features.f1.title': 'AI Part Modeling',
      'features.f1.desc': 'Describe part parameters in natural language, AI automatically calls CATIA API to create features — pad, shaft, hole, chamfer, generate a Part in one sentence.',
      'features.f2.title': 'Smart Assembly',
      'features.f2.desc': 'Auto-insert components, apply constraints (contact/align/offset), generate BOM tables. AI understands assembly relationships, one-click assembly.',
      'features.f3.title': 'Auto Drafting',
      'features.f3.desc': 'Auto-generate three views, section views, and detail views from 3D models, annotate dimensions and tolerances. Export in CATDrawing format.',
      'features.f4.title': 'Smart PLM Query',
      'features.f4.desc': 'Search 3DEXPERIENCE database in natural language — find parts, compare versions, track change history, generate compliance reports.',

      // ---- Extended features ----
      'features.ext.gsd': 'GSD Surface',
      'features.ext.dmu': 'DMU Kinematics',

      // ---- Quick Start ----
      'quickstart.tag': 'Quick Start',
      'quickstart.title': 'Three ways to connect, choose what fits you best',
      'quickstart.desc': 'Support MCP protocol, CLI command line, and Skill plugins — flexible for different development scenarios',
      'quickstart.mcp.step1.title': 'Start MCP Server',
      'quickstart.mcp.step1.desc': 'Start CATIA V5 MCP Server locally, auto-connect to running CATIA session',
      'quickstart.mcp.step2.title': 'Configure MCP Client',
      'quickstart.mcp.step3.title': 'Natural Language Modeling',
      'quickstart.mcp.step3.desc': 'Open CATIA, describe design intent in natural language, AI executes modeling operations automatically',
      'quickstart.cli.step1.title': 'Install CLI Tools',
      'quickstart.cli.step1.desc': 'PowerShell one-click install script, supports V5/V6 multiple versions, like CAA development runtime packages, can be called in batch through Agent tools in the background',
      'quickstart.cli.step2.title': 'Configure Connection',
      'quickstart.cli.step2.desc': 'Select the corresponding version to execute, scripts auto-complete environment configuration. LLM will intelligently prompt which parameters to pass based on current environment variables, and auto-fill them.',
      'quickstart.cli.step3.title': 'Command Line Operations',
      'quickstart.cli.step3.desc': 'After installation, use catia-cli commands in terminal for modeling operations. You can chat with it via voice in Agent, and it can automatically execute integrated tools in the background',
      'quickstart.skill.hero.title': 'CATIA Skill',
      'quickstart.skill.hero.desc': 'Let agents summarize your workflows, chain CLI programs and MCP commands together into complete workflows, reduce manual intervention, improve efficiency,',
      'quickstart.skill.hero.cta': 'Download Skill',
      'quickstart.skill.install.title': 'Installation Methods',

      // ---- Mode-specific content ----
      'mode.mcp.title': 'MCP Protocol — Open Standard, Ready to Use',
      'mode.mcp.desc': 'Based on standard MCP protocol, one line of JSON config connects AI clients to CATIA and 3DEXPERIENCE',
      'mode.cli.title': 'CLI Command Line — One-Click Download CLI Toolkit',
      'mode.cli.desc': 'One-click download of pre-built CAA AUTOMATION CLI programs via command line, save tokens',
      'mode.skill.title': 'My 3DEXPERIENCE Skill — Skill Pack',
      'mode.skill.desc': 'Let agents build workflows, enable multiple tools to work together, automate complex tasks',

      // ---- Showcase ----
      'showcase.tag': 'Multi-Platform Support',
      'showcase.title': 'Native Support for Major AI Clients',
      'showcase.desc': 'MCP protocol is open-standard, CATIA plugins integrated with multiple AI development tools, ready to use',

      // ---- Examples ----
      'examples.tag': 'Examples',
      'examples.title': 'Control CATIA with Natural Language, Model Like a Conversation',
      'examples.desc': 'In the Agent, describe design intent in everyday language, the Agent automatically finds the corresponding commands and executes CATIA operations',
      'examples.e1.tag': 'Part Modeling',
      'examples.e1.text': 'Create a cylinder with 50mm diameter and 100mm length, add M8 threaded hole at one end, 20mm deep',
      'examples.e1.result': 'AI auto-creates Part, adds Pad and Hole features',
      'examples.e2.tag': 'Assembly Operation',
      'examples.e2.text': 'Assemble flange.CATPart and pipe.CATPart, flange faces in contact, bolt holes aligned',
      'examples.e2.result': 'AI loads parts, adds Contact + Coincidence constraints',
      'examples.e3.tag': 'Parametric Change',
      'examples.e3.text': 'Change all M6 holes to M8 in current Part, wall thickness from 3mm to 5mm',
      'examples.e3.result': 'AI iterates parameters, batch modifies and triggers Update',
      'examples.e4.tag': 'Drafting',
      'examples.e4.text': 'Generate three views + isometric view for current Part, annotate key dimensions, export as PDF',
      'examples.e4.result': 'AI creates Drawing, projected views, generates annotations and exports',
      'examples.e5.tag': 'PLM Query',
      'examples.e5.text': 'Find all Released sheet metal parts under project_nuobo, list materials and versions',
      'examples.e5.result': 'AI queries 3DEXPERIENCE database, returns structured results',
      'examples.e6.tag': 'Batch Processing',
      'examples.e6.text': 'Export all CATProduct files under assemblies/ directory to STEP format, save to exports/ directory',
      'examples.e6.result': 'AI iterates files, batch opens, exports, saves — fully automated',

      // ---- Architecture ----
      'arch.tag': 'Architecture',
      'arch.title': 'MCP Bridges AI and Industrial Software',
      'arch.desc': 'Standard MCP protocol as middleware, seamlessly connecting AI\'s natural language capabilities with CATIA/3DEXPERIENCE\'s professional capabilities',
      'arch.ai': 'AI Client',
      'arch.server': 'MCP Server',
      'arch.business': 'Industrial Software',

      // ---- Footer ----
      'footer.brand': '3DEXPERIENCE / V5 AI Open Platform',
      'footer.dev': 'Developers',
      'footer.dev.quickstart': 'Quick Start',
      'footer.dev.tools': 'Tool List',
      'footer.dev.api': 'API Docs',
      'footer.support': 'Support',
      'footer.support.faq': 'FAQ',
      'footer.support.community': 'Community',
      'footer.support.contact': 'Contact Us',
      'footer.copyright': '© 2026 3DEXPERIENCE / V5 AI Open Platform. CATIA is a registered trademark of Dassault Systèmes.',
      'footer.privacy': 'Privacy Policy',
      'footer.terms': 'Terms of Service',

      // ---- Login modal ----
      'login.title': 'User Management Module Under Development',
      'login.wechat': 'Scan WeChat to add friend',
      'login.email': 'Or contact via email',
      'login.author': 'contact the author',
      'login.close': 'Got it',

      // ---- Code block labels ----
      'code.copy': 'Copy',
      'code.copied': 'Copied',
      'code.clipboard': 'Code copied to clipboard',
      'code.copyFail': 'Copy failed, please copy manually'
    }
  };

  // Auto-detect language from localStorage, fallback to 'zh'
  var savedLang = localStorage.getItem('lang');
  var currentLang = (savedLang === 'en' || savedLang === 'zh') ? savedLang : 'zh';

  /**
   * Get translated string for the current language.
   * @param {string} key - Translation key
   * @returns {string} Translated text, or the key itself if not found
   */
  function t(key) {
    var dict = translations[currentLang] || translations['zh'];
    return dict.hasOwnProperty(key) ? dict[key] : key;
  }

  /**
   * Switch language, update DOM, persist, and dispatch event.
   * @param {string} lang - 'zh' or 'en'
   */
  function setLang(lang) {
    if (lang !== 'zh' && lang !== 'en') return;
    currentLang = lang;

    // Persist
    localStorage.setItem('lang', lang);

    // Update html lang attribute
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';

    // Update all elements with data-i18n attribute
    var elements = document.querySelectorAll('[data-i18n]');
    for (var i = 0; i < elements.length; i++) {
      var el = elements[i];
      var key = el.getAttribute('data-i18n');
      var text = t(key);
      if (text !== key) {
        el.textContent = text;
      }
    }

    // Dispatch custom event
    document.dispatchEvent(new CustomEvent('langchange', { detail: { lang: lang } }));
  }

  // Expose global I18N object
  window.I18N = {
    translations: translations,
    currentLang: currentLang,
    setLang: setLang,
    t: t
  };

  // Auto-apply saved language on page load
  // Wait for DOM to be ready before updating elements
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      setLang(currentLang);
    });
  } else {
    setLang(currentLang);
  }
})();
