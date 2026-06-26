# 🚀 Dossier de Nanae

![HTML](https://img.shields.io/badge/html-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![CSS](https://img.shields.io/badge/css-%231572B6.svg?style=for-the-badge&logo=css&logoColor=white) ![Tailwind CSS](https://img.shields.io/badge/tailwind_css-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-%23F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black)

> **Sitio web oficial de Nanae, artista y compositora chilena independiente. Una experiencia web retro-futurista e inmersiva para explorar su música, videos y arte visual.**

---

## ▶️ Live Preview

**🔗 [Visitar Sitio Web](https://nanae.cl)**

---

## 📋 Tabla de Contenidos

- [🔍 ¿Qué es este proyecto?](#-qué-es-este-proyecto)
- [✨ Características Principales](#-características-principales)
- [🛠️ Tecnologías Utilizadas](#-tecnologías-utilizadas)
- [🎨 Estilo y Diseño](#-estilo-y-diseño)
- [📁 Estructura del Proyecto](#-estructura-del-proyecto)
- [🚀 Requisitos e Instalación](#-requisitos-e-instalación)
- [📦 Scripts y Comandos](#-scripts-y-comandos)
- [🌐 Despliegue](#-despliegue)
- [📧 Contacto](#-contacto)

---

## 🔍 ¿Qué es este proyecto?

Este proyecto es el sitio web oficial y portafolio musical de **Nanae**, una artista y compositora independiente de Chile. La aplicación web sirve como punto de encuentro centralizado para su comunidad y prensa, ofreciendo una experiencia inmersiva para descubrir su música, videoclips oficiales, presentaciones acústicas, y una galería de sus sesiones de fotos.

---

## ✨ Características Principales

- **Discografía Interactiva y Adaptable:** Carrusel de canciones horizontal diseñado para ofrecer un control de desplazamiento fluido tanto mediante interacciones táctiles en móviles como a través de botones de navegación inteligente en computadores de escritorio.
- **Portafolio Audiovisual y Acústicos:** Integración optimizada de reproductores de video responsivos (YouTube embeds) para videoclips oficiales y sesiones en acústico.
- **Animaciones y Rendimiento Optimizado:** Uso de `Intersection Observer` para aplicar efectos de aparición y transición coordinados (_fade-in sections_) cuando los elementos entran en pantalla, combinado con la propiedad `content-visibility: auto` para mejorar el rendimiento del dibujado del navegador en secciones no visibles.
- **Sección de Equipo y Contacto:** Presentación del equipo creativo del proyecto y botones de contacto rápido para contratación (_booking_) y colaboraciones directas.

---

## 🛠️ Tecnologías Utilizadas

### Frontend (Interfaz de Usuario)

- **Core:** HTML5 Semántico y JavaScript (Vanilla JS moderno y ligero, sin dependencias de frameworks).
- **Estilos:** Tailwind CSS v3.4.17 (para maquetación responsiva rápida) y CSS3 puro (`css/styles.css` para fuentes importadas, efectos de sombras con brillo neón y texturas tridimensionales en títulos).
- **Íconos:** FontAwesome Icons v6.5.1 (cargados mediante CDN de alto rendimiento).
- **SEO & Metadatos:** Metatags SEO detallados, etiquetas Open Graph (para redes sociales) y estructuración de datos JSON-LD bajo el estándar de Schema.org para el tipo `MusicGroup`.

---

## 🎨 Estilo y Diseño

El sitio web adopta una estética inmersiva de corte retro-futurista con influencias Y2K y neón cyberpunk. Se caracteriza por el uso de relieves 3D texturizados en títulos y un efecto de vidrio esmerilado que aporta profundidad visual al contenido.

### Paleta de Colores

| Color                | Hexadecimal | Uso principal                                    |
| :------------------- | :---------- | :----------------------------------------------- |
| **Primario**         | `#02040A`   | Fondo principal del sitio y bases de tarjetas.   |
| **Secundario**       | `#0A1945`   | Gradiente superior del fondo para efecto radial. |
| **Acento/Alerta**    | `#38BDF8`   | Resplandores neón, bordes interactivos y hover.  |
| **Texto Base**       | `#EDF0E4`   | Títulos principales y tipografía destacada.      |
| **Texto Secundario** | `#CBD5E1`   | Párrafos generales y descripciones breves.       |

### Tipografía

- **Títulos (Manuscrito):** `Sarina` (cursiva).
- **Títulos (Y2K / Futurista):** `Syncopate` (sans-serif de ancho expandido).
- **Cuerpo de texto:** `Space Grotesk` (sans-serif moderna de alta legibilidad).

---

## 📁 Estructura del Proyecto

```text
📂 nanae-web
 ┣ 📂 assets              # Recursos multimedia.
 ┃ ┗ 📂 img               # Portadas de sencillos, fotos de prensa, avatares del equipo y logos.
 ┣ 📂 css                 # Hojas de estilo del sitio.
 ┃ ┣ 📜 styles.css        # Reglas personalizadas, fuentes, efectos de neón y animaciones.
 ┃ ┣ 📜 tailwind.css      # Estilos compilados y optimizados de Tailwind.
 ┃ ┗ 📜 tailwind.input.css # Archivo de entrada para compilar Tailwind.
 ┣ 📂 js                  # Código lógico interactivo.
 ┃ ┗ 📜 main.js           # Efecto de navbar, observador de scroll y lógica de carruseles.
 ┣ 📜 index.html          # Estructura principal y contenido indexable del sitio.
 ┣ 📜 package.json        # Archivo de configuración de dependencias de desarrollo y scripts.
 ┣ 📜 tailwind.config.js  # Reglas y configuraciones de personalización de Tailwind.
 ┗ 📜 TEMPLATE_README.md  # Plantilla original de referencia.
```

---

## 🚀 Requisitos e Instalación

Para ver el sitio web localmente o realizar modificaciones a los archivos de estilos con Tailwind CSS, asegúrate de tener instalado [Node.js](https://nodejs.org/).

1. **Clona el repositorio** en tu máquina local:
   ```bash
   git clone https://github.com/melitacruces/nanae-web.git
   ```
2. **Entra en el directorio** del proyecto:
   ```bash
   cd nanae-web
   ```
3. **Instala las dependencias** de desarrollo (Tailwind CSS):
   ```bash
   npm install
   ```

---

## 📦 Scripts y Comandos

El proyecto incluye scripts configurados en el archivo `package.json` para facilitar la edición de estilos:

- **Compilar en tiempo de desarrollo (Watch):**
  Monitorea los cambios realizados en el archivo de entrada `css/tailwind.input.css` y compila de forma automática el archivo final `css/tailwind.css`:

  ```bash
  npm run watch:css
  ```

- **Compilar para producción (Build):**
  Compila y minifica el código CSS final de Tailwind para optimizar la velocidad de carga de la página en producción:
  ```bash
  npm run build:css
  ```

---

## 🌐 Despliegue

Dado que se trata de un sitio web estático (compuesto únicamente de archivos `html`, `css`, `js` y `assets`), el despliegue es sumamente sencillo. Se puede alojar de manera gratuita o de bajo costo en múltiples plataformas modernas:

1. **GitHub Pages:** Habilitando la rama principal en los ajustes del repositorio.
2. **Vercel / Netlify / Cloudflare Pages:** Conectando el repositorio de GitHub y seleccionando el directorio raíz.
3. **Servidor Web Tradicional (Apache / Nginx):** Copiando todos los archivos de la carpeta raíz al directorio público del servidor.

---

## 📧 Contacto

Si tienes alguna pregunta o deseas colaborar en algún proyecto, no dudes en ponerte en contacto:

- **Nombre:** Luis Andrés Melita Cruces
- **Email:** [melitacruces@gmail.com](mailto:melitacruces@gmail.com)
- **LinkedIn:** [linkedin.com/in/melitacruces](https://linkedin.com/in/melitacruces)
- **GitHub:** [github.com/melitacruces](https://github.com/melitacruces)
- **Ubicación:** Concepción, Chile
