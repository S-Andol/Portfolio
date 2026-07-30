(function () {
  const translations = {
    es: {
      nav_home: "Inicio",
      nav_about: "Sobre Mí",
      nav_skills: "Habilidades",
      nav_experience: "Experiencia",
      nav_projects: "Proyectos",
      nav_contact: "Contacto",

      home_greeting: "Hola, mi nombre es",
      home_subtitle: "Analista de Datos | Desarrollador Web | Supply Chain",
      home_line1: "Transformo procesos y datos en soluciones digitales claras, ordenadas y orientadas a la toma de decisiones.",
      home_line2:
        "Más de 8 años de experiencia en Supply Chain y producción, sumados a una formación técnica en Ingeniería en Informática, análisis de datos, automatización y desarrollo web.",
      home_cv: "Descargar CV",
      home_contact: "./contacto",
      status_open: "Disponible para nuevas oportunidades",
      hero_open: "Open to work · Disponible",

      skillcat_data: "Data & BI",
      skillcat_dev: "Desarrollo",
      skillcat_ops: "Operaciones",
      skill_scm_chip: "Supply Chain",
      skill_plan_chip: "Planificación",
      skill_report_chip: "Reporting",
      skill_improve_chip: "Mejora de procesos",
      exp_prev: "Experiencia previa industrial (2013 – 2017)",

      badge_data: "📊 Data Analyst",
      badge_web: "💻 Web Developer",
      badge_scm: "📦 Supply Chain",

      stat_years: "Años de experiencia profesional",
      stat_roles: "Roles en Supply Chain y Producción",
      stat_certs: "Certificaciones técnicas",
      stat_langs: "Idiomas (ES / EN / IT)",

      skills_title: "Habilidades",
      skill_sql: "SQL",
      skill_powerbi: "Power BI",
      skill_python: "Python",
      skill_excel: "Excel Avanzado",
      skill_web: "HTML / CSS / JavaScript",
      skill_scm: "Gestión de Supply Chain",

      about_title: "Sobre Mí",
      about_p1:
        "Profesional con más de 8 años de experiencia en Supply Chain, producción y análisis de datos, actualmente cursando Ingeniería en Informática. Combino una sólida base operativa con herramientas técnicas para ordenar procesos, dar visibilidad a la información y facilitar la toma de decisiones.",
      about_p2:
        "Trabajo con SQL, Power BI, Excel avanzado, Python y tecnologías web (HTML, CSS, JavaScript). Aporto pensamiento analítico, autonomía y una mirada de mejora continua sobre procesos administrativos, de planificación y abastecimiento.",
      about_code_comment: "// perfil profesional",
      about_code_experience: "\"+8 años en Supply Chain, producción y datos\"",
      about_code_focus: "\"automatización, dashboards, decisiones basadas en datos\"",
      about_code_learning: "\"Ingeniería en Informática @ UADE\"",

      exp_title: "Experiencia y Formación",
      exp_work: "Experiencia Laboral",
      exp_edu: "Formación Académica",

      // Work Experience cards
      job1_title: "Master Planner | Galileo Technologies S.A.",
      job1_date: "Febrero 2024 – Diciembre 2025",
      job1_desc:
        "Responsable de la planificación integral de demanda y abastecimiento, articulando información entre compras, logística y operaciones para anticipar necesidades de materiales y sostener la continuidad operativa.",
      job1_li1: "Planifiqué la demanda y el abastecimiento para asegurar la disponibilidad de materiales y reducir el riesgo de quiebres de stock.",
      job1_li2: "Consolidé y analicé información de ERP, bases de datos y Excel para dar soporte a decisiones operativas con datos confiables.",
      job1_li3: "Automaticé y estandaricé reportes e indicadores, dando mayor visibilidad al estado de abastecimiento y planificación.",
      job1_li4: "Coordiné información entre compras, logística y operaciones para el seguimiento de desvíos y la mejora del cumplimiento.",
      job1_results:
        "Resultados: mayor visibilidad del flujo de materiales, reportes más ágiles y confiables, y mejor anticipación de las necesidades de abastecimiento.",

      job2_title: "Administrativo Supply Chain | Galileo Technologies S.A.",
      job2_date: "Enero 2022 – Enero 2024",
      job2_desc:
        "Gestión administrativa y operativa de la cadena de suministro, con foco en la trazabilidad de la información y la coordinación entre áreas para sostener el flujo de órdenes y entregas.",
      job2_li1: "Gestioné y di seguimiento a órdenes de venta y entregas, asegurando trazabilidad administrativa de punta a punta.",
      job2_li2: "Organicé documentación operativa y controles administrativos para mantener procesos ordenados y auditables.",
      job2_li3: "Elaboré y analicé reportes operativos para dar visibilidad al estado de pedidos, inventarios y abastecimiento.",
      job2_li4: "Resolví incidencias y coordiné información entre áreas para destrabar operaciones y mejorar los tiempos de respuesta.",

      job3_title: "Responsable de Supply Chain | Galileo Technologies S.A.",
      job3_date: "Octubre 2019 – Diciembre 2021",
      job3_desc:
        "Gestión integral de la cadena de suministro con liderazgo de equipos, orientada a ordenar procesos logísticos, fortalecer el control de inventarios y mejorar el cumplimiento de entregas.",
      job3_li1: "Fortalecí el control de inventarios y los niveles de stock para mejorar la disponibilidad y reducir faltantes.",
      job3_li2: "Implementé mejoras en procesos logísticos para hacerlos más ordenados, trazables y eficientes.",
      job3_li3: "Lideré y coordiné equipos operativos, alineando prioridades y responsabilidades.",
      job3_li4: "Mejoré el cumplimiento de entregas y los tiempos operativos mediante un seguimiento sistemático.",
      job3_results:
        "Resultados: mejor control de inventarios, mayor visibilidad del flujo de materiales y procesos logísticos más ordenados.",

      job4_title: "Supervisor de Producción | Cartones América Argentina S.A.",
      job4_date: "Septiembre 2017 – Septiembre 2019",
      job4_desc:
        "Supervisión integral de la operación diaria de producción, liderando equipos numerosos y coordinando recursos para sostener el cumplimiento de los planes productivos.",
      job4_li1: "Supervisé equipos de 10 a 30 personas por turno, organizando tareas y prioridades.",
      job4_li2: "Aseguré el cumplimiento de los planes productivos mediante un seguimiento operativo continuo.",
      job4_li3: "Resolví incidencias operativas en tiempo real para minimizar interrupciones.",
      job4_li4: "Di seguimiento a indicadores de productividad para sostener el rendimiento del turno.",
      job4_li5: "Coordiné información con logística, mantenimiento y administración para una operación alineada.",
      job4_results:
        "Resultados: cumplimiento sostenido de los planes productivos, una operación más ordenada y equipos mejor coordinados.",

      job5_title: "Programador de Producción | Cartones América Argentina S.A.",
      job5_date: "Enero 2017 – Agosto 2017",
      job5_desc:
        "Planificación y programación de la producción, coordinando recursos, prioridades y tiempos de fabricación para sostener el flujo operativo.",
      job5_li1: "Programé líneas de producción organizando recursos y tiempos de fabricación.",
      job5_li2: "Coordiné pedidos, entregas y prioridades para alinear la producción con la demanda.",
      job5_li3: "Articulé información con logística y abastecimiento para anticipar necesidades.",
      job5_li4: "Ordené y optimicé los tiempos productivos del proceso.",

      job6_title: "Jefe de Almacén | Cartones América Argentina S.A.",
      job6_date: "Septiembre 2015 – Diciembre 2016",
      job6_desc:
        "Primer rol formal de liderazgo, con responsabilidad directa sobre inventarios, personal y flujo de materiales del almacén.",
      job6_li1: "Gestioné integralmente el almacén y fortalecí el control de stock.",
      job6_li2: "Supervisé personal operativo, organizando tareas y turnos.",
      job6_li3: "Organicé despachos y abastecimiento interno para sostener el flujo de materiales.",
      job6_li4: "Mejoré el orden, el control y la trazabilidad de los materiales.",

      job7_title: "Asistente de Producción | Cartones América Argentina S.A.",
      job7_date: "Marzo 2014 – Agosto 2015",
      job7_desc:
        "Soporte a la gestión operativa de producción y logística interna dentro de una empresa de gran escala.",
      job7_li1: "Coordiné tareas productivas y de depósito para sostener la operación diaria.",
      job7_li2: "Controlé el ingreso y egreso de materiales para mantener la trazabilidad.",
      job7_li3: "Gestioné documentación operativa de forma ordenada.",
      job7_li4: "Brindé soporte a supervisores de producción en la ejecución diaria.",

      job8_title: "Asistente de Producción | Productos Termoformados S.R.L.",
      job8_date: "Septiembre 2013 – Marzo 2014",
      job8_desc:
        "Apoyo operativo y administrativo en el área de producción, asumiendo responsabilidades crecientes en organización y control.",
      job8_li1: "Asistí en la coordinación de tareas productivas.",
      job8_li2: "Realicé control básico de inventarios y materiales.",
      job8_li3: "Apoyé la planificación diaria de la producción.",
      job8_li4: "Colaboré con supervisores y responsables de área.",

      job9_title: "Operario de Producción | Productos Termoformados S.R.L.",
      job9_date: "Marzo 2013 – Agosto 2013",
      job9_desc:
        "Primeras experiencias en entorno industrial, con tareas operativas directas dentro de procesos productivos.",
      job9_li1: "Operé líneas de producción cumpliendo los estándares de calidad.",
      job9_li2: "Manipulé y controlé materiales del proceso.",
      job9_li3: "Cumplí procedimientos y normas operativas.",
      job9_li4: "Trabajé en equipo dentro del área productiva.",

      // Education
      edu1_title: "Ingeniería en Informática | UADE",
      edu1_date: "Marzo 2021 – Actualidad · En curso",
      edu1_desc1:
        "Carrera orientada al desarrollo de software, el análisis de sistemas y el procesamiento de datos, con fuerte énfasis en programación, bases de datos y resolución de problemas.",
      edu1_li1: "Programación orientada a objetos (Java)",
      edu1_li2: "Estructuras de datos y algoritmos",
      edu1_li3: "Bases de datos relacionales y SQL",
      edu1_li4: "Diseño y modelado de sistemas",
      edu1_li5: "Análisis de requerimientos y procesos",
      edu1_li6: "Desarrollo de proyectos académicos aplicados",
      edu1_desc2:
        "Formación que potencia mi perfil analítico, aplicando los conocimientos de datos, procesos y sistemas en proyectos académicos y desarrollos personales.",

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

      proj_agent_title: "Agente Buscador Laboral",
      proj_agent_desc:
        "Agente en Python que busca ofertas laborales, filtra por fecha, zona y palabras clave, evita repetidos con historial por URL (vistos.json), clasifica oportunidades (POSTULAR/REVISAR/DESCARTAR) por categoría y genera reportes Excel por mes. La decisión de postular la mantiene el usuario.",
      proj_agent_btn: "Ver código",
      gallery_view: "ver capturas",
      gal_resumen_t: "Reporte resumen del agente",
      gal_resumen_s: "Totales, veredictos y estado de ejecución.",
      gal_todos_t: "Ofertas clasificadas",
      gal_todos_s: "Vista con categorías, decisión sugerida y datos del aviso.",

      proj_gen_title: "Agente Laboral Gen",
      proj_gen_desc:
        "Aplicación local en Python y Streamlit que analiza un CV, detecta habilidades y categorías laborales, genera búsquedas sugeridas, consulta ofertas reales en Computrabajo y Bumeran, elimina duplicados, clasifica resultados y permite exportarlos a Excel.",
      proj_gen_btn: "Ver código",
      gal_gen1_t: "Pantalla principal",
      gal_gen1_s: "Pantalla principal de Agente Laboral Gen con modo de búsqueda real y estado de seguridad.",
      gal_gen2_t: "Análisis de CV",
      gal_gen2_s: "Filtros y búsquedas generadas desde el perfil detectado, con métricas de ofertas procesadas.",
      gal_gen3_t: "Resultados reales",
      gal_gen3_s: "Resultados reales de Computrabajo con deduplicación, clasificación y métricas.",

      proj1_title: "Dashboard de Órdenes de Venta",
      proj1_desc:
        "Dashboard interactivo en Power BI para el seguimiento de órdenes, clientes y métodos de envío, con modelado de datos y KPIs que dan visibilidad al estado comercial y operativo.",
      proj1_btn: "Ver en GitHub",

      proj2_title: "Terapia Animal",
      proj2_desc:
        "Sitio institucional orientado a servicios, con foco en una experiencia de usuario clara y una navegación simple para el visitante.",
      proj2_btn: "Ver Página",

      proj3_title: "Diseño Web Eureka",
      proj3_desc:
        "Plataforma educativa con diseño responsive y navegación por secciones, pensada para una lectura cómoda en cualquier dispositivo.",
      proj3_btn: "Ver Página",

      proj_auto_title: "Automatización Instagram → WhatsApp",
      proj_auto_desc:
        "Sistema de automatización no-code que responde comentarios en Instagram y deriva consultas a WhatsApp, simplificando la atención y agilizando el primer contacto con el cliente.",
      proj_auto_btn: "Ver documentación",
      chip_ig: "Instagram Business",
      chip_manychat: "ManyChat",
      chip_wa: "WhatsApp Business",
      chip_nocode: "No-Code",

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
      nav_skills: "Skills",
      nav_experience: "Experience",
      nav_projects: "Projects",
      nav_contact: "Contact",

      home_greeting: "Hi, my name is",
      home_subtitle: "Data Analyst | Web Developer | Supply Chain",
      home_line1: "I turn processes and data into clear, well-structured digital solutions built to support decision-making.",
      home_line2:
        "8+ years of experience in Supply Chain and production, combined with technical training in Computer Engineering, data analysis, automation and web development.",
      home_cv: "Download CV",
      home_contact: "./contact",
      status_open: "Open to new opportunities",
      hero_open: "Open to work",

      skillcat_data: "Data & BI",
      skillcat_dev: "Development",
      skillcat_ops: "Operations",
      skill_scm_chip: "Supply Chain",
      skill_plan_chip: "Planning",
      skill_report_chip: "Reporting",
      skill_improve_chip: "Process Improvement",
      exp_prev: "Previous industrial experience (2013 – 2017)",

      badge_data: "📊 Data Analyst",
      badge_web: "💻 Web Developer",
      badge_scm: "📦 Supply Chain",

      stat_years: "Years of professional experience",
      stat_roles: "Roles in Supply Chain & Production",
      stat_certs: "Technical certifications",
      stat_langs: "Languages (ES / EN / IT)",

      skills_title: "Skills",
      skill_sql: "SQL",
      skill_powerbi: "Power BI",
      skill_python: "Python",
      skill_excel: "Advanced Excel",
      skill_web: "HTML / CSS / JavaScript",
      skill_scm: "Supply Chain Management",

      about_title: "About",
      about_p1:
        "Professional with 8+ years of experience in Supply Chain, production and data analysis, currently studying Computer Engineering. I combine a solid operational background with technical tools to organize processes, give visibility to information and support decision-making.",
      about_p2:
        "I work with SQL, Power BI, advanced Excel, Python and web technologies (HTML, CSS, JavaScript). I bring analytical thinking, autonomy and a continuous-improvement mindset to administrative, planning and supply processes.",
      about_code_comment: "// professional profile",
      about_code_experience: "\"+8 years in Supply Chain, production and data\"",
      about_code_focus: "\"automation, dashboards, data-driven decisions\"",
      about_code_learning: "\"Computer Engineering @ UADE\"",

      exp_title: "Experience & Education",
      exp_work: "Work Experience",
      exp_edu: "Education",

      job1_title: "Master Planner | Galileo Technologies S.A.",
      job1_date: "Feb 2024 – Dec 2025",
      job1_desc:
        "Responsible for end-to-end demand and supply planning, connecting information across purchasing, logistics and operations to anticipate material needs and sustain operational continuity.",
      job1_li1: "Planned demand and supply to ensure material availability and reduce the risk of stockouts.",
      job1_li2: "Consolidated and analyzed data from ERP, databases and Excel to support operational decisions with reliable information.",
      job1_li3: "Automated and standardized reports and KPIs, giving greater visibility into supply and planning status.",
      job1_li4: "Coordinated information across purchasing, logistics and operations to track deviations and improve compliance.",
      job1_results:
        "Results: greater visibility of material flow, faster and more reliable reporting, and better anticipation of supply needs.",

      job2_title: "Supply Chain Administrative | Galileo Technologies S.A.",
      job2_date: "Jan 2022 – Jan 2024",
      job2_desc:
        "Administrative and operational supply chain management, focused on information traceability and cross-team coordination to sustain the flow of orders and deliveries.",
      job2_li1: "Managed and tracked sales orders and deliveries, ensuring end-to-end administrative traceability.",
      job2_li2: "Organized operational documentation and administrative controls to keep processes orderly and auditable.",
      job2_li3: "Produced and analyzed operational reports to give visibility into orders, inventory and supply status.",
      job2_li4: "Resolved issues and coordinated information across areas to unblock operations and improve response times.",

      job3_title: "Supply Chain Lead | Galileo Technologies S.A.",
      job3_date: "Oct 2019 – Dec 2021",
      job3_desc:
        "End-to-end supply chain management with team leadership, focused on organizing logistics processes, strengthening inventory control and improving delivery compliance.",
      job3_li1: "Strengthened inventory control and stock levels to improve availability and reduce shortages.",
      job3_li2: "Implemented logistics process improvements to make them more orderly, traceable and efficient.",
      job3_li3: "Led and coordinated operational teams, aligning priorities and responsibilities.",
      job3_li4: "Improved delivery compliance and lead times through systematic follow-up.",
      job3_results:
        "Results: better inventory control, greater visibility of material flow, and more orderly logistics processes.",

      job4_title: "Production Supervisor | Cartones América Argentina S.A.",
      job4_date: "Sep 2017 – Sep 2019",
      job4_desc:
        "End-to-end supervision of daily production, leading large teams and coordinating resources to sustain compliance with production plans.",
      job4_li1: "Supervised teams of 10 to 30 people per shift, organizing tasks and priorities.",
      job4_li2: "Ensured production-plan compliance through continuous operational follow-up.",
      job4_li3: "Resolved operational incidents in real time to minimize disruptions.",
      job4_li4: "Tracked productivity KPIs to sustain shift performance.",
      job4_li5: "Coordinated information with logistics, maintenance and administration for an aligned operation.",
      job4_results:
        "Results: consistent production-plan compliance, a more orderly operation, and better coordinated teams.",

      job5_title: "Production Planner | Cartones América Argentina S.A.",
      job5_date: "Jan 2017 – Aug 2017",
      job5_desc:
        "Production planning and scheduling, coordinating resources, priorities and manufacturing timelines to sustain operational flow.",
      job5_li1: "Scheduled production lines, organizing resources and manufacturing times.",
      job5_li2: "Coordinated orders, deliveries and priorities to align production with demand.",
      job5_li3: "Connected information with logistics and supply areas to anticipate needs.",
      job5_li4: "Organized and optimized the process's production times.",

      job6_title: "Warehouse Manager | Cartones América Argentina S.A.",
      job6_date: "Sep 2015 – Dec 2016",
      job6_desc:
        "First formal leadership role, with direct responsibility for inventory, staff and warehouse material flow.",
      job6_li1: "Managed the warehouse end to end and strengthened stock control.",
      job6_li2: "Supervised operational staff, organizing tasks and shifts.",
      job6_li3: "Organized dispatches and internal supply to sustain material flow.",
      job6_li4: "Improved order, control and material traceability.",

      job7_title: "Production Assistant | Cartones América Argentina S.A.",
      job7_date: "Mar 2014 – Aug 2015",
      job7_desc:
        "Support for operational production and internal logistics management within a large-scale company.",
      job7_li1: "Coordinated production and warehouse tasks to sustain daily operations.",
      job7_li2: "Controlled inbound and outbound materials to maintain traceability.",
      job7_li3: "Managed operational documentation in an orderly way.",
      job7_li4: "Supported production supervisors in daily execution.",

      job8_title: "Production Assistant | Productos Termoformados S.R.L.",
      job8_date: "Sep 2013 – Mar 2014",
      job8_desc:
        "Operational and administrative support in production, taking on growing responsibilities in organization and control.",
      job8_li1: "Assisted in coordinating production tasks.",
      job8_li2: "Performed basic inventory and material control.",
      job8_li3: "Supported daily production planning.",
      job8_li4: "Collaborated with supervisors and area leads.",

      job9_title: "Production Operator | Productos Termoformados S.R.L.",
      job9_date: "Mar 2013 – Aug 2013",
      job9_desc:
        "First industrial experiences, performing hands-on operational tasks within production processes.",
      job9_li1: "Operated production lines while meeting quality standards.",
      job9_li2: "Handled and controlled process materials.",
      job9_li3: "Followed procedures and operational standards.",
      job9_li4: "Worked as part of a team in the production area.",

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
        "Training that reinforces my analytical profile, applying knowledge of data, processes and systems in academic projects and personal developments.",

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

      proj_agent_title: "Job Search Agent",
      proj_agent_desc:
        "Python agent that searches job boards, filters by date, area and keywords, avoids duplicates with a per-URL history (vistos.json), classifies opportunities (APPLY/REVIEW/DISCARD) by category and generates monthly Excel reports. The user keeps the final decision to apply.",
      proj_agent_btn: "View code",
      gallery_view: "view screenshots",
      gal_resumen_t: "Agent summary report",
      gal_resumen_s: "Totals, verdicts and execution status.",
      gal_todos_t: "Classified job offers",
      gal_todos_s: "View with categories, suggested decision and posting details.",

      proj_gen_title: "Agente Laboral Gen",
      proj_gen_desc:
        "Local application built with Python and Streamlit that analyzes a CV, detects skills and job categories, generates suggested job searches, queries real job listings from Computrabajo and Bumeran, removes duplicates, classifies results, and exports them to Excel.",
      proj_gen_btn: "View code",
      gal_gen1_t: "Main screen",
      gal_gen1_s: "Main screen of Agente Laboral Gen with real search mode and safety status.",
      gal_gen2_t: "CV analysis",
      gal_gen2_s: "Filters and searches generated from the detected profile, with processed job listing metrics.",
      gal_gen3_t: "Real results",
      gal_gen3_s: "Real Computrabajo results with deduplication, classification, and metrics.",

      proj1_title: "Sales Orders Dashboard",
      proj1_desc:
        "Interactive Power BI dashboard to track orders, customers and shipping methods, with data modeling and KPIs that give visibility into commercial and operational status.",
      proj1_btn: "View on GitHub",

      proj2_title: "Animal Therapy",
      proj2_desc:
        "Institutional website focused on services, with an emphasis on a clear user experience and simple navigation for visitors.",
      proj2_btn: "View Site",

      proj3_title: "Eureka Web Design",
      proj3_desc:
        "Educational platform with responsive design and section-based navigation, built for comfortable reading on any device.",
      proj3_btn: "View Site",

      proj_auto_title: "Instagram → WhatsApp Automation",
      proj_auto_desc:
        "No-code automation system that replies to Instagram comments and routes inquiries to WhatsApp, simplifying support and speeding up the first contact with the customer.",
      proj_auto_btn: "View documentation",
      chip_ig: "Instagram Business",
      chip_manychat: "ManyChat",
      chip_wa: "WhatsApp Business",
      chip_nocode: "No-Code",

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
      nav_skills: "Competenze",
      nav_experience: "Esperienza",
      nav_projects: "Progetti",
      nav_contact: "Contatto",

      home_greeting: "Ciao, sono",
      home_subtitle: "Analista di Dati | Sviluppatore Web | Supply Chain",
      home_line1: "Trasformo processi e dati in soluzioni digitali chiare, ordinate e orientate al supporto decisionale.",
      home_line2:
        "Oltre 8 anni di esperienza in Supply Chain e produzione, uniti a una formazione tecnica in Ingegneria Informatica, analisi dei dati, automazione e sviluppo web.",
      home_cv: "Scarica CV",
      home_contact: "./contatto",
      status_open: "Disponibile per nuove opportunità",
      hero_open: "Open to work · Disponibile",

      skillcat_data: "Data & BI",
      skillcat_dev: "Sviluppo",
      skillcat_ops: "Operazioni",
      skill_scm_chip: "Supply Chain",
      skill_plan_chip: "Pianificazione",
      skill_report_chip: "Reporting",
      skill_improve_chip: "Miglioramento processi",
      exp_prev: "Esperienza industriale precedente (2013 – 2017)",

      badge_data: "📊 Data Analyst",
      badge_web: "💻 Sviluppatore Web",
      badge_scm: "📦 Supply Chain",

      stat_years: "Anni di esperienza professionale",
      stat_roles: "Ruoli in Supply Chain e Produzione",
      stat_certs: "Certificazioni tecniche",
      stat_langs: "Lingue (ES / EN / IT)",

      skills_title: "Competenze",
      skill_sql: "SQL",
      skill_powerbi: "Power BI",
      skill_python: "Python",
      skill_excel: "Excel Avanzato",
      skill_web: "HTML / CSS / JavaScript",
      skill_scm: "Gestione Supply Chain",

      about_title: "Chi sono",
      about_p1:
        "Professionista con oltre 8 anni di esperienza in Supply Chain, produzione e analisi dei dati, attualmente studente di Ingegneria Informatica. Unisco una solida base operativa a strumenti tecnici per ordinare i processi, dare visibilità alle informazioni e facilitare il processo decisionale.",
      about_p2:
        "Lavoro con SQL, Power BI, Excel avanzato, Python e tecnologie web (HTML, CSS, JavaScript). Porto pensiero analitico, autonomia e una mentalità di miglioramento continuo nei processi amministrativi, di pianificazione e approvvigionamento.",
      about_code_comment: "// profilo professionale",
      about_code_experience: "\"+8 anni in Supply Chain, produzione e dati\"",
      about_code_focus: "\"automazione, dashboard, decisioni basate sui dati\"",
      about_code_learning: "\"Ingegneria Informatica @ UADE\"",

      exp_title: "Esperienza e Formazione",
      exp_work: "Esperienza Lavorativa",
      exp_edu: "Formazione",

      job1_title: "Master Planner | Galileo Technologies S.A.",
      job1_date: "Feb 2024 – Dic 2025",
      job1_desc:
        "Responsabile della pianificazione end-to-end di domanda e approvvigionamento, collegando le informazioni tra acquisti, logistica e operations per anticipare i fabbisogni di materiali e sostenere la continuità operativa.",
      job1_li1: "Ho pianificato domanda e approvvigionamento per garantire la disponibilità dei materiali e ridurre il rischio di rotture di stock.",
      job1_li2: "Ho consolidato e analizzato dati da ERP, database ed Excel a supporto delle decisioni operative con informazioni affidabili.",
      job1_li3: "Ho automatizzato e standardizzato report e KPI, dando maggiore visibilità allo stato di approvvigionamento e pianificazione.",
      job1_li4: "Ho coordinato le informazioni tra acquisti, logistica e operations per monitorare gli scostamenti e migliorare la conformità.",
      job1_results:
        "Risultati: maggiore visibilità del flusso materiali, reportistica più rapida e affidabile e migliore anticipazione dei fabbisogni di approvvigionamento.",

      job2_title: "Amministrativo Supply Chain | Galileo Technologies S.A.",
      job2_date: "Gen 2022 – Gen 2024",
      job2_desc:
        "Gestione amministrativa e operativa della supply chain, con focus sulla tracciabilità delle informazioni e sul coordinamento tra aree per sostenere il flusso di ordini e consegne.",
      job2_li1: "Ho gestito e monitorato ordini di vendita e consegne, garantendo tracciabilità amministrativa end-to-end.",
      job2_li2: "Ho organizzato documentazione operativa e controlli amministrativi per mantenere processi ordinati e verificabili.",
      job2_li3: "Ho elaborato e analizzato report operativi per dare visibilità a ordini, inventario e approvvigionamento.",
      job2_li4: "Ho risolto criticità e coordinato informazioni tra aree per sbloccare le operazioni e migliorare i tempi di risposta.",

      job3_title: "Responsabile Supply Chain | Galileo Technologies S.A.",
      job3_date: "Ott 2019 – Dic 2021",
      job3_desc:
        "Gestione end-to-end della supply chain con leadership di team, orientata a ordinare i processi logistici, rafforzare il controllo dell'inventario e migliorare la puntualità delle consegne.",
      job3_li1: "Ho rafforzato il controllo dell'inventario e i livelli di stock per migliorare la disponibilità e ridurre le mancanze.",
      job3_li2: "Ho implementato miglioramenti nei processi logistici per renderli più ordinati, tracciabili ed efficienti.",
      job3_li3: "Ho guidato e coordinato team operativi, allineando priorità e responsabilità.",
      job3_li4: "Ho migliorato la puntualità delle consegne e i lead time tramite un monitoraggio sistematico.",
      job3_results:
        "Risultati: migliore controllo dell'inventario, maggiore visibilità del flusso materiali e processi logistici più ordinati.",

      job4_title: "Supervisore Produzione | Cartones América Argentina S.A.",
      job4_date: "Set 2017 – Set 2019",
      job4_desc:
        "Supervisione end-to-end dell'operatività quotidiana di produzione, con leadership di team numerosi e coordinamento delle risorse per sostenere il rispetto dei piani produttivi.",
      job4_li1: "Ho supervisionato team da 10 a 30 persone per turno, organizzando attività e priorità.",
      job4_li2: "Ho garantito il rispetto dei piani produttivi tramite un monitoraggio operativo continuo.",
      job4_li3: "Ho risolto criticità operative in tempo reale per ridurre al minimo le interruzioni.",
      job4_li4: "Ho monitorato i KPI di produttività per sostenere il rendimento del turno.",
      job4_li5: "Ho coordinato le informazioni con logistica, manutenzione e amministrazione per un'operatività allineata.",
      job4_results:
        "Risultati: rispetto costante dei piani produttivi, un'operatività più ordinata e team meglio coordinati.",

      job5_title: "Programmatore Produzione | Cartones América Argentina S.A.",
      job5_date: "Gen 2017 – Ago 2017",
      job5_desc:
        "Pianificazione e programmazione della produzione, coordinando risorse, priorità e tempi di lavorazione per sostenere il flusso operativo.",
      job5_li1: "Ho programmato le linee di produzione organizzando risorse e tempi di lavorazione.",
      job5_li2: "Ho coordinato ordini, consegne e priorità per allineare la produzione alla domanda.",
      job5_li3: "Ho collegato le informazioni con logistica e approvvigionamento per anticipare i fabbisogni.",
      job5_li4: "Ho ordinato e ottimizzato i tempi produttivi del processo.",

      job6_title: "Capo Magazzino | Cartones América Argentina S.A.",
      job6_date: "Set 2015 – Dic 2016",
      job6_desc:
        "Primo ruolo formale di leadership, con responsabilità diretta su inventario, personale e flusso materiali del magazzino.",
      job6_li1: "Ho gestito il magazzino end-to-end e rafforzato il controllo dello stock.",
      job6_li2: "Ho supervisionato il personale operativo, organizzando attività e turni.",
      job6_li3: "Ho organizzato spedizioni e rifornimenti interni per sostenere il flusso materiali.",
      job6_li4: "Ho migliorato ordine, controllo e tracciabilità dei materiali.",

      job7_title: "Assistente Produzione | Cartones América Argentina S.A.",
      job7_date: "Mar 2014 – Ago 2015",
      job7_desc:
        "Supporto alla gestione operativa della produzione e della logistica interna in una realtà di grande scala.",
      job7_li1: "Ho coordinato attività produttive e di magazzino per sostenere l'operatività quotidiana.",
      job7_li2: "Ho controllato entrata e uscita dei materiali per mantenere la tracciabilità.",
      job7_li3: "Ho gestito la documentazione operativa in modo ordinato.",
      job7_li4: "Ho supportato i supervisori di produzione nell'esecuzione quotidiana.",

      job8_title: "Assistente Produzione | Productos Termoformados S.R.L.",
      job8_date: "Set 2013 – Mar 2014",
      job8_desc:
        "Supporto operativo e amministrativo in produzione, con responsabilità crescenti in organizzazione e controllo.",
      job8_li1: "Ho assistito nel coordinamento delle attività produttive.",
      job8_li2: "Ho svolto il controllo base di inventario e materiali.",
      job8_li3: "Ho supportato la pianificazione giornaliera della produzione.",
      job8_li4: "Ho collaborato con supervisori e responsabili di area.",

      job9_title: "Operatore Produzione | Productos Termoformados S.R.L.",
      job9_date: "Mar 2013 – Ago 2013",
      job9_desc:
        "Prime esperienze in ambito industriale, con attività operative dirette nei processi produttivi.",
      job9_li1: "Ho operato su linee di produzione rispettando gli standard di qualità.",
      job9_li2: "Ho gestito e controllato i materiali del processo.",
      job9_li3: "Ho rispettato procedure e standard operativi.",
      job9_li4: "Ho lavorato in squadra all'interno dell'area produttiva.",

      edu1_title: "Ingegneria Informatica | UADE",
      edu1_date: "Mar 2021 – Oggi · In corso",
      edu1_desc1:
        "Percorso orientato allo sviluppo software, all'analisi dei sistemi e al data processing, con forte enfasi su programmazione, database e problem solving.",
      edu1_li1: "Programmazione a oggetti (Java)",
      edu1_li2: "Strutture dati e algoritmi",
      edu1_li3: "Database relazionali e SQL",
      edu1_li4: "Design e modellazione sistemi",
      edu1_li5: "Analisi requisiti e processi",
      edu1_li6: "Sviluppo progetti accademici applicati",
      edu1_desc2:
        "Formazione che rafforza il mio profilo analitico, applicando le competenze su dati, processi e sistemi in progetti accademici e sviluppi personali.",

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

      proj_agent_title: "Agente Cerca Lavoro",
      proj_agent_desc:
        "Agente in Python che cerca offerte di lavoro, filtra per data, zona e parole chiave, evita i duplicati con uno storico per URL (vistos.json), classifica le opportunità (CANDIDARSI/RIVEDERE/SCARTARE) per categoria e genera report Excel mensili. La decisione di candidarsi resta all'utente.",
      proj_agent_btn: "Vedi codice",
      gallery_view: "vedi screenshot",
      gal_resumen_t: "Report riepilogativo dell'agente",
      gal_resumen_s: "Totali, verdetti e stato di esecuzione.",
      gal_todos_t: "Offerte classificate",
      gal_todos_s: "Vista con categorie, decisione suggerita e dati dell'annuncio.",

      proj_gen_title: "Agente Laboral Gen",
      proj_gen_desc:
        "Applicazione locale sviluppata con Python e Streamlit che analizza un CV, rileva competenze e categorie professionali, genera ricerche di lavoro suggerite, consulta offerte reali da Computrabajo e Bumeran, elimina i duplicati, classifica i risultati ed esporta tutto in Excel.",
      proj_gen_btn: "Vedi codice",
      gal_gen1_t: "Schermata principale",
      gal_gen1_s: "Schermata principale di Agente Laboral Gen con modalità di ricerca reale e stato di sicurezza.",
      gal_gen2_t: "Analisi del CV",
      gal_gen2_s: "Filtri e ricerche generate dal profilo rilevato, con metriche delle offerte elaborate.",
      gal_gen3_t: "Risultati reali",
      gal_gen3_s: "Risultati reali di Computrabajo con deduplicazione, classificazione e metriche.",

      proj1_title: "Dashboard Ordini di Vendita",
      proj1_desc:
        "Dashboard interattiva in Power BI per il monitoraggio di ordini, clienti e metodi di spedizione, con modellazione dati e KPI che danno visibilità allo stato commerciale e operativo.",
      proj1_btn: "Vedi su GitHub",

      proj2_title: "Terapia Animal",
      proj2_desc:
        "Sito istituzionale orientato ai servizi, con focus su un'esperienza utente chiara e una navigazione semplice per il visitatore.",
      proj2_btn: "Vedi Sito",

      proj3_title: "Design Web Eureka",
      proj3_desc:
        "Piattaforma educativa con design responsive e navigazione per sezioni, pensata per una lettura comoda su qualsiasi dispositivo.",
      proj3_btn: "Vedi Sito",

      proj_auto_title: "Automazione Instagram → WhatsApp",
      proj_auto_desc:
        "Sistema di automazione no-code che risponde ai commenti su Instagram e indirizza le richieste su WhatsApp, semplificando l'assistenza e velocizzando il primo contatto con il cliente.",
      proj_auto_btn: "Vedi documentazione",
      chip_ig: "Instagram Business",
      chip_manychat: "ManyChat",
      chip_wa: "WhatsApp Business",
      chip_nocode: "No-Code",

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

  let currentLang = "es";

  // helper global: traducir una clave al idioma activo (usado por contenido dinámico, ej. lightbox)
  window.i18nT = function (key) {
    const dict = translations[currentLang] || translations.es;
    return dict[key] || "";
  };

  function applyLanguage(lang) {
    const dict = translations[lang] || translations.es;
    currentLang = translations[lang] ? lang : "es";

    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.dataset.i18n;
      if (dict[key]) el.textContent = dict[key];
    });

    document.querySelectorAll(".lang-switch button").forEach((b) => {
      b.classList.toggle("active", b.dataset.lang === lang);
    });

    // CV según idioma activo
    const cvMap = {
      es: { href: "./cv-es.pdf", name: "CV_Sergio_Andolcetti_ES.pdf" },
      en: { href: "./cv-en.pdf", name: "CV_Sergio_Andolcetti_EN.pdf" },
      it: { href: "./cv-it.pdf", name: "CV_Sergio_Andolcetti_IT.pdf" }
    };
    const cvLink = document.getElementById("cvDownload");
    const cv = cvMap[currentLang] || cvMap.es;
    if (cvLink) {
      cvLink.setAttribute("href", cv.href);
      cvLink.setAttribute("download", cv.name);
    }

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
