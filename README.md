# Nanae - Sitio Web Oficial 🎵✨

Este proyecto es el sitio web oficial o portafolio de **Nanae**, artista y compositora chilena independiente. Diseñado meticulosamente con una estética Y2K oscura, sirve como plataforma central interactiva para presentar su biografía, últimos lanzamientos musicales, videoclips oficiales y su equipo de trabajo. 

---

## 🚀 Características Principales

- **Estética Y2K y Modern Glassmorphism:** Interfaz inmersiva enfocada en tonos oscuros, con tipografías impactantes ("Syncopate" y "Sarina"), bordes neón dinámicos y fondos esmerilados (Glassmorphism).
- **Animaciones al Bajar (Scroll Reveal):** Desarrollado con `IntersectionObserver` puramente en Javascript, revelando el contenido suavemente (con fade-ups, fade-lefts) a medida que el usuario inspecciona la pantalla.
- **Carrusel Horizontal Táctil Automático:** Una tarjeta de discografía deslizable (scroll horizontal), que también incluye controles laterales para usuarios de escritorio.
- **Audífonos Puestos / Reproducción Multimedia:** Enlaces directos a plataformas principales (Spotify, Apple Music, YouTube Music, Deezer) y reproductores de video (`iframes` de YouTube) listos en el sitio.
- **SEO Orgánico y Estructuración (JSON-LD):** Incluye etiquetas Open Graph (redes sociales), Twitter Cards, y metadatos estructurados (`application/ld+json` para _MusicGroup_), posibilitando alta integración en Google Search.
- **Optimización de Renderizado:** Aplica propiedades avanzadas de CSS como `content-visibility: auto` y `will-change` para posponer el pintado gráfico de elementos no visibles y disparar 60fps constantes.

---

## 🛠️ Stack Tecnológico

Este proyecto, buscando el máximo rendimiento y menor carga posible, renuncia a frameworks pesados de JavaScript y se cimenta exclusivamente en lo nativo moderno, impulsado por *Tailwind CSS*.

* **Estructura Front-end:** HTML5 (Semántico)
* **Diseño / Utilidades CSS:** Tailwind CSS v3.4 (NPM/CLI)
* **Estilos Core / Tipografías:** Vanilla CSS3 (`styles.css`) para variables, fuentes (*Space Grotesk*, *Syncopate*), animaciones de scroll e iluminaciones neón (*glows* y *shadows* direccionales).
* **Lógica UI Interaccional:** Vanilla JavaScript ES6+ (`main.js`) 

---

## 📂 Arquitectura del Proyecto

```text
nanae-web/
├── index.html               # Archivo base (Single Page) conteniendo todo el contenido y layout
├── package.json             # Manifiesto de scripts de NodeJS (npm) y la dependencia de Tailwind
├── tailwind.config.js       # Archivo de configuración central de Tailwind CSS
├── css/                     # Hojas de estilo
│   ├── tailwind.input.css   # Punto de entrada para Tailwind (directivas @tailwind)
│   ├── tailwind.css         # CSS construido para Producción (Auto-generado)
│   └── styles.css           # Clases CSS personalizadas puras, animaciones y fonts
├── js/                      # Lógica
│   └── main.js              # Controlador de navbar, carrusel y animaciones (IntersectionObserver)
└── assets/                  
    └── img/                 # Álbumes, banners y vectores WebP ultra comprimidos
```
