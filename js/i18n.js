(function () {
  const translations = {
    es: {
      nav_home: "Inicio",
      nav_about: "Sobre Mí",
      nav_experience: "Experiencia",
      nav_projects: "Proyectos",
      nav_contact: "Contacto",

      home_subtitle: "Analista de Datos | Desarrollador Web | Supply Chain",
      home_line1: "Transformando procesos y datos en soluciones digitales claras y eficientes.",
      home_line2:
        "Estudiante de Ingeniería en Informática con experiencia real en entornos empresariales, análisis de datos, automatización y desarrollo web.",
      home_cv: "Descargar CV",

      about_title: "Sobre Mí",
      about_p1:
        "Soy estudiante de Ingeniería en Informática y profesional con experiencia en Supply Chain, análisis de datos y desarrollo web. Me especializo en crear soluciones tecnológicas que optimizan procesos y mejoran la toma de decisiones.",
      about_p2:
        "Trabajo con SQL, Power BI, Excel avanzado, Python y tecnologías web (HTML, CSS, JavaScript). Me destaco por el pensamiento crítico, la proactividad y el aprendizaje continuo.",

      exp_title: "Formación",
      exp_work: "Experiencia Laboral",
      exp_edu: "Formación Académica",

      // Work Experience cards
      job1_title: "Master Planner | Galileo Technologies S.A.",
      job1_date: "Enero 2024 – Diciembre 2025",
      job1_desc:
        "Rol orientado a la planificación integral de la demanda y el abastecimiento, con foco en análisis de información, coordinación interáreas y control de indicadores.",
      job1_li1: "Planificación de demanda y seguimiento de abastecimiento",
      job1_li2: "Análisis de datos operativos para soporte a la toma de decisiones",
      job1_li3: "Coordinación con áreas de compras, logística y operaciones",
      job1_li4: "Seguimiento de KPIs, desvíos y cumplimiento operativo",

      job2_title: "Administrativo Supply Chain | Galileo Technologies S.A.",
      job2_date: "Enero 2022 – Diciembre 2023",
      job2_desc:
        "Etapa de consolidación en la gestión administrativa y operativa de la cadena de suministro, incorporando análisis de datos y mejora de procesos.",
      job2_li1: "Seguimiento de órdenes de venta y entregas",
      job2_li2: "Gestión de documentación operativa y control administrativo",
      job2_li3: "Análisis de información operativa y generación de reportes",
      job2_li4: "Resolución de incidencias y coordinación entre áreas",

      job3_title: "Responsable de Supply Chain | Galileo Technologies S.A.",
      job3_date: "Octubre 2019 – Diciembre 2021",
      job3_desc:
        "Rol de gestión integral de la cadena de suministro, con liderazgo de equipos y foco en optimización de procesos y costos.",
      job3_li1: "Optimización de inventarios y niveles de stock",
      job3_li2: "Implementación de mejoras en procesos logísticos",
      job3_li3: "Liderazgo y coordinación de equipos operativos",
      job3_li4: "Mejora del cumplimiento de entregas y tiempos operativos",
      job3_results:
        "Resultados: reducción de inventario aproximada del 25% y mejora de eficiencia cercana al 15%.",

      job4_title: "Supervisor de Producción | Cartones América Argentina S.A.",
      job4_date: "Septiembre 2017 – Septiembre 2019",
      job4_desc:
        "Rol de supervisión integral, liderando equipos numerosos y coordinando la ejecución diaria de la producción.",
      job4_li1: "Supervisión de equipos de 10 a 30 personas por turno",
      job4_li2: "Control del cumplimiento de planes productivos",
      job4_li3: "Resolución de incidencias operativas",
      job4_li4: "Seguimiento de indicadores de productividad",
      job4_li5: "Coordinación con logística, mantenimiento y administración",

      job5_title: "Programador de Producción | Cartones América Argentina S.A.",
      job5_date: "Enero 2017 – Agosto 2017",
      job5_desc:
        "Rol orientado a la planificación y programación de la producción, coordinando recursos y tiempos de fabricación.",
      job5_li1: "Programación de líneas de producción",
      job5_li2: "Coordinación de pedidos, entregas y prioridades",
      job5_li3: "Interacción con áreas de logística y abastecimiento",
      job5_li4: "Optimización de tiempos productivos",

      job6_title: "Jefe de Almacén | Cartones América Argentina S.A.",
      job6_date: "Septiembre 2015 – Diciembre 2016",
      job6_desc:
        "Primer rol formal de liderazgo, con responsabilidad directa sobre inventarios, personal y flujo de materiales.",
      job6_li1: "Gestión integral del almacén y control de stock",
      job6_li2: "Supervisión de personal operativo",
      job6_li3: "Organización de despachos y abastecimiento interno",
      job6_li4: "Mejora del orden, control y trazabilidad de materiales",

      job7_title: "Asistente de Producción | Cartones América Argentina S.A.",
      job7_date: "Marzo 2014 – Agosto 2015",
      job7_desc:
        "Participación en la gestión operativa de producción y logística interna dentro de una empresa de mayor escala.",
      job7_li1: "Coordinación de tareas productivas y de depósito",
      job7_li2: "Control de ingreso y egreso de materiales",
      job7_li3: "Gestión de documentación operativa",
      job7_li4: "Soporte a supervisores de producción",

      job8_title: "Asistente de Producción | Productos Termoformados S.R.L.",
      job8_date: "Septiembre 2013 – Marzo 2014",
      job8_desc:
        "Rol de apoyo operativo y administrativo dentro del área de producción, incorporando mayores responsabilidades en organización y control.",
      job8_li1: "Asistencia en la coordinación de tareas productivas",
      job8_li2: "Control básico de inventarios y materiales",
      job8_li3: "Apoyo en la planificación diaria de la producción",
      job8_li4: "Colaboración con supervisores y responsables de área",

      job9_title: "Operario de Producción | Productos Termoformados S.R.L.",
      job9_date: "Marzo 2013 – Agosto 2013",
      job9_desc:
        "Primeras experiencias laborales en entorno industrial, desempeñando tareas operativas directas en procesos productivos.",
      job9_li1: "Operación en líneas de producción",
      job9_li2: "Manipulación y control de materiales",
      job9_li3: "Cumplimiento de procedimientos y normas operativas",
      job9_li4: "Trabajo en equipo dentro del área productiva",

      // Education
      edu1_title: "Ingeniería en Informática | UADE",
      edu1_date: "Marzo 2021 – Actualidad · En curso",
      edu1_desc1:
        "Carrera orientada al desarrollo de software, análisis de sistemas y procesamiento de datos, con fuerte énfasis en programación, bases de datos y resolución de problemas.",
      edu1_li1: "Programación orientada a objetos (Java)",
      edu1_li2: "Estructuras de datos y algoritmos",
      edu1_li3: "Bases de datos relacionales y SQL",
      edu1_li4: "Diseño y modelado de sistemas",
      edu1_li5: "Análisis de requerimientos y procesos",
      edu1_li6: "Desarrollo de proyectos académicos aplicados",
      edu1_desc2:
        "Formación orientada al análisis de datos, procesos y sistemas, aplicando los conocimientos adquiridos en proyectos académicos y desarrollos personales.",

      edu2_title: "Técnico Mecánico en Máquinas y Herramientas",
      edu2_school: "Escuela Técnica N° 23 “Casal Calviño” – CABA",
      edu2_date: "2006 – 2011",
      edu2_desc:
        "Formación técnica orientada a procesos industriales, mecánica, automatización y diseño técnico, que sentó las bases de mi desarrollo profesional en producción, logística y planificación.",
      edu2_li1: "Control numérico computarizado (CNC)",
      edu2_li2: "Programación y mecanizado asistido",
      edu2_li3: "Neumática y electroneumática",
      edu2_li4: "Controladores programables (PLC)",
      edu2_li5: "Diseño técnico con AutoCAD 2D y 3D",
      edu2_li6: "Interpretación de planos y procesos productivos",

      // Certificates
      cert_ch_title: "Certificaciones | CoderHouse",
      cert_webdev: "Desarrollo Web",
      cert_python: "Python",
      cert_sql: "SQL",
      cert_da: "Data Analytics",
      cert_view: "Ver",

      cert_sec_title: "Ciberseguridad | Educación IT",
      cert_sec_1: "Introducción a la Ciberseguridad",
      cert_sec_2: "Cibercrimen y Evidencia Digital",

      // Projects
      projects_title: "Proyectos",

      proj1_title: "Dashboard de Órdenes de Venta",
      proj1_desc: "Dashboard interactivo para seguimiento de órdenes, clientes y métodos de envío.",
      proj1_btn: "Ver en GitHub",

      proj2_title: "Terapia Animal",
      proj2_desc: "Sitio institucional orientado a servicios con foco en experiencia de usuario.",
      proj2_btn: "Ver Página",

      proj3_title: "Diseño Web Eureka",
      proj3_desc: "Plataforma educativa con diseño responsive y navegación por secciones.",
      proj3_btn: "Ver Página",

      proj4_title: "Proyecto en desarrollo",
      proj4_desc: "Próximo proyecto orientado a automatización y análisis de datos.",
      proj4_btn: "Próximamente",

      chip_powerbi: "Power BI",
      chip_kpis: "KPIs",
      chip_modeling: "Modelado",
      chip_html: "HTML",
      chip_css: "CSS",
      chip_uxui: "UX/UI",
      chip_responsive: "Responsive",
      chip_progress: "En progreso",

      contact_title: "Contacto",
      footer_rights: "Todos los derechos reservados."
    },

    en: {
      nav_home: "Home",
      nav_about: "About",
      nav_experience: "Experience",
      nav_projects: "Projects",
      nav_contact: "Contact",

      home_subtitle: "Data Analyst | Web Developer | Supply Chain",
      home_line1: "Transforming processes and data into clear and efficient digital solutions.",
      home_line2:
        "Computer Engineering student with real experience in business environments, data analysis, automation and web development.",
      home_cv: "Download CV",

      about_title: "About",
      about_p1:
        "I’m a Computer Engineering student and a professional with experience in Supply Chain, data analysis and web development. I specialize in building tech solutions that optimize processes and improve decision-making.",
      about_p2:
        "I work with SQL, Power BI, advanced Excel, Python and web technologies (HTML, CSS, JavaScript). I stand out for critical thinking, proactivity and continuous learning.",

      exp_title: "Background",
      exp_work: "Work Experience",
      exp_edu: "Education",

      job1_title: "Master Planner | Galileo Technologies S.A.",
      job1_date: "Jan 2024 – Dec 2025",
      job1_desc:
        "Role focused on end-to-end demand and supply planning, with emphasis on data analysis, cross-team coordination and KPI monitoring.",
      job1_li1: "Demand planning and supply follow-up",
      job1_li2: "Operational data analysis to support decision-making",
      job1_li3: "Coordination with purchasing, logistics and operations",
      job1_li4: "KPI tracking, deviations and operational compliance",

      job2_title: "Supply Chain Administrative | Galileo Technologies S.A.",
      job2_date: "Jan 2022 – Dec 2023",
      job2_desc:
        "Consolidation stage in administrative and operational supply chain management, adding data analysis and process improvement.",
      job2_li1: "Sales orders and deliveries follow-up",
      job2_li2: "Operational documentation management and admin control",
      job2_li3: "Operational reporting and analysis",
      job2_li4: "Issue resolution and cross-team coordination",

      job3_title: "Supply Chain Lead | Galileo Technologies S.A.",
      job3_date: "Oct 2019 – Dec 2021",
      job3_desc:
        "End-to-end supply chain management role, leading teams and focusing on process and cost optimization.",
      job3_li1: "Inventory optimization and stock level control",
      job3_li2: "Implementation of logistics process improvements",
      job3_li3: "Leadership and coordination of operational teams",
      job3_li4: "Improved delivery compliance and lead times",
      job3_results:
        "Results: ~25% inventory reduction and ~15% efficiency improvement.",

      job4_title: "Production Supervisor | Cartones América Argentina S.A.",
      job4_date: "Sep 2017 – Sep 2019",
      job4_desc:
        "End-to-end supervision role, leading large teams and coordinating daily production execution.",
      job4_li1: "Team supervision (10–30 people per shift)",
      job4_li2: "Production plan compliance control",
      job4_li3: "Operational incident resolution",
      job4_li4: "Productivity KPI tracking",
      job4_li5: "Coordination with logistics, maintenance and admin",

      job5_title: "Production Planner | Cartones América Argentina S.A.",
      job5_date: "Jan 2017 – Aug 2017",
      job5_desc:
        "Production planning and scheduling role, coordinating resources and manufacturing timelines.",
      job5_li1: "Production line scheduling",
      job5_li2: "Order prioritization and delivery coordination",
      job5_li3: "Interaction with logistics and supply areas",
      job5_li4: "Manufacturing time optimization",

      job6_title: "Warehouse Manager | Cartones América Argentina S.A.",
      job6_date: "Sep 2015 – Dec 2016",
      job6_desc:
        "First formal leadership role, responsible for inventory, staff and material flow.",
      job6_li1: "Warehouse management and stock control",
      job6_li2: "Operational staff supervision",
      job6_li3: "Dispatch organization and internal supply",
      job6_li4: "Order, control and material traceability improvements",

      job7_title: "Production Assistant | Cartones América Argentina S.A.",
      job7_date: "Mar 2014 – Aug 2015",
      job7_desc:
        "Operational production and internal logistics management within a larger company.",
      job7_li1: "Production and warehouse task coordination",
      job7_li2: "Inbound/outbound material control",
      job7_li3: "Operational documentation management",
      job7_li4: "Support for production supervisors",

      job8_title: "Production Assistant | Productos Termoformados S.R.L.",
      job8_date: "Sep 2013 – Mar 2014",
      job8_desc:
        "Operational and admin support in production, taking on more responsibilities in organization and control.",
      job8_li1: "Support in coordinating production tasks",
      job8_li2: "Basic inventory/material control",
      job8_li3: "Support in daily production planning",
      job8_li4: "Collaboration with supervisors and area leads",

      job9_title: "Production Operator | Productos Termoformados S.R.L.",
      job9_date: "Mar 2013 – Aug 2013",
      job9_desc:
        "First industrial work experiences performing hands-on production tasks.",
      job9_li1: "Operating production lines",
      job9_li2: "Handling and controlling materials",
      job9_li3: "Following procedures and operational standards",
      job9_li4: "Teamwork in the production area",

      edu1_title: "Computer Engineering | UADE",
      edu1_date: "Mar 2021 – Present · Ongoing",
      edu1_desc1:
        "Degree focused on software development, systems analysis and data processing, with strong emphasis on programming, databases and problem-solving.",
      edu1_li1: "Object-oriented programming (Java)",
      edu1_li2: "Data structures and algorithms",
      edu1_li3: "Relational databases and SQL",
      edu1_li4: "Systems design and modeling",
      edu1_li5: "Requirements and process analysis",
      edu1_li6: "Applied academic projects development",
      edu1_desc2:
        "Training focused on data, processes and systems, applying knowledge in academic projects and personal developments.",

      edu2_title: "Mechanical Technician (Machine Tools)",
      edu2_school: "Technical School No. 23 “Casal Calviño” – Buenos Aires",
      edu2_date: "2006 – 2011",
      edu2_desc:
        "Technical education focused on industrial processes, mechanics, automation and technical design, laying the foundation for my career in production, logistics and planning.",
      edu2_li1: "CNC (Computer Numerical Control)",
      edu2_li2: "Assisted programming and machining",
      edu2_li3: "Pneumatics and electro-pneumatics",
      edu2_li4: "Programmable logic controllers (PLC)",
      edu2_li5: "Technical design with AutoCAD 2D/3D",
      edu2_li6: "Blueprint reading and production processes",

      cert_ch_title: "Certifications | CoderHouse",
      cert_webdev: "Web Development",
      cert_python: "Python",
      cert_sql: "SQL",
      cert_da: "Data Analytics",
      cert_view: "View",

      cert_sec_title: "Cybersecurity | Educación IT",
      cert_sec_1: "Introduction to Cybersecurity",
      cert_sec_2: "Cybercrime & Digital Evidence",

      projects_title: "Projects",
      proj1_title: "Sales Orders Dashboard",
      proj1_desc: "Interactive dashboard to track orders, customers and shipping methods.",
      proj1_btn: "View on GitHub",

      proj2_title: "Animal Therapy",
      proj2_desc: "Institutional website focused on services and user experience.",
      proj2_btn: "View Site",

      proj3_title: "Eureka Web Design",
      proj3_desc: "Educational platform with responsive design and section-based navigation.",
      proj3_btn: "View Site",

      proj4_title: "Project in Progress",
      proj4_desc: "Upcoming project focused on automation and data analysis.",
      proj4_btn: "Coming soon",

      chip_powerbi: "Power BI",
      chip_kpis: "KPIs",
      chip_modeling: "Modeling",
      chip_html: "HTML",
      chip_css: "CSS",
      chip_uxui: "UX/UI",
      chip_responsive: "Responsive",
      chip_progress: "In progress",

      contact_title: "Contact",
      footer_rights: "All rights reserved."
    },

    it: {
      nav_home: "Home",
      nav_about: "Chi sono",
      nav_experience: "Esperienza",
      nav_projects: "Progetti",
      nav_contact: "Contatto",

      home_subtitle: "Analista di Dati | Sviluppatore Web | Supply Chain",
      home_line1: "Trasformo processi e dati in soluzioni digitali chiare ed efficienti.",
      home_line2:
        "Studente di Ingegneria Informatica con esperienza reale in contesti aziendali, analisi dei dati, automazione e sviluppo web.",
      home_cv: "Scarica CV",

      about_title: "Chi sono",
      about_p1:
        "Sono studente di Ingegneria Informatica e professionista con esperienza in Supply Chain, analisi dei dati e sviluppo web. Mi specializzo nel creare soluzioni tecnologiche che ottimizzano i processi e migliorano il processo decisionale.",
      about_p2:
        "Lavoro con SQL, Power BI, Excel avanzato, Python e tecnologie web (HTML, CSS, JavaScript). Mi distinguo per pensiero critico, proattività e apprendimento continuo.",

      exp_title: "Formazione",
      exp_work: "Esperienza Lavorativa",
      exp_edu: "Formazione",

      job1_title: "Master Planner | Galileo Technologies S.A.",
      job1_date: "Gen 2024 – Dic 2025",
      job1_desc:
        "Ruolo orientato alla pianificazione end-to-end della domanda e dell’approvvigionamento, con focus su analisi dei dati, coordinamento interfunzionale e monitoraggio KPI.",
      job1_li1: "Pianificazione della domanda e follow-up approvvigionamenti",
      job1_li2: "Analisi dati operativi a supporto delle decisioni",
      job1_li3: "Coordinamento con acquisti, logistica e operations",
      job1_li4: "Monitoraggio KPI, scostamenti e conformità operativa",

      job2_title: "Amministrativo Supply Chain | Galileo Technologies S.A.",
      job2_date: "Gen 2022 – Dic 2023",
      job2_desc:
        "Fase di consolidamento nella gestione amministrativa e operativa della supply chain, integrando analisi dati e miglioramento dei processi.",
      job2_li1: "Monitoraggio ordini di vendita e consegne",
      job2_li2: "Gestione documentazione operativa e controllo amministrativo",
      job2_li3: "Analisi operativa e reportistica",
      job2_li4: "Risoluzione problemi e coordinamento tra aree",

      job3_title: "Responsabile Supply Chain | Galileo Technologies S.A.",
      job3_date: "Ott 2019 – Dic 2021",
      job3_desc:
        "Ruolo di gestione end-to-end della supply chain, con leadership di team e focus su ottimizzazione di processi e costi.",
      job3_li1: "Ottimizzazione inventario e livelli di stock",
      job3_li2: "Implementazione miglioramenti logistici",
      job3_li3: "Leadership e coordinamento team operativi",
      job3_li4: "Miglioramento puntualità consegne e lead time",
      job3_results:
        "Risultati: riduzione inventario ~25% e miglioramento efficienza ~15%.",

      job4_title: "Supervisore Produzione | Cartones América Argentina S.A.",
      job4_date: "Set 2017 – Set 2019",
      job4_desc:
        "Ruolo di supervisione end-to-end, con leadership di team numerosi e coordinamento dell’esecuzione giornaliera della produzione.",
      job4_li1: "Supervisione team (10–30 persone per turno)",
      job4_li2: "Controllo rispetto piani produttivi",
      job4_li3: "Risoluzione criticità operative",
      job4_li4: "Monitoraggio KPI di produttività",
      job4_li5: "Coordinamento con logistica, manutenzione e amministrazione",

      job5_title: "Programmatore Produzione | Cartones América Argentina S.A.",
      job5_date: "Gen 2017 – Ago 2017",
      job5_desc:
        "Ruolo orientato alla pianificazione e programmazione della produzione, coordinando risorse e tempi di lavorazione.",
      job5_li1: "Programmazione linee di produzione",
      job5_li2: "Priorità ordini e coordinamento consegne",
      job5_li3: "Interazione con logistica e approvvigionamento",
      job5_li4: "Ottimizzazione tempi produttivi",

      job6_title: "Capo Magazzino | Cartones América Argentina S.A.",
      job6_date: "Set 2015 – Dic 2016",
      job6_desc:
        "Primo ruolo formale di leadership, con responsabilità su inventari, personale e flusso materiali.",
      job6_li1: "Gestione magazzino e controllo stock",
      job6_li2: "Supervisione personale operativo",
      job6_li3: "Organizzazione spedizioni e rifornimenti interni",
      job6_li4: "Miglioramento ordine, controllo e tracciabilità",

      job7_title: "Assistente Produzione | Cartones América Argentina S.A.",
      job7_date: "Mar 2014 – Ago 2015",
      job7_desc:
        "Partecipazione alla gestione operativa della produzione e della logistica interna in una realtà di maggiore scala.",
      job7_li1: "Coordinamento attività produttive e magazzino",
      job7_li2: "Controllo entrata/uscita materiali",
      job7_li3: "Gestione documentazione operativa",
      job7_li4: "Supporto ai supervisori di produzione",

      job8_title: "Assistente Produzione | Productos Termoformados S.R.L.",
      job8_date: "Set 2013 – Mar 2014",
      job8_desc:
        "Supporto operativo e amministrativo in produzione, con crescita nelle responsabilità di organizzazione e controllo.",
      job8_li1: "Supporto coordinamento attività produttive",
      job8_li2: "Controllo base inventario e materiali",
      job8_li3: "Supporto pianificazione giornaliera",
      job8_li4: "Collaborazione con supervisori e responsabili",

      job9_title: "Operatore Produzione | Productos Termoformados S.R.L.",
      job9_date: "Mar 2013 – Ago 2013",
      job9_desc:
        "Prime esperienze in ambito industriale, svolgendo attività operative dirette nei processi produttivi.",
      job9_li1: "Operazione su linee di produzione",
      job9_li2: "Gestione e controllo materiali",
      job9_li3: "Rispetto procedure e standard operativi",
      job9_li4: "Lavoro di squadra in produzione",

      edu1_title: "Ingegneria Informatica | UADE",
      edu1_date: "Mar 2021 – Oggi · In corso",
      edu1_desc1:
        "Percorso orientato allo sviluppo software, analisi dei sistemi e data processing, con forte enfasi su programmazione, database e problem solving.",
      edu1_li1: "Programmazione a oggetti (Java)",
      edu1_li2: "Strutture dati e algoritmi",
      edu1_li3: "Database relazionali e SQL",
      edu1_li4: "Design e modellazione sistemi",
      edu1_li5: "Analisi requisiti e processi",
      edu1_li6: "Sviluppo progetti accademici applicati",
      edu1_desc2:
        "Formazione orientata ad analisi dati, processi e sistemi, applicando le competenze in progetti accademici e sviluppi personali.",

      edu2_title: "Tecnico Meccanico (Macchine Utensili)",
      edu2_school: "Scuola Tecnica N° 23 “Casal Calviño” – Buenos Aires",
      edu2_date: "2006 – 2011",
      edu2_desc:
        "Formazione tecnica orientata a processi industriali, meccanica, automazione e disegno tecnico, base del mio percorso in produzione, logistica e pianificazione.",
      edu2_li1: "CNC (Controllo Numerico)",
      edu2_li2: "Programmazione e lavorazioni assistite",
      edu2_li3: "Pneumatica ed elettropneumatica",
      edu2_li4: "PLC (controllori programmabili)",
      edu2_li5: "Disegno tecnico con AutoCAD 2D/3D",
      edu2_li6: "Lettura disegni e processi produttivi",

      cert_ch_title: "Certificazioni | CoderHouse",
      cert_webdev: "Sviluppo Web",
      cert_python: "Python",
      cert_sql: "SQL",
      cert_da: "Data Analytics",
      cert_view: "Vedi",

      cert_sec_title: "Cybersecurity | Educación IT",
      cert_sec_1: "Introduzione alla Cybersecurity",
      cert_sec_2: "Cybercrime e Prove Digitali",

      projects_title: "Progetti",
      proj1_title: "Dashboard Ordini di Vendita",
      proj1_desc: "Dashboard interattiva per monitorare ordini, clienti e metodi di spedizione.",
      proj1_btn: "Vedi su GitHub",

      proj2_title: "Terapia Animal",
      proj2_desc: "Sito istituzionale orientato ai servizi con focus sull’esperienza utente.",
      proj2_btn: "Vedi Sito",

      proj3_title: "Design Web Eureka",
      proj3_desc: "Piattaforma educativa con design responsive e navigazione per sezioni.",
      proj3_btn: "Vedi Sito",

      proj4_title: "Progetto in sviluppo",
      proj4_desc: "Prossimo progetto orientato all’automazione e all’analisi dei dati.",
      proj4_btn: "Prossimamente",

      chip_powerbi: "Power BI",
      chip_kpis: "KPI",
      chip_modeling: "Modellazione",
      chip_html: "HTML",
      chip_css: "CSS",
      chip_uxui: "UX/UI",
      chip_responsive: "Responsive",
      chip_progress: "In corso",

      contact_title: "Contatto",
      footer_rights: "Tutti i diritti riservati."
    }
  };

  function applyLanguage(lang) {
    const dict = translations[lang] || translations.es;

    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.dataset.i18n;
      if (dict[key]) el.textContent = dict[key];
    });

    document.querySelectorAll(".lang-switch button").forEach((b) => {
      b.classList.toggle("active", b.dataset.lang === lang);
    });

    localStorage.setItem("lang", lang);
  }

  window.addEventListener("load", () => {
    document.querySelectorAll(".lang-switch button").forEach((btn) => {
      btn.addEventListener("click", () => applyLanguage(btn.dataset.lang));
    });

    const saved = localStorage.getItem("lang");
    applyLanguage(saved || "es");
  });
})();
