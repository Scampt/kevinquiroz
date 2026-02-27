import { useState, useEffect, useRef } from "react";
const themes = {
  dark: {
    bg: "#07070d", bg2: "#0c0c14", card: "rgba(14,14,22,0.8)", cardBorder: "rgba(255,255,255,0.06)",
    text: "#e2e2e2", text2: "#999", text3: "#555", accent: "#00e89a", accent2: "#00c9ff",
    navBg: "rgba(7,7,13,0.88)", glow: "rgba(0,232,154,0.08)", gradStart: "#00e89a", gradEnd: "#00c9ff",
    surface: "#111119", overlay: "rgba(0,0,0,0.8)", white: "#ffffff",
  },
  light: {
    bg: "#f8f9fc", bg2: "#ffffff", card: "rgba(255,255,255,0.85)", cardBorder: "rgba(0,0,0,0.07)",
    text: "#1a1a2e", text2: "#555", text3: "#999", accent: "#0d9668", accent2: "#0077b6",
    navBg: "rgba(248,249,252,0.9)", glow: "rgba(13,150,104,0.06)", gradStart: "#0d9668", gradEnd: "#0077b6",
    surface: "#eef0f4", overlay: "rgba(255,255,255,0.85)", white: "#1a1a2e",
  },
};

/* ═══════════════════════════════════════════════════════════════
   5-LANGUAGE TRANSLATIONS (ES default, EN, DE, FR, ZH)
   ═══════════════════════════════════════════════════════════════ */
const langs = {
  es: {
    code: "ES", flag: "🇲🇽",
    nav: ["Inicio","Sobre Mí","Servicios","Workflows","Stack","Proyectos","Contacto"],
    keys: ["hero","about","services","workflows","stack","projects","contact"],
    theme: { light: "Día", dark: "Noche" },
    hero: {
      hi: "Hola, soy", name: "Kevin Quiroz",
      r1: "Web Systems Engineer", r2: "& Automation Architect",
      desc: "Diseño sitios web de alto rendimiento, construyo arquitecturas de automatización escalables y sistemas digitales confiables potenciados con IA.",
      micro: "// Desde arquitectura frontend hasta automatizaciones complejas con n8n",
      cta1: "Ver Workflows", cta2: "Contáctame",
    },
    about: {
      label: "SOBRE MÍ", title: "Quién soy",
      p1: "Soy un ingeniero autodidacta enfocado en sistemas. Lo que me define es mi hambre constante por aprender, construir y automatizar. Mi trabajo conecta rendimiento web, SEO técnico, automatización de flujos, integraciones con IA y testing de calidad.",
      p2: "No solo construyo interfaces — diseño arquitecturas digitales completas que conectan frontend, backend, APIs y automatización en ecosistemas escalables.",
      approach: "Mi Enfoque",
      q1: "¿Es performante?", q2: "¿Es escalable?", q3: "¿Es automatizable?",
      qEnd: "Si alguna respuesta es no — no está terminado.",
      selfLabel: "APRENDIZAJE CONTINUO",
      selfDesc: "Mi conocimiento técnico viene de construir proyectos reales, experimentar con herramientas y resolver problemas complejos en producción.",
      certs: ["SEO Essentials — Semrush","SEO Crash Course — Brian Dean","SEO Fundamentals — Greg Gifford","Marketing Digital — Google Academy","Diseño Web Profesional — Udemy"],
      expLabel: "EXPERIENCIA",
      exp: [
        { t: "CX Operations & Automation — Interprika", d: "Oct 2025 – Presente", desc: "Diseño de workflows conectando CRMs, formularios y marketing vía Zapier, Make y n8n. Testing QA y documentación." },
        { t: "Frontend Developer — Bedrock Digital", d: "Nov 2024 – Abr 2025", desc: "Temas WordPress personalizados, layouts con React.js, UI/UX y SEO para múltiples clientes." },
      ],
    },
    services: {
      label: "SERVICIOS", title: "Lo Que Hago", sub: "No construyo páginas. Construyo ecosistemas digitales.",
      items: [
        { icon: "⚡", t: "Sitios Web de Alto Rendimiento", desc: "Next.js, React, WordPress, Shopify, Tiendanube. HTML5 semántico, Core Web Vitals, mobile-first.", tag: "Sitios que los buscadores entienden y los usuarios confían." },
        { icon: "🔍", t: "SEO Técnico", desc: "URL limpias, schema markup, metadatos, sitemap, robots.txt, Search Console, Rank Math, Yoast.", tag: "No 'agrego SEO después.' Lo construyo desde los cimientos." },
        { icon: "🔧", t: "Arquitectura de Automatización", desc: "Workflows end-to-end con n8n, Zapier, Make. APIs, webhooks, CRM, error handling, QA.", tag: "Automatizaciones que no fallan silenciosamente." },
        { icon: "🛡️", t: "QA & Confiabilidad", desc: "Testing manual, regresión, matrices de prueba, CI/CD, revisiones GitHub.", tag: "¿Qué se rompe si esto escala?" },
        { icon: "🧠", t: "IA & Sistemas Creativos", desc: "ComfyUI, Seedream, Whisper, OpenAI, Gemini, Anthropic. Pipelines generativos y prompt engineering.", tag: "No como gimmick — sino como infraestructura." },
        { icon: "💬", t: "CX & Live Chat", desc: "Chatwoot, Tidio, buffer humano en workflows. Chat + CRM + automatización unidos.", tag: "Automatización y toque humano, juntos." },
      ],
    },
    workflows: {
      label: "N8N WORKFLOWS", title: "Arquitecturas de Automatización",
      sub: "Workflows reales desplegados en producción. Cada uno resuelve problemas complejos de negocio.",
      viewBtn: "Explorar Workflow", closeBtn: "Cerrar", protection: "Vista protegida — Solo visualización",
      cats: [
        { name: "🎊 Bodas — Automatización de Eventos", desc: "Sistema completo para gestión de bodas. Formularios, CRM, Google Sheets y notificaciones.", wfs: [
          { name: "Scrapping Sheet", desc: "Web scraping automatizado de proveedores y venues → limpieza de datos → deduplicación → sync con Google Sheets en tiempo real. Manejo de errores para URLs rotas y rate limiting.", nodes: [
            {id:"trigger",name:"Schedule Trigger",x:50,y:140,type:"trigger"},
            {id:"config",name:"Set Config",x:200,y:140,type:"action"},
            {id:"http1",name:"HTTP Request",x:350,y:80,type:"action"},
            {id:"http2",name:"HTTP Request 2",x:350,y:200,type:"action"},
            {id:"extract",name:"HTML Extract",x:510,y:80,type:"action"},
            {id:"extract2",name:"HTML Extract 2",x:510,y:200,type:"action"},
            {id:"merge",name:"Merge",x:660,y:140,type:"merge"},
            {id:"dedup",name:"Remove Dupes",x:800,y:140,type:"action"},
            {id:"if1",name:"IF Valid",x:940,y:90,type:"condition"},
            {id:"sheets",name:"Google Sheets",x:1080,y:60,type:"output"},
            {id:"error",name:"Error Log",x:1080,y:180,type:"error"},
            {id:"slack",name:"Slack Alert",x:940,y:200,type:"output"},
          ], connections: [[0,1],[1,2],[1,3],[2,4],[3,5],[4,6],[5,6],[6,7],[7,8],[8,9],[8,11],[7,10]], color: "#ff6b6b" },
          { name: "Email Status Bodas", desc: "Tracking de emails a novios y proveedores. Monitoreo de apertura, clicks, respuestas. Seguimiento automático con escalamiento a llamada si no hay respuesta en 48h.", nodes: [
            {id:"cron",name:"Every 2h Cron",x:50,y:140,type:"trigger"},
            {id:"sheets",name:"Read Sheets",x:200,y:140,type:"action"},
            {id:"loop",name:"Loop Items",x:350,y:140,type:"action"},
            {id:"gmail",name:"Gmail Check",x:500,y:90,type:"action"},
            {id:"switch",name:"Switch Status",x:650,y:90,type:"condition"},
            {id:"opened",name:"Mark Opened",x:800,y:40,type:"action"},
            {id:"replied",name:"Mark Replied",x:800,y:120,type:"action"},
            {id:"noreply",name:"No Reply?",x:800,y:200,type:"condition"},
            {id:"followup",name:"Send Follow-up",x:950,y:160,type:"action"},
            {id:"escalate",name:"Escalate Call",x:950,y:240,type:"error"},
            {id:"update",name:"Update Sheet",x:1100,y:140,type:"output"},
          ], connections: [[0,1],[1,2],[2,3],[3,4],[4,5],[4,6],[4,7],[7,8],[7,9],[5,10],[6,10],[8,10]], color: "#ffd93d" },
        ]},
        { name: "💪 JousFit — Automatización Fitness", desc: "Pipeline completo para negocio fitness. 10+ versiones iteradas, chat inteligente y anti-fraude.", wfs: [
          { name: "Chatwoot V0–V10", desc: "Evolución de 10 versiones: desde chat básico hasta sistema sofisticado con routing IA, respuestas automatizadas, detección de intención, y escalamiento a agente humano preservando contexto completo.", nodes: [
            {id:"webhook",name:"Chatwoot Webhook",x:50,y:150,type:"trigger"},
            {id:"parse",name:"Parse Message",x:200,y:150,type:"action"},
            {id:"context",name:"Load Context",x:350,y:100,type:"action"},
            {id:"supabase",name:"Supabase Read",x:350,y:210,type:"action"},
            {id:"ai",name:"OpenAI Classify",x:520,y:150,type:"action"},
            {id:"switch",name:"Intent Switch",x:680,y:150,type:"condition"},
            {id:"auto",name:"Auto Reply",x:840,y:60,type:"action"},
            {id:"human",name:"Human Buffer",x:840,y:150,type:"action"},
            {id:"escalate",name:"Escalate Agent",x:840,y:240,type:"error"},
            {id:"send",name:"Send to Chatwoot",x:1000,y:100,type:"output"},
            {id:"log",name:"Log Interaction",x:1000,y:210,type:"output"},
            {id:"wait",name:"Wait Response",x:680,y:280,type:"action"},
          ], connections: [[0,1],[1,2],[1,3],[2,4],[3,4],[4,5],[5,6],[5,7],[5,8],[6,9],[7,9],[8,11],[7,10],[11,7]], color: "#4ecdc4" },
          { name: "Reporte Fraudes Shopify", desc: "Detección automatizada de transacciones sospechosas. Análisis de patrones (IP, email, monto, frecuencia), scoring de riesgo, alertas Slack y documentación automática en Google Sheets.", nodes: [
            {id:"hook",name:"Shopify Webhook",x:50,y:140,type:"trigger"},
            {id:"parse",name:"Parse Order",x:200,y:140,type:"action"},
            {id:"ip",name:"Check IP",x:370,y:70,type:"action"},
            {id:"email",name:"Check Email",x:370,y:150,type:"action"},
            {id:"freq",name:"Check Frequency",x:370,y:230,type:"action"},
            {id:"merge",name:"Merge Signals",x:540,y:150,type:"merge"},
            {id:"score",name:"Risk Score",x:690,y:150,type:"action"},
            {id:"if",name:"IF High Risk",x:840,y:150,type:"condition"},
            {id:"flag",name:"Flag Order",x:980,y:80,type:"error"},
            {id:"slack",name:"Slack Alert",x:980,y:160,type:"output"},
            {id:"sheet",name:"Log to Sheets",x:980,y:240,type:"output"},
            {id:"ok",name:"Mark Safe",x:840,y:280,type:"action"},
          ], connections: [[0,1],[1,2],[1,3],[1,4],[2,5],[3,5],[4,5],[5,6],[6,7],[7,8],[7,9],[7,10],[7,11]], color: "#f97316" },
          { name: "Buffer Humano", desc: "Sistema inteligente: cuando la IA no tiene certeza (confidence < 70%), el flujo pausa, notifica a un agente humano con contexto completo, espera respuesta, y continúa el flujo con la decisión humana.", nodes: [
            {id:"in",name:"Incoming Message",x:50,y:150,type:"trigger"},
            {id:"ctx",name:"Build Context",x:200,y:150,type:"action"},
            {id:"ai",name:"OpenAI Analyze",x:360,y:150,type:"action"},
            {id:"conf",name:"Confidence Check",x:530,y:150,type:"condition"},
            {id:"auto",name:"Auto Response",x:700,y:70,type:"action"},
            {id:"notify",name:"Notify Agent",x:700,y:230,type:"action"},
            {id:"wait",name:"Wait for Human",x:860,y:230,type:"action"},
            {id:"receive",name:"Agent Response",x:1010,y:230,type:"trigger"},
            {id:"send",name:"Send Reply",x:870,y:70,type:"output"},
            {id:"log",name:"Log Decision",x:1010,y:70,type:"output"},
            {id:"save",name:"Save to Supabase",x:1010,y:150,type:"output"},
          ], connections: [[0,1],[1,2],[2,3],[3,4],[3,5],[4,8],[5,6],[6,7],[7,8],[8,9],[8,10]], color: "#06b6d4" },
        ]},
        { name: "🏢 Valt — Ecosistema Marketing", desc: "Arquitectura para operaciones de marketing digital. Email, e-commerce y contenido con IA.", wfs: [
          { name: "Mailchimp Automation", desc: "Email marketing automatizado: segmentación por comportamiento, triggers de compra, A/B testing de subject lines, sync bidireccional con CRM y reporting automático.", nodes: [
            {id:"trigger",name:"Purchase Webhook",x:50,y:150,type:"trigger"},
            {id:"enrich",name:"Enrich Contact",x:200,y:150,type:"action"},
            {id:"segment",name:"Segment Logic",x:370,y:150,type:"condition"},
            {id:"new",name:"New Customer",x:540,y:70,type:"action"},
            {id:"repeat",name:"Repeat Buyer",x:540,y:150,type:"action"},
            {id:"vip",name:"VIP Flow",x:540,y:230,type:"action"},
            {id:"mc1",name:"Mailchimp Add",x:710,y:70,type:"output"},
            {id:"mc2",name:"Mailchimp Tag",x:710,y:150,type:"output"},
            {id:"mc3",name:"Mailchimp VIP",x:710,y:230,type:"output"},
            {id:"ab",name:"A/B Subject",x:870,y:150,type:"action"},
            {id:"send",name:"Send Campaign",x:1020,y:150,type:"output"},
          ], connections: [[0,1],[1,2],[2,3],[2,4],[2,5],[3,6],[4,7],[5,8],[6,9],[7,9],[8,9],[9,10]], color: "#ffe66d" },
          { name: "Transcripción Whisper", desc: "Pipeline: recepción de audio → transcripción con Whisper → resumen inteligente con GPT → extracción de action items → distribución a Google Docs, Slack y email.", nodes: [
            {id:"upload",name:"Audio Upload",x:50,y:150,type:"trigger"},
            {id:"validate",name:"Validate Format",x:200,y:150,type:"action"},
            {id:"whisper",name:"Whisper API",x:370,y:150,type:"action"},
            {id:"clean",name:"Clean Text",x:530,y:150,type:"action"},
            {id:"gpt",name:"GPT Summarize",x:690,y:100,type:"action"},
            {id:"actions",name:"Extract Actions",x:690,y:220,type:"action"},
            {id:"docs",name:"Google Docs",x:860,y:60,type:"output"},
            {id:"slack",name:"Slack Post",x:860,y:140,type:"output"},
            {id:"email",name:"Email Summary",x:860,y:220,type:"output"},
            {id:"tasks",name:"Create Tasks",x:1020,y:220,type:"output"},
          ], connections: [[0,1],[1,2],[2,3],[3,4],[3,5],[4,6],[4,7],[5,8],[5,9]], color: "#a78bfa" },
          { name: "Hotmart Integration", desc: "Gestión de productos digitales: procesamiento de compras en tiempo real, provisión de acceso, onboarding automatizado con secuencia de emails y seguimiento post-venta.", nodes: [
            {id:"hook",name:"Hotmart Webhook",x:50,y:150,type:"trigger"},
            {id:"parse",name:"Parse Purchase",x:200,y:150,type:"action"},
            {id:"switch",name:"Event Type",x:370,y:150,type:"condition"},
            {id:"new",name:"New Purchase",x:540,y:70,type:"action"},
            {id:"cancel",name:"Cancellation",x:540,y:230,type:"error"},
            {id:"access",name:"Grant Access",x:700,y:70,type:"action"},
            {id:"welcome",name:"Welcome Email",x:860,y:70,type:"output"},
            {id:"onboard",name:"Onboarding Seq",x:1020,y:70,type:"action"},
            {id:"revoke",name:"Revoke Access",x:700,y:230,type:"action"},
            {id:"save",name:"Save to DB",x:860,y:150,type:"output"},
          ], connections: [[0,1],[1,2],[2,3],[2,4],[3,5],[5,6],[6,7],[4,8],[5,9],[8,9]], color: "#fb7185" },
        ]},
      ],
    },
    stack: { label: "TECH STACK", title: "Herramientas & Tecnologías" },
    projects: {
      label: "PROYECTOS", title: "Trabajo Destacado", sub: "Proyectos reales con enfoque de sistemas.",
      items: [
        { t: "n8n Bodas", desc: "Automatización de eventos. Scraping, email tracking, CRM sync.", tags: ["n8n","Webhooks","Sheets","CRM"] },
        { t: "n8n JousFit", desc: "Fitness: Chatwoot, buffer humano, fraude Shopify, backfills.", tags: ["n8n","Chatwoot","Shopify","Supabase"] },
        { t: "n8n Valt", desc: "Marketing: Mailchimp, Hotmart, Whisper transcription.", tags: ["n8n","Mailchimp","Hotmart","Whisper"] },
        { t: "VantageWP Redirect", desc: "Plugin WordPress para redirección inteligente.", tags: ["WordPress","PHP","Plugin"] },
        { t: "Bedrock Frontend", desc: "Frontend con WordPress y React.js para clientes.", tags: ["React.js","WordPress","SEO"] },
        { t: "Portfolio SEO-First", desc: "Next.js optimizado para Core Web Vitals.", tags: ["Next.js","Vercel","Performance"] },
      ],
    },
    systems: { label: "PENSAMIENTO SISTÉMICO", title: "Todo Habla con Todo", sub: "Y si no — yo diseño el puente.", nodes: ["Frontend","APIs","Automatizaciones","Bases de Datos","Modelos IA","CRM","SEO"] },
    philosophy: { title: "Filosofía", traits: ["Rápido","Indexable","Escalable","Automatizable","Testeable","Documentado","Confiable"], rules: ["Si puede ser automatizado, lo automatizo.","Si puede ser optimizado, lo optimizo.","Si puede fallar, lo testeo."] },
    contact: { label: "CONTACTO", title: "Construyamos Algo", sub: "¿Proyecto que necesita rendimiento, automatización y escala?", cta: "Enviar Email", loc: "Morelos, México", avail: "Disponible remoto" },
    footer: "Kevin Quiroz — Web Systems Engineer & Automation Architect",
  },
  en: {
    code: "EN", flag: "🇺🇸",
    nav: ["Home","About","Services","Workflows","Stack","Projects","Contact"],
    keys: ["hero","about","services","workflows","stack","projects","contact"],
    theme: { light: "Light", dark: "Dark" },
    hero: { hi: "Hi, I'm", name: "Kevin Quiroz", r1: "Web Systems Engineer", r2: "& Automation Architect", desc: "I design high-performance websites, build scalable automation workflows, and engineer reliable digital systems powered by AI.", micro: "// From frontend architecture to complex n8n automations", cta1: "View Workflows", cta2: "Contact Me" },
    about: { label: "ABOUT", title: "Who I Am", p1: "I'm a self-taught, systems-focused engineer. What defines me is my constant drive to learn, build, and automate. My work connects web performance, technical SEO, workflow automation, AI integrations, and quality testing.", p2: "I don't just build interfaces — I design complete digital architectures connecting frontend, backend, APIs, and automation into scalable ecosystems.", approach: "My Approach", q1: "Is it performant?", q2: "Is it scalable?", q3: "Is it automatable?", qEnd: "If any answer is no — it's not finished.", selfLabel: "CONTINUOUS LEARNING", selfDesc: "My technical knowledge comes from building real projects, experimenting with tools, and solving complex problems in production.", certs: ["SEO Essentials — Semrush","SEO Crash Course — Brian Dean","SEO Fundamentals — Greg Gifford","Digital Marketing — Google Academy","Professional Web Design — Udemy"], expLabel: "EXPERIENCE", exp: [{ t: "CX Operations & Automation — Interprika", d: "Oct 2025 – Present", desc: "Workflow automation design connecting CRMs, forms, and marketing via Zapier, Make, and n8n. QA testing and documentation." },{ t: "Frontend Developer — Bedrock Digital", d: "Nov 2024 – Apr 2025", desc: "Custom WordPress themes, React.js layouts, UI/UX and SEO for multiple clients." }] },
    services: { label: "SERVICES", title: "What I Do", sub: "I don't build pages. I build digital ecosystems.", items: [{ icon: "⚡", t: "High-Performance Websites", desc: "Next.js, React, WordPress, Shopify, Tiendanube. Semantic HTML5, Core Web Vitals, mobile-first.", tag: "Sites search engines understand and users trust." },{ icon: "🔍", t: "Technical SEO", desc: "Clean URLs, schema markup, metadata, sitemap, robots.txt, Search Console, Rank Math, Yoast.", tag: "I don't 'add SEO later.' I build it in." },{ icon: "🔧", t: "Automation Architecture", desc: "End-to-end n8n, Zapier, Make workflows. APIs, webhooks, CRM, error handling, QA.", tag: "Automations that don't break silently." },{ icon: "🛡️", t: "QA & Reliability", desc: "Manual testing, regression, test matrices, CI/CD, GitHub reviews.", tag: "What breaks if this scales?" },{ icon: "🧠", t: "AI & Creative Systems", desc: "ComfyUI, Seedream, Whisper, OpenAI, Gemini, Anthropic. Generative pipelines & prompt engineering.", tag: "Not a gimmick — infrastructure." },{ icon: "💬", t: "CX & Live Chat", desc: "Chatwoot, Tidio, human buffer in workflows. Chat + CRM + automation unified.", tag: "Automation and human touch, together." }] },
    workflows: { label: "N8N WORKFLOWS", title: "Automation Architectures", sub: "Real workflows deployed in production solving complex business problems.", viewBtn: "Explore Workflow", closeBtn: "Close", protection: "Protected view — Read only", cats: [
      { name: "🎊 Bodas — Event Automation", desc: "Complete system for wedding management. Forms, CRM, Google Sheets, and notifications.", wfs: [
        { name: "Scrapping Sheet", desc: "Automated web scraping of vendors and venues → data cleaning → deduplication → real-time Google Sheets sync. Error handling for broken URLs and rate limiting." },
        { name: "Email Status Bodas", desc: "Email tracking to couples and vendors. Open, click, and reply monitoring. Automatic follow-up with call escalation if no response in 48h." },
      ]},
      { name: "💪 JousFit — Fitness Automation", desc: "Complete pipeline for fitness business. 10+ iterated versions, smart chat, and anti-fraud.", wfs: [
        { name: "Chatwoot V0–V10", desc: "Evolution of 10 versions: from basic chat to a sophisticated system with AI routing, automated responses, intent detection, and human agent escalation preserving full context." },
        { name: "Shopify Fraud Report", desc: "Automated detection of suspicious transactions. Pattern analysis (IP, email, amount, frequency), risk scoring, Slack alerts, and automatic Google Sheets logging." },
        { name: "Human Buffer", desc: "Smart system: when AI confidence is < 70%, the flow pauses, notifies a human agent with full context, waits for a response, and continues with the human decision." },
      ]},
      { name: "🏢 Valt — Marketing Ecosystem", desc: "Architecture for digital marketing operations. Email, e-commerce, and AI-powered content.", wfs: [
        { name: "Mailchimp Automation", desc: "Automated email marketing: behavioral segmentation, purchase triggers, A/B subject line testing, bidirectional CRM sync, and automatic reporting." },
        { name: "Whisper Transcription", desc: "Pipeline: audio reception → Whisper transcription → intelligent GPT summary → action item extraction → distribution to Google Docs, Slack, and email." },
        { name: "Hotmart Integration", desc: "Digital product management: real-time purchase processing, access provisioning, automated onboarding email sequence, and post-sale follow-up." },
      ]},
    ]},
    stack: { label: "TECH STACK", title: "Tools & Technologies" },
    projects: { label: "PROJECTS", title: "Featured Work", sub: "Real projects with a systems approach.", items: [{ t: "n8n Bodas", desc: "Event automation. Scraping, email tracking, CRM sync.", tags: ["n8n","Webhooks","Sheets","CRM"] },{ t: "n8n JousFit", desc: "Fitness: Chatwoot, human buffer, Shopify fraud, backfills.", tags: ["n8n","Chatwoot","Shopify","Supabase"] },{ t: "n8n Valt", desc: "Marketing: Mailchimp, Hotmart, Whisper transcription.", tags: ["n8n","Mailchimp","Hotmart","Whisper"] },{ t: "VantageWP Redirect", desc: "WordPress plugin for smart redirection.", tags: ["WordPress","PHP","Plugin"] },{ t: "Bedrock Frontend", desc: "Frontend with WordPress and React.js for clients.", tags: ["React.js","WordPress","SEO"] },{ t: "Portfolio SEO-First", desc: "Next.js optimized for Core Web Vitals.", tags: ["Next.js","Vercel","Performance"] }] },
    systems: { label: "SYSTEMS THINKING", title: "Everything Talks to Everything", sub: "And if it doesn't — I design the bridge.", nodes: ["Frontend","APIs","Automations","Databases","AI Models","CRM","SEO"] },
    philosophy: { title: "Philosophy", traits: ["Fast","Indexable","Scalable","Automatable","Testable","Documented","Reliable"], rules: ["If it can be automated, I automate it.","If it can be optimized, I optimize it.","If it can fail, I test it."] },
    contact: { label: "CONTACT", title: "Let's Build Something", sub: "Project needing performance, automation, and scale?", cta: "Send Email", loc: "Morelos, Mexico", avail: "Available remote" },
    footer: "Kevin Quiroz — Web Systems Engineer & Automation Architect",
  },
  de: {
    code: "DE", flag: "🇩🇪",
    nav: ["Start","Über Mich","Dienste","Workflows","Stack","Projekte","Kontakt"],
    keys: ["hero","about","services","workflows","stack","projects","contact"],
    theme: { light: "Hell", dark: "Dunkel" },
    hero: { hi: "Hallo, ich bin", name: "Kevin Quiroz", r1: "Web Systems Engineer", r2: "& Automation Architect", desc: "Ich entwerfe leistungsstarke Websites, skalierbare Automatisierungs-Workflows und zuverlässige digitale Systeme mit KI.", micro: "// Von Frontend-Architektur bis zu komplexen n8n-Automatisierungen", cta1: "Workflows ansehen", cta2: "Kontakt" },
    about: { label: "ÜBER MICH", title: "Wer ich bin", p1: "Ich bin ein autodidaktischer, systemorientierter Ingenieur. Was mich definiert, ist mein ständiger Antrieb zu lernen, zu bauen und zu automatisieren.", p2: "Ich baue nicht nur Interfaces — ich entwerfe vollständige digitale Architekturen, die Frontend, Backend, APIs und Automatisierung verbinden.", approach: "Mein Ansatz", q1: "Ist es performant?", q2: "Ist es skalierbar?", q3: "Ist es automatisierbar?", qEnd: "Wenn eine Antwort nein ist — ist es nicht fertig.", selfLabel: "KONTINUIERLICHES LERNEN", selfDesc: "Mein technisches Wissen stammt aus realen Projekten und dem Lösen komplexer Probleme in der Produktion.", certs: ["SEO Essentials — Semrush","SEO Crash Course — Brian Dean","SEO Fundamentals — Greg Gifford","Digitales Marketing — Google Academy","Web Design Kurs — Udemy"], expLabel: "ERFAHRUNG", exp: [{ t: "CX Operations & Automation — Interprika", d: "Okt 2025 – Heute", desc: "Workflow-Automatisierung mit Zapier, Make und n8n. QA-Tests und Dokumentation." },{ t: "Frontend Developer — Bedrock Digital", d: "Nov 2024 – Apr 2025", desc: "WordPress-Themes, React.js, UI/UX und SEO für mehrere Kunden." }] },
    services: { label: "DIENSTE", title: "Was ich mache", sub: "Ich baue keine Seiten. Ich baue digitale Ökosysteme.", items: [{ icon: "⚡", t: "Hochleistungs-Websites", desc: "Next.js, React, WordPress, Shopify. Semantisches HTML5, Core Web Vitals.", tag: "Websites die Suchmaschinen verstehen." },{ icon: "🔍", t: "Technisches SEO", desc: "Saubere URLs, Schema Markup, Metadaten, Search Console, Rank Math.", tag: "SEO von Anfang an eingebaut." },{ icon: "🔧", t: "Automatisierungs-Architektur", desc: "End-to-end n8n, Zapier, Make Workflows. APIs, Webhooks, CRM.", tag: "Automatisierungen die nicht still versagen." },{ icon: "🛡️", t: "QA & Zuverlässigkeit", desc: "Manuelles Testing, Regression, CI/CD, GitHub Reviews.", tag: "Was bricht wenn es skaliert?" },{ icon: "🧠", t: "KI & Kreative Systeme", desc: "ComfyUI, Seedream, Whisper, OpenAI, Gemini, Anthropic.", tag: "Nicht als Gimmick — als Infrastruktur." },{ icon: "💬", t: "CX & Live Chat", desc: "Chatwoot, Tidio, menschlicher Puffer in Workflows.", tag: "Automatisierung und menschliche Note, vereint." }] },
    workflows: { label: "N8N WORKFLOWS", title: "Automatisierungs-Architekturen", sub: "Echte Workflows in Produktion. Jeder löst komplexe Geschäftsprobleme.", viewBtn: "Workflow erkunden", closeBtn: "Schließen", protection: "Geschützte Ansicht — Nur lesen", cats: [
      { name: "🎊 Bodas — Veranstaltungs-Automatisierung", desc: "Vollständiges System für Hochzeitsmanagement. Formulare, CRM, Google Sheets und Benachrichtigungen.", wfs: [
        { name: "Scrapping Sheet", desc: "Automatisches Web-Scraping von Anbietern und Venues → Datenbereinigung → Deduplizierung → Echtzeit-Sync mit Google Sheets. Fehlerbehandlung für defekte URLs und Rate-Limiting." },
        { name: "Email Status Bodas", desc: "E-Mail-Tracking zu Brautpaaren und Anbietern. Öffnungs-, Klick- und Antwortüberwachung. Automatisches Follow-up mit Anruf-Eskalation bei fehlender Antwort in 48h." },
      ]},
      { name: "💪 JousFit — Fitness-Automatisierung", desc: "Vollständige Pipeline für Fitness-Business. 10+ iterierte Versionen, intelligenter Chat und Anti-Betrug.", wfs: [
        { name: "Chatwoot V0–V10", desc: "Evolution von 10 Versionen: vom einfachen Chat zu komplexem System mit KI-Routing, automatisierten Antworten, Absichtserkennung und Eskalation zu menschlichen Agenten mit vollem Kontext." },
        { name: "Shopify Betrugsreport", desc: "Automatisierte Erkennung verdächtiger Transaktionen. Mustererkennung (IP, E-Mail, Betrag, Häufigkeit), Risikobewertung, Slack-Alerts und automatische Google Sheets-Protokollierung." },
        { name: "Menschlicher Puffer", desc: "Intelligentes System: wenn die KI-Konfidenz < 70% ist, pausiert der Ablauf, benachrichtigt einen menschlichen Agenten mit vollem Kontext und setzt mit seiner Entscheidung fort." },
      ]},
      { name: "🏢 Valt — Marketing-Ökosystem", desc: "Architektur für digitale Marketing-Operationen. E-Mail, E-Commerce und KI-Inhalte.", wfs: [
        { name: "Mailchimp Automation", desc: "Automatisiertes E-Mail-Marketing: Verhaltens-Segmentierung, Kauf-Trigger, A/B-Betreff-Tests, bidirektionaler CRM-Sync und automatisches Reporting." },
        { name: "Whisper Transkription", desc: "Pipeline: Audio-Empfang → Whisper-Transkription → intelligente GPT-Zusammenfassung → Aktionspunkte-Extraktion → Verteilung an Google Docs, Slack und E-Mail." },
        { name: "Hotmart Integration", desc: "Digitales Produkt-Management: Echtzeit-Kaufabwicklung, Zugangsbereitstellung, automatisierte Onboarding-E-Mail-Sequenz und Nachverkaufs-Follow-up." },
      ]},
    ]},
    stack: { label: "TECH STACK", title: "Werkzeuge & Technologien" },
    projects: { label: "PROJEKTE", title: "Ausgewählte Arbeit", sub: "Echte Projekte mit Systemansatz.", items: [{ t: "n8n Bodas", desc: "Event-Automatisierung. Scraping, E-Mail-Tracking.", tags: ["n8n","Webhooks","Sheets","CRM"] },{ t: "n8n JousFit", desc: "Fitness: Chatwoot, Human Buffer, Shopify Betrug.", tags: ["n8n","Chatwoot","Shopify","Supabase"] },{ t: "n8n Valt", desc: "Marketing: Mailchimp, Hotmart, Whisper.", tags: ["n8n","Mailchimp","Hotmart","Whisper"] },{ t: "VantageWP", desc: "WordPress Plugin für Umleitung.", tags: ["WordPress","PHP"] },{ t: "Bedrock Frontend", desc: "Frontend mit WordPress und React.js.", tags: ["React.js","WordPress"] },{ t: "Portfolio", desc: "Next.js für Core Web Vitals optimiert.", tags: ["Next.js","Vercel"] }] },
    systems: { label: "SYSTEMDENKEN", title: "Alles spricht mit Allem", sub: "Und wenn nicht — entwerfe ich die Brücke.", nodes: ["Frontend","APIs","Automatisierungen","Datenbanken","KI-Modelle","CRM","SEO"] },
    philosophy: { title: "Philosophie", traits: ["Schnell","Indexierbar","Skalierbar","Automatisierbar","Testbar","Dokumentiert","Zuverlässig"], rules: ["Wenn automatisierbar, automatisiere ich.","Wenn optimierbar, optimiere ich.","Wenn es scheitern kann, teste ich."] },
    contact: { label: "KONTAKT", title: "Lass uns etwas bauen", sub: "Projekt das Leistung und Automatisierung braucht?", cta: "E-Mail senden", loc: "Morelos, Mexiko", avail: "Remote verfügbar" },
    footer: "Kevin Quiroz — Web Systems Engineer & Automation Architect",
  },
  fr: {
    code: "FR", flag: "🇫🇷",
    nav: ["Accueil","À propos","Services","Workflows","Stack","Projets","Contact"],
    keys: ["hero","about","services","workflows","stack","projects","contact"],
    theme: { light: "Jour", dark: "Nuit" },
    hero: { hi: "Bonjour, je suis", name: "Kevin Quiroz", r1: "Web Systems Engineer", r2: "& Automation Architect", desc: "Je conçois des sites web performants, des workflows d'automatisation évolutifs et des systèmes numériques fiables propulsés par l'IA.", micro: "// De l'architecture frontend aux automatisations complexes n8n", cta1: "Voir Workflows", cta2: "Me contacter" },
    about: { label: "À PROPOS", title: "Qui je suis", p1: "Je suis un ingénieur autodidacte orienté systèmes. Ce qui me définit c'est ma soif constante d'apprendre, construire et automatiser.", p2: "Je ne construis pas que des interfaces — je conçois des architectures numériques complètes connectant frontend, backend, APIs et automatisation.", approach: "Mon Approche", q1: "Est-ce performant?", q2: "Est-ce évolutif?", q3: "Est-ce automatisable?", qEnd: "Si une réponse est non — ce n'est pas fini.", selfLabel: "APPRENTISSAGE CONTINU", selfDesc: "Mes connaissances viennent de projets réels et de la résolution de problèmes complexes en production.", certs: ["SEO Essentials — Semrush","SEO Crash Course — Brian Dean","SEO Fundamentals — Greg Gifford","Marketing Digital — Google Academy","Web Design — Udemy"], expLabel: "EXPÉRIENCE", exp: [{ t: "CX Operations & Automation — Interprika", d: "Oct 2025 – Présent", desc: "Conception de workflows avec Zapier, Make et n8n. Tests QA et documentation." },{ t: "Frontend Developer — Bedrock Digital", d: "Nov 2024 – Avr 2025", desc: "Thèmes WordPress, React.js, UI/UX et SEO pour clients." }] },
    services: { label: "SERVICES", title: "Ce que je fais", sub: "Je ne construis pas des pages. Je construis des écosystèmes.", items: [{ icon: "⚡", t: "Sites Web Performants", desc: "Next.js, React, WordPress, Shopify. HTML5 sémantique, Core Web Vitals.", tag: "Des sites que les moteurs comprennent." },{ icon: "🔍", t: "SEO Technique", desc: "URLs propres, schema markup, métadonnées, Search Console, Rank Math.", tag: "Le SEO dès les fondations." },{ icon: "🔧", t: "Architecture d'Automatisation", desc: "Workflows n8n, Zapier, Make. APIs, webhooks, CRM, gestion d'erreurs.", tag: "Des automatisations qui ne cassent pas en silence." },{ icon: "🛡️", t: "QA & Fiabilité", desc: "Tests manuels, régression, CI/CD, revues GitHub.", tag: "Qu'est-ce qui casse à l'échelle?" },{ icon: "🧠", t: "IA & Systèmes Créatifs", desc: "ComfyUI, Seedream, Whisper, OpenAI, Gemini, Anthropic.", tag: "Pas un gadget — une infrastructure." },{ icon: "💬", t: "CX & Chat en direct", desc: "Chatwoot, Tidio, tampon humain dans les workflows.", tag: "Automatisation et touche humaine, réunies." }] },
    workflows: { label: "N8N WORKFLOWS", title: "Architectures d'Automatisation", sub: "Workflows réels en production résolvant des problèmes complexes.", viewBtn: "Explorer Workflow", closeBtn: "Fermer", protection: "Vue protégée — Lecture seule", cats: [
      { name: "🎊 Bodas — Automatisation d'Événements", desc: "Système complet pour la gestion de mariages. Formulaires, CRM, Google Sheets et notifications.", wfs: [
        { name: "Scrapping Sheet", desc: "Web scraping automatisé de prestataires et venues → nettoyage de données → déduplication → sync en temps réel avec Google Sheets. Gestion d'erreurs pour URLs cassées et rate limiting." },
        { name: "Email Status Bodas", desc: "Suivi des emails aux mariés et prestataires. Surveillance des ouvertures, clics et réponses. Relance automatique avec escalade à un appel sans réponse en 48h." },
      ]},
      { name: "💪 JousFit — Automatisation Fitness", desc: "Pipeline complet pour business fitness. 10+ versions itérées, chat intelligent et anti-fraude.", wfs: [
        { name: "Chatwoot V0–V10", desc: "Évolution de 10 versions: du chat basique au système sophistiqué avec routage IA, réponses automatisées, détection d'intention et escalade agent humain préservant le contexte complet." },
        { name: "Rapport Fraudes Shopify", desc: "Détection automatisée de transactions suspectes. Analyse de patterns (IP, email, montant, fréquence), scoring de risque, alertes Slack et journalisation automatique dans Google Sheets." },
        { name: "Buffer Humain", desc: "Système intelligent: quand la confiance IA < 70%, le flux pause, notifie un agent humain avec contexte complet, attend sa réponse et continue avec sa décision." },
      ]},
      { name: "🏢 Valt — Écosystème Marketing", desc: "Architecture pour opérations de marketing digital. Email, e-commerce et contenu avec IA.", wfs: [
        { name: "Mailchimp Automation", desc: "Email marketing automatisé: segmentation comportementale, triggers d'achat, tests A/B de sujets, sync CRM bidirectionnel et reporting automatique." },
        { name: "Transcription Whisper", desc: "Pipeline: réception audio → transcription Whisper → résumé intelligent GPT → extraction d'actions → distribution vers Google Docs, Slack et email." },
        { name: "Hotmart Integration", desc: "Gestion de produits numériques: traitement d'achats en temps réel, provisionnement d'accès, onboarding automatisé par email et suivi post-vente." },
      ]},
    ]},
    stack: { label: "TECH STACK", title: "Outils & Technologies" },
    projects: { label: "PROJETS", title: "Travaux en vedette", sub: "Projets réels avec approche systèmes.", items: [{ t: "n8n Bodas", desc: "Automatisation d'événements. Scraping, suivi emails.", tags: ["n8n","Webhooks","Sheets","CRM"] },{ t: "n8n JousFit", desc: "Fitness: Chatwoot, buffer humain, fraude Shopify.", tags: ["n8n","Chatwoot","Shopify","Supabase"] },{ t: "n8n Valt", desc: "Marketing: Mailchimp, Hotmart, Whisper.", tags: ["n8n","Mailchimp","Hotmart","Whisper"] },{ t: "VantageWP", desc: "Plugin WordPress de redirection.", tags: ["WordPress","PHP"] },{ t: "Bedrock Frontend", desc: "Frontend WordPress et React.js.", tags: ["React.js","WordPress"] },{ t: "Portfolio", desc: "Next.js optimisé Core Web Vitals.", tags: ["Next.js","Vercel"] }] },
    systems: { label: "PENSÉE SYSTÉMIQUE", title: "Tout communique avec tout", sub: "Et sinon — je conçois le pont.", nodes: ["Frontend","APIs","Automatisations","Bases de données","Modèles IA","CRM","SEO"] },
    philosophy: { title: "Philosophie", traits: ["Rapide","Indexable","Évolutif","Automatisable","Testable","Documenté","Fiable"], rules: ["Si automatisable, j'automatise.","Si optimisable, j'optimise.","Si ça peut échouer, je teste."] },
    contact: { label: "CONTACT", title: "Construisons ensemble", sub: "Un projet qui nécessite performance et automatisation?", cta: "Envoyer Email", loc: "Morelos, Mexique", avail: "Disponible à distance" },
    footer: "Kevin Quiroz — Web Systems Engineer & Automation Architect",
  },
  zh: {
    code: "中文", flag: "🇨🇳",
    nav: ["首页","关于我","服务","工作流","技术栈","项目","联系"],
    keys: ["hero","about","services","workflows","stack","projects","contact"],
    theme: { light: "白天", dark: "夜间" },
    hero: { hi: "你好，我是", name: "Kevin Quiroz", r1: "Web 系统工程师", r2: "& 自动化架构师", desc: "我设计高性能网站，构建可扩展的自动化工作流，以及由AI驱动的可靠数字系统。", micro: "// 从前端架构到复杂的 n8n 自动化", cta1: "查看工作流", cta2: "联系我" },
    about: { label: "关于我", title: "我是谁", p1: "我是一名自学成才、以系统为核心的工程师。我的驱动力是不断学习、构建和自动化。", p2: "我不只是构建界面——我设计将前端、后端、API和自动化连接成可扩展生态系统的完整数字架构。", approach: "我的方法", q1: "性能好吗？", q2: "可扩展吗？", q3: "可自动化吗？", qEnd: "如果任何答案是否定的——那就还没完成。", selfLabel: "持续学习", selfDesc: "我的技术知识来自真实项目的构建和生产环境中复杂问题的解决。", certs: ["SEO Essentials — Semrush","SEO Crash Course — Brian Dean","SEO Fundamentals — Greg Gifford","数字营销 — Google Academy","专业网页设计 — Udemy"], expLabel: "经验", exp: [{ t: "CX 运营与自动化 — Interprika", d: "2025年10月至今", desc: "使用 Zapier、Make 和 n8n 设计工作流自动化。QA测试和文档。" },{ t: "前端开发 — Bedrock Digital", d: "2024年11月 – 2025年4月", desc: "WordPress主题、React.js、UI/UX和SEO。" }] },
    services: { label: "服务", title: "我做什么", sub: "我不建网页。我建数字生态系统。", items: [{ icon: "⚡", t: "高性能网站", desc: "Next.js、React、WordPress、Shopify。语义化HTML5、Core Web Vitals。", tag: "搜索引擎理解、用户信任的网站。" },{ icon: "🔍", t: "技术SEO", desc: "清晰URL、Schema标记、元数据、Search Console、Rank Math。", tag: "SEO从基础开始构建。" },{ icon: "🔧", t: "自动化架构", desc: "n8n、Zapier、Make端到端工作流。API、Webhook、CRM。", tag: "不会静默失败的自动化。" },{ icon: "🛡️", t: "QA与可靠性", desc: "手动测试、回归测试、CI/CD、GitHub审查。", tag: "扩展时什么会出问题？" },{ icon: "🧠", t: "AI与创意系统", desc: "ComfyUI、Seedream、Whisper、OpenAI、Gemini、Anthropic。", tag: "不是噱头——是基础设施。" },{ icon: "💬", t: "CX与在线聊天", desc: "Chatwoot、Tidio、工作流中的人工缓冲。", tag: "自动化与人性化，合而为一。" }] },
    workflows: { label: "N8N 工作流", title: "自动化架构", sub: "部署在生产环境中的真实工作流，解决复杂业务问题。", viewBtn: "探索工作流", closeBtn: "关闭", protection: "受保护视图 — 仅查看", cats: [
      { name: "🎊 Bodas — 活动自动化", desc: "完整的婚礼管理系统。表单、CRM、Google Sheets和通知。", wfs: [
        { name: "抓取表格", desc: "自动化供应商和场地网络抓取 → 数据清洗 → 去重 → 实时同步到Google Sheets。处理断链URL和速率限制的错误。" },
        { name: "婚礼邮件状态", desc: "追踪发给新人和供应商的邮件。监控打开、点击和回复。48小时无回复自动跟进并升级为电话联系。" },
      ]},
      { name: "💪 JousFit — 健身自动化", desc: "健身业务完整流程。10+迭代版本、智能聊天和反欺诈。", wfs: [
        { name: "Chatwoot V0–V10", desc: "10个版本的演进：从基础聊天到复杂系统，包含AI路由、自动回复、意图识别和保留完整上下文的人工代理升级。" },
        { name: "Shopify欺诈报告", desc: "自动检测可疑交易。模式分析（IP、邮箱、金额、频率），风险评分，Slack警报和Google Sheets自动记录。" },
        { name: "人工缓冲", desc: "智能系统：当AI置信度<70%时，流程暂停，将完整上下文通知人工代理，等待回复，并继续执行人工决策。" },
      ]},
      { name: "🏢 Valt — 营销生态系统", desc: "数字营销运营架构。AI驱动的邮件、电商和内容。", wfs: [
        { name: "Mailchimp自动化", desc: "自动化邮件营销：行为细分、购买触发、A/B主题测试、双向CRM同步和自动报告。" },
        { name: "Whisper转录", desc: "流程：音频接收 → Whisper转录 → GPT智能摘要 → 行动项提取 → 分发到Google Docs、Slack和邮件。" },
        { name: "Hotmart集成", desc: "数字产品管理：实时购买处理、访问配置、自动化入职邮件序列和售后跟进。" },
      ]},
    ]},
    stack: { label: "技术栈", title: "工具与技术" },
    projects: { label: "项目", title: "精选作品", sub: "系统方法的真实项目。", items: [{ t: "n8n Bodas", desc: "活动自动化。数据抓取、邮件追踪。", tags: ["n8n","Webhooks","Sheets","CRM"] },{ t: "n8n JousFit", desc: "健身：Chatwoot、人工缓冲、Shopify欺诈。", tags: ["n8n","Chatwoot","Shopify","Supabase"] },{ t: "n8n Valt", desc: "营销：Mailchimp、Hotmart、Whisper。", tags: ["n8n","Mailchimp","Hotmart","Whisper"] },{ t: "VantageWP", desc: "WordPress智能重定向插件。", tags: ["WordPress","PHP"] },{ t: "Bedrock Frontend", desc: "WordPress和React.js前端。", tags: ["React.js","WordPress"] },{ t: "Portfolio", desc: "Next.js优化Core Web Vitals。", tags: ["Next.js","Vercel"] }] },
    systems: { label: "系统思维", title: "一切互相连接", sub: "如果没有——我来设计桥梁。", nodes: ["前端","API","自动化","数据库","AI模型","CRM","SEO"] },
    philosophy: { title: "哲学", traits: ["快速","可索引","可扩展","可自动化","可测试","有文档","可靠"], rules: ["能自动化的，我自动化。","能优化的，我优化。","能失败的，我测试。"] },
    contact: { label: "联系", title: "一起构建", sub: "需要性能、自动化和扩展的项目？", cta: "发送邮件", loc: "莫雷洛斯，墨西哥", avail: "可远程工作" },
    footer: "Kevin Quiroz — Web 系统工程师 & 自动化架构师",
  },
};

/* ═══ Stack Data (Updated) ═══ */
const stackData = {
  "Web & Frontend": ["Next.js","React","HTML5","CSS3","SASS","JavaScript","Tailwind","Vite","Vercel"],
  "CMS & E-commerce": ["WordPress","Shopify","Tiendanube","WooCommerce","Elementor","ACF","Divi"],
  "Automation": ["n8n","Zapier","Make","Webhooks","REST APIs"],
  "Databases & Backend": ["Supabase","MySQL","SQL","Redis","PHP"],
  "SEO": ["Google Search Console","Rank Math","Yoast","Lighthouse","Screaming Frog","Semrush"],
  "CX & Chat": ["Chatwoot","Tidio","HubSpot","Typeform"],
  "Marketing": ["Mailchimp","Klaviyo","Hotmart","Shopify","META","Monday"],
  "AI & Generative": ["OpenAI","Anthropic","Gemini","Whisper","ComfyUI","Seedream","Nanobanana Pro","Higgsfield","Wan"],
  "QA": ["Playwright","Manual Testing","Regression","CI/CD","GitHub Actions"],
  "DevOps & Hosting": ["Easypanel","VPS","Hostinger","Google Cloud Console","Docker"],
  "Design": ["Figma","Canva","Adobe Creative Suite","Google Workspace"],
  "Collaboration": ["Git","GitHub","Jira","Trello","Notion","Slack","Loom","Gather","Miro","Teams"],
};

const socials = [
  { name: "GitHub", url: "https://github.com/Scampt", d: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/luiskevinquirozpacheco/", d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" },
  { name: "Instagram", url: "https://www.instagram.com/kevinquirozmx", d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" },
  { name: "Email", url: "mailto:luis.kevin.quiroz@gmail.com", d: "M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67zM22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" },
];

/* ═══ Hooks ═══ */
function useInView(th = 0.06) {
  const ref = useRef(null); const [v, setV] = useState(false);
  useEffect(() => { const el = ref.current; if (!el) return; const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setV(true); o.unobserve(el); } }, { threshold: th }); o.observe(el); return () => o.disconnect(); }, [th]);
  return [ref, v];
}
function Fade({ children, id }) {
  const [ref, v] = useInView();
  return <section ref={ref} id={id} style={{ opacity: v ? 1 : 0, transform: v ? "translateY(0)" : "translateY(32px)", transition: "all .85s cubic-bezier(.16,1,.3,1)" }}>{children}</section>;
}

/* ═══ Advanced Workflow Viewer ═══ */
function WFViewer({ wf, onClose, texts, theme }) {
  const canvasRef = useRef(null);
  const th = themes[theme];

  useEffect(() => {
    if (!wf) return;
    const c = canvasRef.current; if (!c) return;
    const dpr = 2;
    const W = c.offsetWidth; const H = c.offsetHeight;
    c.width = W * dpr; c.height = H * dpr;
    const ctx = c.getContext("2d");
    ctx.scale(dpr, dpr);
    ctx.clearRect(0, 0, W, H);

    // Background grid
    ctx.strokeStyle = theme === "dark" ? "rgba(255,255,255,0.02)" : "rgba(0,0,0,0.03)";
    ctx.lineWidth = 0.5;
    for (let x = 0; x < W; x += 30) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke(); }
    for (let y = 0; y < H; y += 30) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke(); }

    const scaleX = W / 1150;
    const scaleY = H / 340;
    const nodes = wf.nodes.map(n => ({ ...n, sx: n.x * scaleX, sy: n.y * scaleY, w: Math.max(n.name.length * 7.5 + 32, 110) * Math.min(scaleX, 1), h: 32 * Math.min(scaleY, 1) }));

    const typeColors = { trigger: "#22d3ee", action: wf.color, condition: "#fbbf24", merge: "#a78bfa", output: "#34d399", error: "#f87171" };

    // Draw connections with animated dashes
    wf.connections.forEach(([from, to]) => {
      const a = nodes[from], b = nodes[to];
      if (!a || !b) return;
      const ax = a.sx + a.w / 2, ay = a.sy;
      const bx = b.sx - b.w / 2, by = b.sy;
      
      ctx.strokeStyle = wf.color + "44";
      ctx.lineWidth = 1.5;
      ctx.setLineDash([4, 3]);
      ctx.beginPath();
      const cpx1 = ax + (bx - ax) * 0.4;
      const cpx2 = ax + (bx - ax) * 0.6;
      ctx.moveTo(ax + a.w / 2, ay);
      ctx.bezierCurveTo(cpx1, ay, cpx2, by, bx, by);
      ctx.stroke();

      // Arrowhead
      ctx.setLineDash([]);
      ctx.fillStyle = wf.color + "66";
      ctx.beginPath();
      ctx.moveTo(bx, by);
      ctx.lineTo(bx - 6, by - 4);
      ctx.lineTo(bx - 6, by + 4);
      ctx.closePath();
      ctx.fill();
    });

    // Draw nodes
    ctx.setLineDash([]);
    nodes.forEach(n => {
      const tc = typeColors[n.type] || wf.color;
      // Shadow
      ctx.shadowColor = tc + "22";
      ctx.shadowBlur = 12;
      // Node body
      ctx.fillStyle = theme === "dark" ? "#0f0f18" : "#ffffff";
      ctx.strokeStyle = tc + "66";
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.roundRect(n.sx - n.w / 2, n.sy - n.h / 2, n.w, n.h, 6);
      ctx.fill(); ctx.stroke();
      ctx.shadowBlur = 0;
      // Type indicator dot
      ctx.fillStyle = tc;
      ctx.beginPath();
      ctx.arc(n.sx - n.w / 2 + 10, n.sy, 3.5, 0, Math.PI * 2);
      ctx.fill();
      // Input port
      ctx.fillStyle = theme === "dark" ? "#333" : "#ccc";
      ctx.beginPath(); ctx.arc(n.sx - n.w / 2, n.sy, 3, 0, Math.PI * 2); ctx.fill();
      // Output port
      ctx.beginPath(); ctx.arc(n.sx + n.w / 2, n.sy, 3, 0, Math.PI * 2); ctx.fill();
      // Text
      ctx.fillStyle = theme === "dark" ? "#ddd" : "#333";
      ctx.font = `${Math.max(9, 10 * Math.min(scaleX, 1))}px 'JetBrains Mono', monospace`;
      ctx.textAlign = "left";
      ctx.fillText(n.name, n.sx - n.w / 2 + 20, n.sy + 3.5);
    });

    // Watermarks
    ctx.save();
    ctx.globalAlpha = 0.025;
    ctx.font = "bold 36px 'Outfit', sans-serif";
    ctx.fillStyle = theme === "dark" ? "#fff" : "#000";
    ctx.textAlign = "center";
    for (let i = 0; i < 3; i++) {
      ctx.translate(W * (0.2 + i * 0.3), H * 0.5);
      ctx.rotate(-0.25);
      ctx.fillText("KEVIN QUIROZ", 0, 0);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    ctx.restore();
  }, [wf, theme]);

  if (!wf) return null;

  return (
    <div onClick={onClose} onContextMenu={e => e.preventDefault()}
      style={{ position: "fixed", inset: 0, zIndex: 9999, background: th.overlay, backdropFilter: "blur(16px)", display: "flex", alignItems: "center", justifyContent: "center", padding: 16 }}>
      <div onClick={e => e.stopPropagation()} onContextMenu={e => e.preventDefault()}
        style={{ background: th.bg2, border: `1px solid ${th.cardBorder}`, borderRadius: 16, maxWidth: 960, width: "100%", overflowY: "auto", maxHeight: "90vh", userSelect: "none", WebkitUserSelect: "none" }}>
        <div style={{ padding: "18px 22px", borderBottom: `1px solid ${th.cardBorder}`, display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
              <div style={{ width: 10, height: 10, borderRadius: "50%", background: wf.color }} />
              <h3 style={{ color: th.white, fontSize: 17, fontWeight: 700, margin: 0 }}>{wf.name}</h3>
            </div>
            <p style={{ color: th.text3, fontSize: 10, fontFamily: "'JetBrains Mono', monospace" }}>🔒 {texts} · {wf.nodes.length} nodes · {wf.connections.length} connections</p>
          </div>
          <button onClick={onClose} style={{ background: "none", border: `1px solid ${th.cardBorder}`, color: th.text2, borderRadius: 6, padding: "4px 14px", cursor: "pointer", fontSize: 12 }}>✕</button>
        </div>
        <div style={{ position: "relative", background: theme === "dark" ? "#08080e" : "#f4f5f8" }}>
          <canvas ref={canvasRef} style={{ width: "100%", height: 340, display: "block", pointerEvents: "none" }} />
          <div style={{ position: "absolute", inset: 0, pointerEvents: "none", background: `repeating-linear-gradient(45deg, transparent, transparent 300px, ${wf.color}03 300px, ${wf.color}03 301px)` }} />
        </div>
        <div style={{ padding: "16px 22px", borderTop: `1px solid ${th.cardBorder}` }}>
          <p style={{ color: th.text2, fontSize: 13, lineHeight: 1.65, marginBottom: 14 }}>{wf.desc}</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
            {wf.nodes.map(n => (
              <span key={n.id} style={{ padding: "3px 10px", borderRadius: 4, fontSize: 9, fontFamily: "'JetBrains Mono', monospace", background: ({"trigger":"#22d3ee","action":wf.color,"condition":"#fbbf24","merge":"#a78bfa","output":"#34d399","error":"#f87171"}[n.type] || wf.color) + "15", color: ({"trigger":"#22d3ee","action":wf.color,"condition":"#fbbf24","merge":"#a78bfa","output":"#34d399","error":"#f87171"}[n.type] || wf.color), border: `1px solid ${({"trigger":"#22d3ee","action":wf.color,"condition":"#fbbf24","merge":"#a78bfa","output":"#34d399","error":"#f87171"}[n.type] || wf.color)}22` }}>{n.name}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══ MAIN APP ═══ */
export default function App() {
  const [lang, setLang] = useState("es");
  const [theme, setTheme] = useState("dark");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeWF, setActiveWF] = useState(null);
  const [langOpen, setLangOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mouseXY, setMouseXY] = useState({ x: 0, y: 0 });
  const [typedRole, setTypedRole] = useState("");
  const [rolePhase, setRolePhase] = useState("typing");
  const t = langs[lang];
  const th = themes[theme];
  // Workflows are always from ES (they have node data)
  const wfData = langs.es.workflows;

  useEffect(() => {
    const fn = () => {
      setScrolled(window.scrollY > 40);
      const el = document.documentElement;
      setScrollProgress((window.scrollY / (el.scrollHeight - el.clientHeight)) * 100);
    };
    window.addEventListener("scroll", fn); return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    const full = t.hero.r1;
    if (rolePhase === "typing") {
      if (typedRole.length < full.length) {
        const tid = setTimeout(() => setTypedRole(full.slice(0, typedRole.length + 1)), 80);
        return () => clearTimeout(tid);
      } else {
        const tid = setTimeout(() => setRolePhase("deleting"), 1800);
        return () => clearTimeout(tid);
      }
    } else {
      if (typedRole.length > 0) {
        const tid = setTimeout(() => setTypedRole(full.slice(0, typedRole.length - 1)), 40);
        return () => clearTimeout(tid);
      } else { setRolePhase("typing"); }
    }
  }, [typedRole, rolePhase, t.hero.r1]);

  useEffect(() => { setTypedRole(""); setRolePhase("typing"); }, [lang]);

  useEffect(() => {
    const fn = (e) => setMouseXY({ x: e.clientX / window.innerWidth - 0.5, y: e.clientY / window.innerHeight - 0.5 });
    window.addEventListener("mousemove", fn);
    return () => window.removeEventListener("mousemove", fn);
  }, []);

  const tiltCard = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width - 0.5) * 12;
    const y = ((e.clientY - r.top) / r.height - 0.5) * -12;
    e.currentTarget.style.transform = `perspective(700px) rotateX(${y}deg) rotateY(${x}deg) translateY(-4px)`;
  };
  const resetCard = (e) => { e.currentTarget.style.transform = ""; };
  const go = id => { document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); setMenuOpen(false); };

  return (
    <div style={{ fontFamily: "'Outfit', sans-serif", background: th.bg, color: th.text, minHeight: "100vh", overflowX: "hidden", transition: "background .5s, color .5s" }}>
      <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet" />
      <style>{`
        *{margin:0;padding:0;box-sizing:border-box}html{scroll-behavior:smooth}
        ::selection{background:${th.accent}33;color:${th.accent}}
        ::-webkit-scrollbar{width:4px}::-webkit-scrollbar-track{background:${th.bg}}::-webkit-scrollbar-thumb{background:${th.accent}33;border-radius:2px}
        @keyframes fadeUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
        @keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-14px)}}
        @keyframes blink{0%,100%{opacity:1}50%{opacity:0}}
        @keyframes pulse{0%,100%{box-shadow:0 0 0 0 rgba(0,232,154,.3)}70%{box-shadow:0 0 0 8px transparent}}
        @keyframes nodeGlow{0%,100%{opacity:.6}50%{opacity:1}}
        .kq-name{background:linear-gradient(135deg,${th.gradStart},${th.gradEnd});-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;display:inline-block}
        .kq-cursor::after{content:"|";animation:blink 1s ease-in-out infinite;color:${th.accent};font-weight:300;margin-left:1px}
        .kq-node{animation:nodeGlow 2.5s ease-in-out infinite}
        .kq-node:nth-child(2n){animation-delay:.6s}
        .kq-node:nth-child(3n){animation-delay:1.2s}
      `}</style>

      {/* Soft gradient orbs */}
      <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0, overflow: "hidden" }}>
        <div style={{ position: "absolute", width: 600, height: 600, borderRadius: "50%", background: `radial-gradient(circle, ${th.gradStart}08 0%, transparent 70%)`, top: "-10%", left: "-10%", filter: "blur(80px)", transform: `translate(${mouseXY.x * 30}px, ${mouseXY.y * 30}px)`, transition: "transform .8s ease" }} />
        <div style={{ position: "absolute", width: 500, height: 500, borderRadius: "50%", background: `radial-gradient(circle, ${th.gradEnd}06 0%, transparent 70%)`, bottom: "10%", right: "-5%", filter: "blur(80px)", transform: `translate(${-mouseXY.x * 40}px, ${-mouseXY.y * 40}px)`, transition: "transform .8s ease" }} />
        <div style={{ position: "absolute", width: 400, height: 400, borderRadius: "50%", background: `radial-gradient(circle, ${th.accent}04 0%, transparent 70%)`, top: "50%", left: "40%", filter: "blur(100px)", transform: `translate(${mouseXY.x * 20}px, ${mouseXY.y * 20}px)`, transition: "transform 1s ease" }} />
      </div>

      <WFViewer wf={activeWF} onClose={() => setActiveWF(null)} texts={t.workflows.protection} theme={theme} />

      {/* Scroll progress bar */}
      <div style={{ position: "fixed", top: 0, left: 0, height: 2, zIndex: 200, background: `linear-gradient(90deg, ${th.gradStart}, ${th.gradEnd})`, width: `${scrollProgress}%`, transition: "width .1s linear", boxShadow: `0 0 8px ${th.accent}66`, pointerEvents: "none" }} />

      {/* ═══ NAV ═══ */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, padding: "12px 28px", background: scrolled ? th.navBg : "transparent", backdropFilter: scrolled ? "blur(16px)" : "none", borderBottom: scrolled ? `1px solid ${th.cardBorder}` : "1px solid transparent", transition: "all .3s", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: 8 }} onClick={() => go("hero")}>
          <svg width="32" height="32" viewBox="0 0 100 100" style={{ borderRadius: 6, flexShrink: 0 }}>
            <defs>
              <linearGradient id="kqLogoG" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor={th.gradStart} />
                <stop offset="100%" stopColor={th.gradEnd} />
              </linearGradient>
            </defs>
            <rect width="100" height="100" rx="20" fill={th.bg2} stroke={th.accent + "33"} strokeWidth="2" />
            <text x="50" y="68" fontFamily="'Arial Black', sans-serif" fontSize="44" fontWeight="900" fill="url(#kqLogoG)" textAnchor="middle">KQ</text>
          </svg>
          <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.1 }}>
            <span style={{ fontFamily: "'JetBrains Mono',monospace", color: th.accent, fontWeight: 700, fontSize: 13 }}>Kevin Quiroz</span>
            <span style={{ color: th.text3, fontSize: 9, fontFamily: "'JetBrains Mono',monospace" }}>systems.engineer</span>
          </div>
        </div>
        <div className="dnav" style={{ display: "flex", alignItems: "center", gap: 20 }}>
          {t.nav.map((n, i) => <span key={i} onClick={() => go(t.keys[i])} style={{ color: th.text2, fontSize: 11, letterSpacing: 1, textTransform: "uppercase", cursor: "pointer", transition: "color .3s", fontWeight: 500 }} onMouseEnter={e => e.target.style.color = th.accent} onMouseLeave={e => e.target.style.color = th.text2}>{n}</span>)}
          {/* Theme toggle — iOS style */}
          <div onClick={() => setTheme(theme === "dark" ? "light" : "dark")} style={{ width: 50, height: 26, borderRadius: 13, background: theme === "dark" ? "rgba(0,232,154,0.12)" : "rgba(13,150,104,0.10)", border: `1px solid ${th.accent}33`, cursor: "pointer", position: "relative", display: "flex", alignItems: "center", padding: 3, flexShrink: 0, transition: "background .3s" }}>
            <div style={{ width: 20, height: 20, borderRadius: "50%", background: `linear-gradient(135deg, ${th.gradStart}, ${th.gradEnd})`, transform: theme === "dark" ? "translateX(0px)" : "translateX(24px)", transition: "transform .3s cubic-bezier(.16,1,.3,1)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, boxShadow: `0 1px 6px ${th.accent}55`, flexShrink: 0 }}>
              {theme === "dark" ? "🌙" : "☀️"}
            </div>
          </div>
          {/* Language selector */}
          <div style={{ position: "relative" }}>
            <button onClick={() => setLangOpen(!langOpen)} style={{ background: th.glow, border: `1px solid ${th.cardBorder}`, color: th.text, padding: "3px 8px", borderRadius: 6, fontSize: 18, cursor: "pointer", lineHeight: 1, display: "flex", alignItems: "center" }}>
              {t.flag}
            </button>
            {langOpen && (
              <div style={{ position: "absolute", top: "100%", right: 0, marginTop: 4, background: th.bg2, border: `1px solid ${th.cardBorder}`, borderRadius: 8, overflow: "hidden", minWidth: 52, boxShadow: "0 8px 32px rgba(0,0,0,.2)" }}>
                {Object.entries(langs).map(([k, v]) => (
                  <button key={k} onClick={() => { setLang(k); setLangOpen(false); }} style={{ display: "flex", width: "100%", padding: "10px 14px", background: lang === k ? th.glow : "transparent", border: "none", color: th.text2, fontSize: 20, cursor: "pointer", justifyContent: "center", transition: "background .2s" }}
                    onMouseEnter={e => e.currentTarget.style.background = th.glow}
                    onMouseLeave={e => { if (lang !== k) e.currentTarget.style.background = "transparent"; }}>
                    {v.flag}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
        <button className="ham" onClick={() => setMenuOpen(!menuOpen)} style={{ display: "none", background: "none", border: "none", cursor: "pointer", padding: 8 }}>
          <div style={{ width: 22, height: 2, background: th.text, margin: "5px 0", transition: "all .3s" }} />
          <div style={{ width: 22, height: 2, background: th.text, margin: "5px 0" }} />
          <div style={{ width: 22, height: 2, background: th.text, margin: "5px 0" }} />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && <div style={{ position: "fixed", inset: 0, background: th.bg + "f5", backdropFilter: "blur(16px)", zIndex: 999, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 24 }}>
        <button onClick={() => setMenuOpen(false)} style={{ position: "absolute", top: 16, right: 16, background: "none", border: "none", color: th.text, fontSize: 24, cursor: "pointer" }}>✕</button>
        {t.nav.map((n, i) => <span key={i} onClick={() => go(t.keys[i])} style={{ color: th.text2, fontSize: 18, cursor: "pointer", fontWeight: 500 }}>{n}</span>)}
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          {/* iOS toggle mobile */}
          <div onClick={() => setTheme(theme === "dark" ? "light" : "dark")} style={{ width: 56, height: 30, borderRadius: 15, background: theme === "dark" ? "rgba(0,232,154,0.12)" : "rgba(13,150,104,0.10)", border: `1px solid ${th.accent}33`, cursor: "pointer", display: "flex", alignItems: "center", padding: 4, transition: "background .3s" }}>
            <div style={{ width: 22, height: 22, borderRadius: "50%", background: `linear-gradient(135deg, ${th.gradStart}, ${th.gradEnd})`, transform: theme === "dark" ? "translateX(0)" : "translateX(26px)", transition: "transform .3s cubic-bezier(.16,1,.3,1)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, boxShadow: `0 1px 6px ${th.accent}55` }}>
              {theme === "dark" ? "🌙" : "☀️"}
            </div>
          </div>
          {Object.entries(langs).map(([k, v]) => (
            <button key={k} onClick={() => { setLang(k); setMenuOpen(false); }} style={{ background: lang === k ? th.accent + "22" : th.glow, border: `1px solid ${lang === k ? th.accent + "44" : th.cardBorder}`, color: th.text2, padding: "8px 12px", borderRadius: 8, cursor: "pointer", fontSize: 20, lineHeight: 1 }}>{v.flag}</button>
          ))}
        </div>
      </div>}

      <style>{`
        @media(max-width:900px){
          #hero > div{gap:28px!important}
        }
        @media(max-width:768px){
          .dnav{display:none!important}
          .ham{display:block!important}
          #hero > div{
            flex-direction:column-reverse!important;
            align-items:center!important;
            text-align:center!important;
            padding-top:100px!important;
            padding-bottom:56px!important;
            gap:24px!important
          }
          .hero-avatar{width:100%!important;max-width:260px!important}
          .hero-avatar > div{width:100%!important;max-width:240px!important;margin:0 auto!important}
          .hero-text{
            display:flex!important;flex-direction:column!important;align-items:center!important;
            width:100%!important;flex:unset!important
          }
          .hero-text > div{justify-content:center!important}
          #about > div,#services > div,#workflows > div,
          #stack > div,#projects > div,#contact > div,
          #systems > div,#philosophy > div{
            padding-top:56px!important;padding-bottom:56px!important
          }
          #about > div > div{grid-template-columns:1fr!important}
          #systems > div > div{justify-content:flex-start!important}
        }
        @media(max-width:480px){
          #hero > div{
            padding-top:88px!important;
            padding-left:16px!important;
            padding-right:16px!important
          }
          .hero-avatar > div{max-width:180px!important}
          #about > div,#services > div,#workflows > div,
          #stack > div,#projects > div,#contact > div,
          #systems > div,#philosophy > div{
            padding-left:16px!important;padding-right:16px!important
          }
          #services > div > div,#workflows > div > div > div > div,
          #projects > div > div{
            grid-template-columns:1fr!important
          }
        }
      `}</style>

      {/* ═══ HERO ═══ */}
      <section id="hero" style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", position: "relative", zIndex: 1 }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "120px 28px 80px", animation: "fadeUp .85s ease", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 40, flexWrap: "wrap" }}>
          {/* Text */}
          <div className="hero-text" style={{ flex: "1 1 340px", minWidth: 0 }}>
            <p style={{ fontFamily: "'JetBrains Mono',monospace", color: th.accent, fontSize: 13, letterSpacing: 2, marginBottom: 12 }}>{t.hero.hi}</p>
            <h1 className="kq-name" style={{ fontSize: "clamp(40px,8vw,82px)", fontWeight: 900, lineHeight: .95, marginBottom: 6 }}>{t.hero.name}</h1>
            <h2 className="kq-cursor" style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "clamp(12px,2vw,17px)", fontWeight: 400, color: th.text2, marginBottom: 4, letterSpacing: .5 }}>{typedRole || "\u00A0"}</h2>
            <h2 style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "clamp(12px,2vw,17px)", fontWeight: 400, color: th.text3, marginBottom: 24 }}>{t.hero.r2}</h2>
            <p style={{ fontSize: "clamp(14px,1.8vw,18px)", color: th.text2, maxWidth: 520, lineHeight: 1.7, marginBottom: 8 }}>{t.hero.desc}</p>
            <p style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, color: th.text3, marginBottom: 32 }}>{t.hero.micro}</p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 32 }}>
              <button onClick={() => go("workflows")} style={{ padding: "12px 28px", background: `linear-gradient(135deg, ${th.gradStart}, ${th.gradEnd})`, color: theme === "dark" ? "#0a0a0f" : "#fff", border: "none", borderRadius: 100, fontWeight: 700, fontSize: 13, cursor: "pointer", transition: "transform .3s, box-shadow .3s" }} onMouseEnter={e => { e.target.style.transform = "translateY(-2px)"; e.target.style.boxShadow = `0 6px 24px ${th.accent}33`; }} onMouseLeave={e => { e.target.style.transform = ""; e.target.style.boxShadow = ""; }}>{t.hero.cta1} →</button>
              <button onClick={() => go("contact")} style={{ padding: "12px 28px", background: "transparent", color: th.accent, border: `1px solid ${th.accent}44`, borderRadius: 100, fontWeight: 600, fontSize: 13, cursor: "pointer", transition: "all .3s" }} onMouseEnter={e => { e.target.style.borderColor = th.accent; e.target.style.background = th.glow; }} onMouseLeave={e => { e.target.style.borderColor = th.accent + "44"; e.target.style.background = "transparent"; }}>{t.hero.cta2}</button>
            </div>
            <div style={{ display: "flex", gap: 14 }}>
              {socials.map(s => <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" title={s.name} style={{ color: th.text3, transition: "color .3s" }} onMouseEnter={e => e.currentTarget.style.color = th.accent} onMouseLeave={e => e.currentTarget.style.color = th.text3}><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d={s.d} /></svg></a>)}
            </div>
          </div>
          {/* Avatar */}
          <div className="hero-avatar" style={{ flex: "0 0 auto", display: "flex", justifyContent: "center" }}>
            <div style={{ position: "relative", width: "clamp(200px,26vw,340px)" }}>
              {/* Ambient glow */}
              <div style={{ position: "absolute", inset: -32, borderRadius: "50%", background: `radial-gradient(circle, ${th.gradStart}28 0%, transparent 65%)`, filter: "blur(28px)", pointerEvents: "none" }} />
              {/* Gradient ring */}
              <div style={{ position: "absolute", inset: -3, borderRadius: "50% 50% 50% 50% / 55% 55% 45% 45%", background: `linear-gradient(135deg, ${th.gradStart}99, ${th.gradEnd}66, ${th.gradStart}44)`, pointerEvents: "none" }} />
              <img src="/avatar.png" alt="Kevin Quiroz" style={{ width: "100%", borderRadius: "50% 50% 50% 50% / 55% 55% 45% 45%", position: "relative", display: "block", objectFit: "cover", animation: "float 6s ease-in-out infinite" }} />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ ABOUT ═══ */}
      <Fade id="about"><div style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 28px" }}>
        <p style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, letterSpacing: 3, color: th.accent, textTransform: "uppercase", marginBottom: 8 }}>{t.about.label}</p>
        <h2 style={{ fontSize: "clamp(24px,4vw,40px)", fontWeight: 800, color: th.white, marginBottom: 12 }}>{t.about.title}</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,440px),1fr))", gap: 36, marginTop: 28 }}>
          <div>
            <p style={{ fontSize: 14, lineHeight: 1.8, color: th.text2, marginBottom: 16 }}>{t.about.p1}</p>
            <p style={{ fontSize: 14, lineHeight: 1.8, color: th.text2, marginBottom: 22 }}>{t.about.p2}</p>
            <p style={{ fontFamily: "'JetBrains Mono',monospace", color: th.accent, fontSize: 10, letterSpacing: 2, marginBottom: 12 }}>{t.about.approach}</p>
            <div style={{ borderLeft: `2px solid ${th.accent}22`, paddingLeft: 14, display: "flex", flexDirection: "column", gap: 5, marginBottom: 10 }}>
              {[t.about.q1, t.about.q2, t.about.q3].map((q, i) => <span key={i} style={{ fontFamily: "'JetBrains Mono',monospace", color: th.accent, fontSize: 12 }}>→ {q}</span>)}
            </div>
            <p style={{ fontFamily: "'JetBrains Mono',monospace", color: th.text3, fontSize: 11, fontStyle: "italic", marginBottom: 24 }}>{t.about.qEnd}</p>
            <div style={{ background: th.card, border: `1px solid ${th.cardBorder}`, borderRadius: 12, padding: 22, backdropFilter: "blur(8px)" }}>
              <p style={{ fontFamily: "'JetBrains Mono',monospace", color: th.accent, fontSize: 10, letterSpacing: 2, marginBottom: 8 }}>{t.about.selfLabel}</p>
              <p style={{ color: th.text2, fontSize: 12, lineHeight: 1.6, marginBottom: 12 }}>{t.about.selfDesc}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
                {t.about.certs.map((c, i) => <span key={i} style={{ padding: "3px 9px", borderRadius: 100, fontSize: 9, fontFamily: "'JetBrains Mono',monospace", background: th.accent + "0d", color: th.accent, border: `1px solid ${th.accent}22` }}>{c}</span>)}
              </div>
            </div>
          </div>
          <div>
            <div style={{ display: "flex", justifyContent: "center", marginBottom: 24 }}>
              <div style={{ position: "relative", width: "100%", maxWidth: 320 }}>
                {/* Subtle glow */}
                <div style={{ position: "absolute", inset: -24, borderRadius: 28, background: `radial-gradient(ellipse at 50% 60%, ${th.accent}12 0%, transparent 70%)`, filter: "blur(24px)", pointerEvents: "none" }} />
                <img src="/me.png" alt="Kevin Quiroz" style={{ width: "100%", borderRadius: 16, border: "none", position: "relative", display: "block", objectFit: "cover", boxShadow: `0 8px 32px rgba(0,0,0,.28)`, animation: "float 6s ease-in-out infinite", animationDelay: "1s" }} />
              </div>
            </div>
            <p style={{ fontFamily: "'JetBrains Mono',monospace", color: th.accent, fontSize: 10, letterSpacing: 2, marginBottom: 14 }}>{t.about.expLabel}</p>
            {t.about.exp.map((e, i) => <div key={i} style={{ background: th.card, border: `1px solid ${th.cardBorder}`, borderRadius: 12, padding: 22, marginBottom: 12, backdropFilter: "blur(8px)", transition: "all .4s cubic-bezier(.16,1,.3,1)", transformStyle: "preserve-3d" }} onMouseMove={tiltCard} onMouseLeave={resetCard}>
              <h4 style={{ color: th.white, fontSize: 13, fontWeight: 700, marginBottom: 2 }}>{e.t}</h4>
              <p style={{ fontFamily: "'JetBrains Mono',monospace", color: th.accent, fontSize: 10, marginBottom: 8 }}>{e.d}</p>
              <p style={{ color: th.text2, fontSize: 12, lineHeight: 1.6 }}>{e.desc}</p>
            </div>)}
          </div>
        </div>
      </div></Fade>

      {/* ═══ SERVICES ═══ */}
      <Fade id="services"><div style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 28px" }}>
        <p style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, letterSpacing: 3, color: th.accent, textTransform: "uppercase", marginBottom: 8 }}>{t.services.label}</p>
        <h2 style={{ fontSize: "clamp(24px,4vw,40px)", fontWeight: 800, color: th.white, marginBottom: 8 }}>{t.services.title}</h2>
        <p style={{ color: th.text2, fontSize: "clamp(13px,1.5vw,16px)", marginBottom: 36 }}>{t.services.sub}</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,300px),1fr))", gap: 16 }}>
          {t.services.items.map((s, i) => <div key={i} style={{ background: th.card, border: `1px solid ${th.cardBorder}`, borderRadius: 12, padding: 24, backdropFilter: "blur(8px)", transition: "all .4s cubic-bezier(.16,1,.3,1)", transformStyle: "preserve-3d" }} onMouseMove={tiltCard} onMouseLeave={e => { resetCard(e); e.currentTarget.style.borderColor = th.cardBorder; }} onMouseEnter={e => e.currentTarget.style.borderColor = th.accent + "44"}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
              <span style={{ fontSize: 22 }}>{s.icon}</span>
              <h3 style={{ color: th.white, fontSize: 15, fontWeight: 700 }}>{s.t}</h3>
            </div>
            <p style={{ color: th.text2, fontSize: 12, lineHeight: 1.7, marginBottom: 12 }}>{s.desc}</p>
            <p style={{ fontFamily: "'JetBrains Mono',monospace", color: th.accent, fontSize: 10, fontStyle: "italic" }}>{s.tag}</p>
          </div>)}
        </div>
      </div></Fade>

      {/* ═══ WORKFLOWS ═══ */}
      <Fade id="workflows"><div style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 28px" }}>
        <p style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, letterSpacing: 3, color: th.accent, textTransform: "uppercase", marginBottom: 8 }}>{t.workflows.label}</p>
        <h2 style={{ fontSize: "clamp(24px,4vw,40px)", fontWeight: 800, color: th.white, marginBottom: 8 }}>{t.workflows.title}</h2>
        <p style={{ color: th.text2, fontSize: "clamp(13px,1.5vw,16px)", marginBottom: 40 }}>{t.workflows.sub}</p>
        {wfData.cats.map((esCat, ci) => {
          const tCat = (Array.isArray(t.workflows.cats) && t.workflows.cats[ci]) ? t.workflows.cats[ci] : esCat;
          return <div key={ci} style={{ marginBottom: 40 }}>
            <h3 style={{ color: th.white, fontSize: 18, fontWeight: 700, marginBottom: 4 }}>{tCat.name}</h3>
            <p style={{ color: th.text3, fontSize: 12, lineHeight: 1.5, marginBottom: 16, maxWidth: 550 }}>{tCat.desc}</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,260px),1fr))", gap: 14 }}>
              {esCat.wfs.map((wf, wi) => {
                const tWf = tCat.wfs?.[wi] || wf;
                return <div key={wi} style={{ background: th.card, border: `1px solid ${th.cardBorder}`, borderLeft: `3px solid ${wf.color}44`, borderRadius: 12, padding: 20, backdropFilter: "blur(8px)", transition: "all .4s cubic-bezier(.16,1,.3,1)", transformStyle: "preserve-3d" }} onMouseMove={tiltCard} onMouseLeave={e => { resetCard(e); e.currentTarget.style.borderLeftColor = wf.color + "44"; }} onMouseEnter={e => e.currentTarget.style.borderLeftColor = wf.color}>
                  <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 8 }}>
                    <div style={{ width: 8, height: 8, borderRadius: "50%", background: wf.color, animation: "pulse 2s ease-in-out infinite", boxShadow: `0 0 0 0 ${wf.color}66` }} />
                    <h4 style={{ color: th.white, fontSize: 13, fontWeight: 700 }}>{tWf.name}</h4>
                  </div>
                  <p style={{ color: th.text3, fontSize: 11, lineHeight: 1.5, marginBottom: 12 }}>{tWf.desc.slice(0, 120)}...</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 3, marginBottom: 12 }}>
                    {wf.nodes.slice(0, 4).map(n => <span key={n.id} style={{ padding: "2px 7px", borderRadius: 3, fontSize: 8, fontFamily: "'JetBrains Mono',monospace", background: wf.color + "10", color: wf.color, border: `1px solid ${wf.color}22` }}>{n.name}</span>)}
                    {wf.nodes.length > 4 && <span style={{ fontSize: 8, color: th.text3, fontFamily: "'JetBrains Mono',monospace", padding: "2px 4px" }}>+{wf.nodes.length - 4}</span>}
                  </div>
                  <button onClick={() => setActiveWF({ ...wf, name: tWf.name, desc: tWf.desc })} style={{ display: "inline-flex", alignItems: "center", gap: 5, padding: "6px 14px", background: wf.color + "11", color: wf.color, border: `1px solid ${wf.color}33`, borderRadius: 6, fontSize: 10, fontFamily: "'JetBrains Mono',monospace", cursor: "pointer", transition: "all .3s" }} onMouseEnter={e => { e.target.style.background = wf.color + "22"; }} onMouseLeave={e => { e.target.style.background = wf.color + "11"; }}>
                    🔒 {t.workflows.viewBtn} →
                  </button>
                </div>;
              })}
            </div>
          </div>;
        })}
      </div></Fade>

      {/* ═══ SYSTEMS ═══ */}
      <Fade id="systems"><div style={{ maxWidth: 1100, margin: "0 auto", padding: "60px 28px", textAlign: "center" }}>
        <p style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, letterSpacing: 3, color: th.accent, textTransform: "uppercase", marginBottom: 8 }}>{t.systems.label}</p>
        <h2 style={{ fontSize: "clamp(22px,4vw,36px)", fontWeight: 800, color: th.white, marginBottom: 8 }}>{t.systems.title}</h2>
        <p style={{ color: th.text2, marginBottom: 32, fontSize: 14 }}>{t.systems.sub}</p>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 6 }}>
          {t.systems.nodes.map((n, i) => <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
            <span className="kq-node" style={{ fontFamily: "'JetBrains Mono',monospace", padding: "8px 16px", background: th.card, border: `1px solid ${th.cardBorder}`, borderRadius: 6, fontSize: 11, color: th.accent, backdropFilter: "blur(8px)", transition: "all .3s", cursor: "default" }} onMouseEnter={e => { e.target.style.background = th.accent + "18"; e.target.style.boxShadow = `0 0 14px ${th.accent}44`; e.target.style.borderColor = th.accent + "55"; }} onMouseLeave={e => { e.target.style.background = th.card; e.target.style.boxShadow = ""; e.target.style.borderColor = th.cardBorder; }}>{n}</span>
            {i < t.systems.nodes.length - 1 && <span style={{ color: th.accent + "44", fontSize: 14 }}>→</span>}
          </span>)}
        </div>
      </div></Fade>

      {/* ═══ TECH STACK ═══ */}
      <Fade id="stack"><div style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 28px" }}>
        <p style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, letterSpacing: 3, color: th.accent, textTransform: "uppercase", marginBottom: 8 }}>{t.stack.label}</p>
        <h2 style={{ fontSize: "clamp(24px,4vw,40px)", fontWeight: 800, color: th.white, marginBottom: 32 }}>{t.stack.title}</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,220px),1fr))", gap: 24 }}>
          {Object.entries(stackData).map(([cat, tools]) => <div key={cat}>
            <p style={{ fontFamily: "'JetBrains Mono',monospace", color: th.accent, fontSize: 9, letterSpacing: 2, marginBottom: 10, textTransform: "uppercase" }}>{cat}</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
              {tools.map(tool => <span key={tool} style={{ padding: "5px 12px", borderRadius: 6, background: th.card, border: `1px solid ${th.cardBorder}`, fontSize: 11, fontFamily: "'JetBrains Mono',monospace", color: th.text2, backdropFilter: "blur(8px)", transition: "all .3s", cursor: "default" }} onMouseEnter={e => { e.target.style.borderColor = th.accent + "66"; e.target.style.color = th.accent; e.target.style.boxShadow = `0 0 10px ${th.accent}22`; e.target.style.transform = "translateY(-2px)"; }} onMouseLeave={e => { e.target.style.borderColor = th.cardBorder; e.target.style.color = th.text2; e.target.style.boxShadow = ""; e.target.style.transform = ""; }}>{tool}</span>)}
            </div>
          </div>)}
        </div>
      </div></Fade>

      {/* ═══ PROJECTS ═══ */}
      <Fade id="projects"><div style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 28px" }}>
        <p style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, letterSpacing: 3, color: th.accent, textTransform: "uppercase", marginBottom: 8 }}>{t.projects.label}</p>
        <h2 style={{ fontSize: "clamp(24px,4vw,40px)", fontWeight: 800, color: th.white, marginBottom: 8 }}>{t.projects.title}</h2>
        <p style={{ color: th.text2, fontSize: 14, marginBottom: 32 }}>{t.projects.sub}</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,300px),1fr))", gap: 16 }}>
          {t.projects.items.map((p, i) => <div key={i} style={{ background: th.card, border: `1px solid ${th.cardBorder}`, borderRadius: 12, padding: 22, backdropFilter: "blur(8px)", display: "flex", flexDirection: "column", transition: "all .4s cubic-bezier(.16,1,.3,1)", transformStyle: "preserve-3d" }} onMouseMove={tiltCard} onMouseLeave={resetCard}>
            <span style={{ fontFamily: "'JetBrains Mono',monospace", color: th.text3, fontSize: 9 }}>{String(i + 1).padStart(2, "0")}</span>
            <h3 style={{ color: th.white, fontSize: 15, fontWeight: 700, marginBottom: 8, marginTop: 2 }}>{p.t}</h3>
            <p style={{ color: th.text2, fontSize: 12, lineHeight: 1.6, flex: 1, marginBottom: 12 }}>{p.desc}</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
              {p.tags.map(tag => <span key={tag} style={{ padding: "2px 8px", borderRadius: 100, fontSize: 9, fontFamily: "'JetBrains Mono',monospace", background: th.accent + "0d", color: th.accent, border: `1px solid ${th.accent}22` }}>{tag}</span>)}
            </div>
          </div>)}
        </div>
      </div></Fade>

      {/* ═══ PHILOSOPHY ═══ */}
      <Fade id="philosophy"><div style={{ maxWidth: 1100, margin: "0 auto", padding: "60px 28px" }}>
        <h2 style={{ fontSize: "clamp(24px,4vw,36px)", fontWeight: 800, color: th.white, marginBottom: 20 }}>{t.philosophy.title}</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 28 }}>
          {t.philosophy.traits.map((tr, i) => <span key={i} style={{ padding: "8px 18px", background: th.card, border: `1px solid ${th.cardBorder}`, borderRadius: 100, fontSize: 13, fontWeight: 600, color: th.text, backdropFilter: "blur(8px)", display: "inline-flex", alignItems: "center", gap: 6, transition: "all .3s", cursor: "default" }} onMouseEnter={e => { e.currentTarget.style.borderColor = th.accent + "44"; e.currentTarget.style.color = th.accent; }} onMouseLeave={e => { e.currentTarget.style.borderColor = th.cardBorder; e.currentTarget.style.color = th.text; }}>
            <span style={{ color: th.accent, fontSize: 8 }}>◆</span>{tr}
          </span>)}
        </div>
        {t.philosophy.rules.map((r, i) => <p key={i} style={{ fontFamily: "'JetBrains Mono',monospace", color: th.text3, fontSize: "clamp(12px,1.6vw,15px)", padding: "12px 0", paddingLeft: 0, borderBottom: `1px solid ${th.cardBorder}`, transition: "all .3s", cursor: "default" }} onMouseEnter={e => { e.target.style.color = th.accent; e.target.style.paddingLeft = "10px"; e.target.style.borderBottomColor = th.accent + "33"; }} onMouseLeave={e => { e.target.style.color = th.text3; e.target.style.paddingLeft = "0"; e.target.style.borderBottomColor = th.cardBorder; }}>{r}</p>)}
      </div></Fade>

      {/* ═══ CONTACT ═══ */}
      <Fade id="contact"><div style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 28px", textAlign: "center" }}>
        <p style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, letterSpacing: 3, color: th.accent, textTransform: "uppercase", marginBottom: 8 }}>{t.contact.label}</p>
        <h2 style={{ fontSize: "clamp(24px,4vw,40px)", fontWeight: 800, color: th.white, marginBottom: 8 }}>{t.contact.title}</h2>
        <p style={{ color: th.text2, fontSize: 14, marginBottom: 32 }}>{t.contact.sub}</p>
        <a href="mailto:luis.kevin.quiroz@gmail.com" style={{ display: "inline-flex", padding: "14px 34px", background: `linear-gradient(135deg, ${th.gradStart}, ${th.gradEnd})`, color: theme === "dark" ? "#0a0a0f" : "#fff", border: "none", borderRadius: 100, fontWeight: 700, fontSize: 14, textDecoration: "none", transition: "transform .3s" }} onMouseEnter={e => e.target.style.transform = "translateY(-2px)"} onMouseLeave={e => e.target.style.transform = ""}>{t.contact.cta} →</a>
        <div style={{ display: "flex", gap: 10, justifyContent: "center", marginTop: 20, flexWrap: "wrap" }}>
          {socials.map(s => <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "8px 16px", background: "transparent", color: th.accent, border: `1px solid ${th.accent}33`, borderRadius: 100, fontSize: 11, textDecoration: "none", transition: "all .3s" }} onMouseEnter={e => { e.currentTarget.style.background = th.glow; e.currentTarget.style.borderColor = th.accent; }} onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = th.accent + "33"; }}><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d={s.d} /></svg>{s.name}</a>)}
        </div>
        <p style={{ fontFamily: "'JetBrains Mono',monospace", color: th.text3, fontSize: 10, marginTop: 16 }}>📍 {t.contact.loc} · <span style={{ color: th.accent }}>● {t.contact.avail}</span></p>
      </div></Fade>

      {/* ═══ FOOTER ═══ */}
      <footer style={{ borderTop: `1px solid ${th.cardBorder}`, padding: "32px 28px", textAlign: "center", position: "relative", zIndex: 1 }}>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", marginBottom: 12 }}>
          {socials.map(s => <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" style={{ color: th.text3, transition: "color .3s" }} onMouseEnter={e => e.currentTarget.style.color = th.accent} onMouseLeave={e => e.currentTarget.style.color = th.text3}><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d={s.d} /></svg></a>)}
        </div>
        <p style={{ color: th.text3, fontSize: 11, marginBottom: 8 }}>{t.footer}</p>
        <p style={{ fontFamily: "'JetBrains Mono',monospace", color: th.text3 + "66", fontSize: 9 }}>© {new Date().getFullYear()} Kevin Quiroz</p>
      </footer>
    </div>
  );
}
