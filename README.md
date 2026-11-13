# Portfolio — Sergio Nicolás Andolcetti

Sitio personal publicado en **[andol.dev](https://andol.dev)**.
Perfil híbrido: análisis de datos, automatización y desarrollo web, con experiencia en Supply Chain y procesos.

Sitio estático, sin build ni dependencias: HTML + CSS + JavaScript vanilla, con estética terminal y contenido en español, inglés e italiano.

## Estructura

```text
.
├── index.html          # Única página; el texto por defecto está en español
├── css/styles.css      # Estilos (tokens de color y tipografía en :root)
├── js/
│   ├── i18n.js         # Traducciones ES / EN / IT — fuente de verdad de los textos
│   ├── main.js         # Navegación, typewriter del hero, filtros, lightbox, copiar
│   ├── matrix.js       # Fondo animado (se desactiva con prefers-reduced-motion)
│   └── reveal.js       # Aparición de elementos al hacer scroll
├── img/                # Capturas (WebP), portadas (SVG), favicon, imagen para redes
├── Certificados/       # Certificados enlazados desde la sección Formación
├── cv-es.pdf · cv-en.pdf · cv-it.pdf   # El botón "Descargar CV" sigue el idioma activo
├── robots.txt · sitemap.xml
└── README.md
```

## Correrlo en local

No hay nada que instalar. Cualquier servidor estático sirve:

```bash
python -m http.server 8000
```

Y abrir <http://localhost:8000>.

## Cómo editar contenido

**Textos.** Todo texto visible lleva un atributo `data-i18n="clave"`. Al cargar, `js/i18n.js` reemplaza el contenido según el idioma elegido, así que un cambio de texto se hace en **dos lugares**:

1. `js/i18n.js` → la clave en los tres bloques (`es`, `en`, `it`). Es lo que se ve en pantalla.
2. `index.html` → el texto por defecto en español (lo que ven buscadores y navegadores sin JS).

Si solo se edita `index.html`, el cambio no se ve: `i18n.js` lo pisa al cargar.

**Agregar un proyecto.**

1. Copiar un bloque `<article class="proj-card" data-cat="…">` en `index.html`.
   `data-cat` define el filtro: `web`, `auto`, `data` o `desktop`.
2. Agregar las claves `proj_<nombre>_title` y `proj_<nombre>_desc` en los tres idiomas.
3. Imagen en `img/` (WebP, ~1440 px de ancho). Para abrir una galería al hacer clic, usar el botón `.proj-media` con `data-gallery` (ver los proyectos existentes).

**Caché.** Los `<link>` y `<script>` llevan `?v=N`. Al cambiar CSS o JS, subir ese número en `index.html` para que los navegadores bajen la versión nueva.

## Publicación

El remoto es `github.com/S-Andol/Portfolio` (rama `main`). El sitio público se sirve desde el servidor propio en `andol.dev`.

## Créditos

- Tipografías: [JetBrains Mono](https://www.jetbrains.com/lp/mono/) y [Poppins](https://fonts.google.com/specimen/Poppins), vía Google Fonts.
- Íconos de contacto: trazos basados en [Feather](https://feathericons.com/) (MIT).
