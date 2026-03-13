# 🚀 Solución Craft - Sitio Web Profesional

**Sitio web corporativo moderno y responsivo para Solución Craft**

---

## 📋 Descripción del Proyecto

Solución Craft es un sitio web corporativo diseñado para mostrar servicios de desarrollo web y diseño digital.

---

## 📄 Páginas del Sitio

### 🏠 **index.html** - Página Principal
**Ubicación:** `index.html` (líneas 1-300)
- Hero section con llamado a la acción
- Presentación de servicios principales
- Estadísticas y logros
- Testimonios de clientes
- Sección de portfolio

### 👥 **quienes.html** - Sobre Nosotros  
**Ubicación:** `quienes.html` (líneas 1-200)
- Historia de la empresa
- Misión y visión
- Equipo de trabajo
- Valores corporativos

### 🛠️ **servicios.html** - Servicios
**Ubicación:** `servicios.html` (líneas 1-250)
- Catálogo completo de servicios
- Descripción detallada de cada servicio
- Proceso de trabajo
- Precios y paquetes

### 📧 **contacto.html** - Contacto
**Ubicación:** `contacto.html` (líneas 1-350)
- Formulario de contacto funcional
- Información de contacto directa
- Mapa de ubicación
- Horarios de atención

---

## ⚡ Funcionalidades JavaScript

**Ubicación:** `js/main.js` (líneas 1-100)

### 1. **Año Dinámico** - Líneas 8-10
```javascript
const yearEls = document.querySelectorAll('#footer-year');
yearEls.forEach(el => { el.textContent = new Date().getFullYear(); });
```

### 2. **Timestamp Oculto** - Líneas 13-15
```javascript
const ts = document.getElementById('timestamp');
if (ts) ts.value = new Date().toISOString();
```

### 3. **Range Slider Interactivo** - Líneas 18-28
```javascript
const slider = document.getElementById('presupuesto');
const sliderVal = document.getElementById('presupuesto-valor');
// Actualización en tiempo real del valor y progreso
```

### 4. **Validación de Formularios** - Líneas 31-35
```javascript
const form = document.querySelector('.contact-form');
const requiredFields = form.querySelectorAll('[required]');
// Validación en tiempo real
```

---

## 🎨 Sistema de Diseño

**Ubicación:** `css/styles.css` (líneas 1-500)

### 🎨 **Variables CSS** - Líneas 1-20
```css
:root {
  --primary-color: #2563eb;
  --secondary-color: #1e40af;
  --accent-color: #f59e0b;
  /* ... más variables */
}
```

### 📏 **Espaciado** - Líneas 25-35
```css
--sp-xs: 0.5rem;
--sp-sm: 1rem;
--sp-md: 2rem;
/* ... más espaciados */
```

---

## 📚 Temas del Proyecto

### **Tema 1: Estructura Semántica de HTML5**
Uso correcto de las etiquetas estructurales de HTML5 para dar significado al contenido.
📍 **¿Dónde se ve en la página?**
Visible en toda la estructura de la página: el logo y título en la parte superior (header), la barra de navegación (nav), el contenido central (main), las secciones internas, y el pie de página (footer).
📂 **Ubicación en el código:**
| Archivo | Líneas (aprox.) | Qué hace / Qué enseña |
|---------|----------------|----------------------|
| index.html | Líneas 32–44 | `<header class='main-header'>` — contiene logo y título de la marca |
| index.html | Líneas 44–51 | `<nav>` — barra de navegación con los 4 enlaces principales |
| index.html | Líneas 72–469 | `<main>` — todo el contenido principal de la página |
| index.html | Líneas 77–110 | `<section class='hero-section'>` — sección de bienvenida |
| index.html | Líneas 93–110 | `<aside class='hero-stats'>` — estadísticas laterales del hero |
| index.html | Líneas 470–479 | `<footer>` — pie de página con links y copyright |
| quienes.html | Líneas 1–fin | Estructura semántica completa: header, nav, main, sections, footer |
| servicios.html | Líneas 1–fin | Misma estructura replicada para coherencia entre páginas |
| contacto.html | Líneas 1–fin | Incluye `<aside>` adicional con info de contacto e iframe de mapa |

### **Tema 2: Etiquetas Básicas**
Jerarquía de encabezados, párrafos, spans, divs y otros elementos básicos de HTML.
📍 **¿Dónde se ve en la página?**
Los títulos grandes del hero ('Soluciones Digitales Profesionales') son h2. Los títulos de cards son h3. Los párrafos descriptivos usan `<p>`. Las estadísticas ('+100', '5+') combinan `<div>` y `<span>` para estructura y estilo.
📂 **Ubicación en el código:**
| Archivo | Líneas (aprox.) | Qué hace / Qué enseña |
|---------|----------------|----------------------|
| index.html | Línea 38 | `<h1>` — nombre de la marca 'Solución Craft' en el header |
| index.html | Líneas 83–87 | `<h2>` — título principal del hero con `<em>` para cursiva estilística |
| index.html | Línea 88 | `<p class='lead'>` — párrafo destacado de introducción |
| index.html | Líneas 94–110 | `<div class='stat-card'>` con `<div class='num'>` y `<div class='lbl'>` |
| index.html | Líneas 122–178 | `<h3>` en cada card, `<p>` para descripción, `<dl><dt><dd>` en tecnologías |
| index.html | Líneas 191–213 | `<blockquote>` y `<cite>` en la sección parallax |
| todos | Líneas 10–30 | `<meta>` tags en `<head>`: charset, description, viewport, og:title |

### **Tema 3: Imágenes, Listas y Enlaces**
Uso de `<img>`, `<picture>`, `<figure>`, `<figcaption>`, listas ul/ol/dl y enlaces `<a>`.
📍 **¿Dónde se ve en la página?**
El logo circular en el header usa `<img>`. La galería de 3 fotos usa `<figure>` con `<figcaption>` debajo. Las cards tienen listas con viñetas. Los enlaces de navegación, footer y el botón CTA son etiquetas `<a>`.
📂 **Ubicación en el código:**
| Archivo | Líneas (aprox.) | Qué hace / Qué enseña |
|---------|----------------|----------------------|
| index.html | Línea 36 | `<img src='assets/img/logo.jpeg' alt='...'>` — logo con texto alternativo |
| index.html | Líneas 244–262 | `<picture>` con `<source media=''>` para imagen responsive de la galería |
| index.html | Líneas 244–263 | `<figure class='gallery-item'>` + `<figcaption>` en las 3 fotos del portfolio |
| index.html | Líneas 122–134 | `<ul><li>` — lista no ordenada de tecnologías en la primera card |
| index.html | Líneas 135–147 | `<ol><li>` — lista ordenada del proceso de desarrollo en la segunda card |
| index.html | Líneas 163–178 | `<dl><dt><dd>` — lista de definición para Frontend/Backend/Herramientas |
| index.html | Líneas 44–51 | `<a href='...'>` — 4 enlaces de navegación principal |
| index.html | Línea 91 | `<a href='contacto.html' class='hero-cta'>` — botón CTA principal |
| index.html | Líneas 487–501 | `<a href='mailto:'>` y `<a href='tel:'>` en columnas del footer |
| contacto.html | Líneas 95–130 | `<ul class='form-info-list'>` — lista de beneficios con íconos |

### **Tema 4: Introducción a CSS**
Sintaxis CSS básica, selectores, reglas, variables CSS (custom properties) y enlace externo.
📍 **¿Dónde se ve en la página?**
Todo el diseño visual: colores, fuentes, espaciados y efectos son controlados por CSS. El archivo styles.css define primero todas las variables de diseño (:root) y luego las aplica a cada elemento.
📂 **Ubicación en el código:**
| Archivo | Líneas (aprox.) | Qué hace / Qué enseña |
|---------|----------------|----------------------|
| css/styles.css | Líneas 1–9 | Comentario de cabecera y @import de Google Fonts |
| css/styles.css | Líneas 10–47 | `:root { }` — bloque de variables CSS con todos los tokens de diseño |
| css/styles.css | Líneas 49–57 | Reset universal: `* { margin:0; padding:0; box-sizing:border-box; }` |
| css/styles.css | Líneas 58–66 | Estilos de scrollbar con `::-webkit-scrollbar` |
| todos los HTML | Líneas 14–16 | `<link rel='stylesheet' href='css/styles.css'>` — CSS externo enlazado |
| todos los HTML | Líneas 15–17 | `<link rel='stylesheet' href='css/responsive.css'>` — segundo CSS externo |

### **Tema 5: Las Propiedades CSS más Utilizadas**
color, background, font, margin, padding, border, display, position, overflow, filter, object-fit.
📍 **¿Dónde se ve en la página?**
Cada elemento visual de la página aplica estas propiedades: el logo usa filter:grayscale, las cards usan display:grid, los videos usan object-fit:cover, los overlays de la galería usan opacity y rgba.
📂 **Ubicación en el código:**
| Archivo | Líneas (aprox.) | Qué hace / Qué enseña |
|---------|----------------|----------------------|
| css/styles.css | Línea 94 | `filter: grayscale(100%) contrast(1.1)` — logo en escala de grises |
| css/styles.css | Líneas 401–411 | `video { filter: grayscale(100%); object-fit: cover; }` |
| css/styles.css | Líneas 437–449 | `iframe { filter: grayscale(100%); }` + hover para ver en color |
| css/styles.css | Líneas 471–480 | `img { filter: grayscale(100%) contrast(1.1); }` en galería |
| css/styles.css | Líneas 68–84 | header: padding, display, align-items, position:sticky, box-shadow |
| css/styles.css | Líneas 260–270 | features-section: padding, border-bottom, background |

### **Tema 6: Creación de un Favicon**
Configuración completa del favicon con múltiples tamaños y webmanifest.
📍 **¿Dónde se ve en la página?**
No visible en el contenido, pero sí en la pestaña del navegador: aparece el ícono de Solución Craft. En móviles, al guardar como acceso directo, usa los PNG de mayor resolución.
📂 **Ubicación en el código:**
| Archivo | Líneas (aprox.) | Qué hace / Qué enseña |
|---------|----------------|----------------------|
| todos los HTML | Línea 18 | `<link rel='icon' type='image/x-icon' href='assets/img/favicon/favicon.ico'>` |
| todos los HTML | Línea 19 | `<link rel='apple-touch-icon' href='assets/img/favicon/apple-touch-icon.png'>` |
| todos los HTML | Línea 20 | `<link rel='manifest' href='assets/img/favicon/site.webmanifest'>` |
| assets/img/favicon/ | — | favicon.ico, favicon-16x16.png, favicon-32x32.png |
| assets/img/favicon/ | — | android-chrome-192x192.png, android-chrome-512x512.png |
| assets/img/favicon/ | — | apple-touch-icon.png, site.webmanifest |

### **Tema 7: Bordes Redondeados**
Uso de border-radius en botones, tarjetas, imágenes, inputs y contenedores.
📍 **¿Dónde se ve en la página?**
Las tarjetas de características tienen esquinas redondeadas (12px). El logo es perfectamente circular (50%). Los botones tienen un radio pequeño (6px) para un estilo cartoon. Los inputs del formulario también tienen bordes redondeados.
📂 **Ubicación en el código:**
| Archivo | Líneas (aprox.) | Qué hace / Qué enseña |
|---------|----------------|----------------------|
| css/styles.css | Líneas 27–31 | Variables: `--radius-sm:6px`, `--radius-md:12px`, `--radius-lg:20px`, `--radius-xl:40px` |
| css/styles.css | Línea 90 | `.logo { border-radius: 50% }` — logo circular |
| css/styles.css | Líneas 271–282 | `article.card { border-radius: var(--radius-md) }` — cards redondeadas |
| css/styles.css | Líneas 196–202 | `.hero-cta { border-radius: var(--radius-sm) }` — botón CTA |
| css/styles.css | Líneas 536–543 | `inputs { border-radius: var(--radius-sm) }` — campos del formulario |
| css/styles.css | Líneas 705–712 | Clases utilitarias: `.rounded-sm`, `.rounded-md`, `.rounded-lg`, `.rounded-full` |

### **Tema 8: Sombras**
box-shadow estilo cartoon (offset sólido sin difuminado) aplicado a cards, botones, header e inputs.
📍 **¿Dónde se ve en la página?**
Las tarjetas tienen una sombra negra desplazada 5px hacia abajo y derecha, dando efecto 3D cartoon. Al hacer hover, la sombra crece a 8px y la tarjeta se mueve. Los botones tienen el mismo efecto: al presionar, la sombra se reduce simulando que se hunde.
📂 **Ubicación en el código:**
| Archivo | Líneas (aprox.) | Qué hace / Qué enseña |
|---------|----------------|----------------------|
| css/styles.css | Líneas 19–23 | Variables: `--shadow-cartoon:5px 5px 0 #0d0d0d`, `--shadow-hover:8px 8px 0`, `--shadow-pressed:2px 2px 0` |
| css/styles.css | Línea 82 | `.main-header { box-shadow: 0 4px 0 var(--black) }` — sombra del header |
| css/styles.css | Líneas 93–94 | `.logo { box-shadow: 3px 3px 0 var(--black) }` |
| css/styles.css | Líneas 278–279 | `article.card { box-shadow: var(--shadow-cartoon) }` |
| css/styles.css | Líneas 280–281 | `article.card:hover { box-shadow: var(--shadow-hover) }` |
| css/styles.css | Líneas 198–199 | `.hero-cta { box-shadow: var(--shadow-cartoon) }` |
| css/styles.css | Líneas 586–588 | `.btn-primary, .btn-secondary { box-shadow: var(--shadow-cartoon) }` |
| css/styles.css | Líneas 547–549 | `inputs:focus { box-shadow: 4px 4px 0 var(--black) }` |

### **Tema 9: Imágenes de Fondo**
background-image con patrones CSS, background-attachment:fixed para parallax, background-size y background-position.
📍 **¿Dónde se ve en la página?**
El hero negro tiene un patrón de cuadrícula sutil creado con CSS (líneas y columnas semitransparentes). La franja de cita tiene una foto de fondo fija que se queda quieta al hacer scroll (efecto parallax), con un filtro grayscale y un degradado encima.
📂 **Ubicación en el código:**
| Archivo | Líneas (aprox.) | Qué hace / Qué enseña |
|---------|----------------|----------------------|
| css/styles.css | Líneas 148–156 | Hero: background-image con repeating-linear-gradient — patrón de cuadrícula |
| css/styles.css | Líneas 336–344 | `.parallax-strip { background-image: url(Unsplash) }` — foto real |
| css/styles.css | Línea 338 | `background-attachment: fixed` — efecto parallax al hacer scroll |
| css/styles.css | Línea 339 | `background-size: cover` — foto cubre todo el ancho |
| css/styles.css | Línea 340 | `background-position: center` — foto centrada siempre |
| css/styles.css | Línea 342 | `filter: grayscale(100%)` — foto en escala de grises |
| css/responsive.css | Líneas 25–26 | `background-attachment: scroll` en móvil (mejor rendimiento) |

### **Tema 10: Tipografías**
Importación de Google Fonts y aplicación de font-family, font-weight, font-size, line-height, letter-spacing.
📍 **¿Dónde se ve en la página?**
Los títulos grandes ('SOLUCIONES DIGITALES') usan Bebas Neue, una fuente display condensada. El texto de párrafos usa Nunito, redondeada y amigable. Los códigos, badges y el ticker usan Space Mono, monoespaciada para un look técnico.
📂 **Ubicación en el código:**
| Archivo | Líneas (aprox.) | Qué hace / Qué enseña |
|---------|----------------|----------------------|
| css/styles.css | Líneas 7–8 | @import de Google Fonts: Bebas Neue + Nunito + Space Mono |
| css/styles.css | Líneas 32–34 | Variables: `--font-display`, `--font-body`, `--font-mono` |
| css/styles.css | Líneas 101–103 | h1 del header: font-family: var(--font-display), font-size clamp() |
| css/styles.css | Líneas 176–181 | h2 del hero: font-family: var(--font-display), font-size clamp(3rem,8vw,6rem) |
| css/styles.css | Líneas 105–108 | tagline: font-family: var(--font-mono), letter-spacing: 0.1em |
| css/styles.css | Líneas 250–254 | ticker: font-family: var(--font-mono), letter-spacing: 0.15em |
| css/styles.css | Líneas 676–679 | footer brand: font-family: var(--font-display), font-size: 2.2rem |

### **Tema 11: Cajas Flotantes (float)**
float:left, float:right y clearfix con ::after para limpiar flotantes.
📍 **¿Dónde se ve en la página?**
Dentro de la tercera card de la sección de características, hay un círculo negro que flota a la izquierda del texto descriptivo. El texto fluye alrededor del elemento flotante, demostrando el comportamiento de float.
📂 **Ubicación en el código:**
| Archivo | Líneas (aprox.) | Qué hace / Qué enseña |
|---------|----------------|----------------------|
| css/styles.css | Líneas 700–703 | Clases: `.float-demo::after` (clearfix), `.float-left`, `.float-right` |
| css/styles.css | Línea 701 | `.float-demo::after { content:''; display:table; clear:both; }` |
| css/styles.css | Línea 702 | `.float-left { float:left; margin:0 var(--sp-md) var(--sp-sm) 0; }` |
| index.html | Líneas 155–162 | Uso en la tercera card: círculo flotante + párrafo que lo rodea |

### **Tema 12: Centrar el Contenido**
margin-inline:auto con max-width para centrar horizontalmente, y Flexbox para centrado moderno.
📍 **¿Dónde se ve en la página?**
Todo el contenido de la página está contenido en un ancho máximo de 1140px y centrado horizontalmente en pantallas grandes. El hero centra su texto con Flexbox. Los botones del formulario están centrados con justify-content:center.
📂 **Ubicación en el código:**
| Archivo | Líneas (aprox.) | Qué hace / Qué enseña |
|---------|----------------|----------------------|
| css/styles.css | Líneas 60–66 | `.container { max-width:1140px; margin-inline:auto; padding-inline:clamp() }` |
| css/styles.css | Líneas 165–166 | `.hero-inner { display:flex; align-items:center }` — centrado vertical |
| css/styles.css | Líneas 580–581 | `.form-actions { display:flex; gap:var(--sp-sm) }` — botones centrados |
| css/styles.css | Línea 355 | `.parallax-content { text-align:center }` — texto de cita centrado |

### **Tema 13: Flex, Sin Dolor**
display:flex en navegación, hero, cards, ticker, formulario y footer con justify-content, align-items y flex-wrap.
📍 **¿Dónde se ve en la página?**
La barra de navegación alinea los 4 links horizontalmente con Flexbox. El hero distribuye el texto a la izquierda y las estadísticas a la derecha. Las tarjetas de características se distribuyen en una grilla con CSS Grid (versión más moderna de Flex).
📂 **Ubicación en el código:**
| Archivo | Líneas (aprox.) | Qué hace / Qué enseña |
|---------|----------------|----------------------|
| css/styles.css | Líneas 115–118 | `nav { display:flex; align-items:center }` — links en fila |
| css/styles.css | Líneas 68–77 | `.main-header { display:flex; align-items:center; justify-content:space-between }` |
| css/styles.css | Líneas 165–166 | `.hero-inner { display:flex; align-items:center; gap:var(--sp-xl) }` |
| css/styles.css | Líneas 206–208 | `.hero-stats { display:flex; flex-direction:column; gap:var(--sp-sm) }` |
| css/styles.css | Líneas 245–249 | `.ticker-inner { display:inline-flex; gap:var(--sp-xl) }` |
| css/styles.css | Líneas 263–267 | `.features-grid { display:grid; grid-template-columns:repeat(auto-fit,...) }` |
| css/styles.css | Líneas 669–675 | `.footer-grid { display:grid; grid-template-columns:1.5fr 1fr 1fr 1fr }` |

### **Tema 14: Posición de los Elementos (position)**
position:sticky en header/nav, position:absolute en decoraciones y overlays, position:relative como contexto.
📍 **¿Dónde se ve en la página?**
El header y la barra de navegación permanecen fijos en la parte superior al hacer scroll (sticky). El triángulo negro decorativo en la esquina de cada card usa position:absolute. El overlay oscuro de la galería aparece sobre la imagen con position:absolute.
📂 **Ubicación en el código:**
| Archivo | Líneas (aprox.) | Qué hace / Qué enseña |
|---------|----------------|----------------------|
| css/styles.css | Líneas 78–80 | `.main-header { position:sticky; top:0; z-index:1000 }` |
| css/styles.css | Líneas 119–120 | `nav { position:sticky; top:0; z-index:999 }` |
| css/styles.css | Líneas 156–157 | `.hero-section { position:relative; overflow:hidden }` |
| css/styles.css | Líneas 158–163 | `.hero-section::before { position:absolute; top:-80px; right:-80px }` |
| css/styles.css | Líneas 283–290 | `article.card::before { position:absolute; top:0; right:0 }` — triángulo |
| css/styles.css | Líneas 482–489 | `.gallery-overlay { position:absolute; inset:0 }` — overlay de galería |
| css/styles.css | Líneas 438–440 | `.iframe-wrapper { position:relative }` + `iframe { position:absolute; inset:0 }` |

### **Tema 15: Transformaciones (transform)**
transform: translate(), scale(), rotate() en hover de cards, botones, logo e imágenes de galería.
📍 **¿Dónde se ve en la página?**
Al pasar el cursor sobre una card, se mueve 4px hacia arriba-izquierda (translate). Al hacer hover en el logo, rota -5° y crece (rotate + scale). Los botones se mueven al hacer hover y se 'hunden' al hacer clic. Las fotos de la galería hacen zoom al hacer hover.
📂 **Ubicación en el código:**
| Archivo | Líneas (aprox.) | Qué hace / Qué enseña |
|---------|----------------|----------------------|
| css/styles.css | Línea 99 | `.logo:hover { transform: rotate(-5deg) scale(1.08) }` |
| css/styles.css | Líneas 280–281 | `article.card:hover { transform: translate(-4px,-4px) }` |
| css/styles.css | Línea 203 | `.hero-cta:hover { transform: translate(-3px,-3px) }` |
| css/styles.css | Línea 204 | `.hero-cta:active { transform: translate(2px,2px) }` — efecto de pulsación |
| css/styles.css | Líneas 593–595 | `.btn-primary:hover { transform: translate(-3px,-3px) }` |
| css/styles.css | Líneas 478–480 | `.gallery-item:hover img { transform: scale(1.1) }` |
| css/styles.css | Líneas 136–137 | `nav a::after { transform: scaleX(0) }` → hover: `scaleX(1)` — subrayado animado |

### **Tema 16: Formularios**
Formulario completo con todos los tipos de input: text, email, tel, date, time, url, range, select, textarea, checkbox, radio, file, hidden. Fieldsets, legends y validación HTML5.
📍 **¿Dónde se ve en la página?**
El formulario de contacto tiene dos secciones (fieldsets): 'Datos de Contacto' y 'Detalles del Proyecto'. Incluye slider de presupuesto que actualiza su valor en tiempo real, checkboxes para servicios de interés, botones de radio para tipo de proyecto, y validación visual (borde verde/rojo al llenar).
📂 **Ubicación en el código:**
| Archivo | Líneas (aprox.) | Qué hace / Qué enseña |
|---------|----------------|----------------------|
| index.html | Líneas 338–456 | Formulario completo en index.html — sección 'Contacto Rápido' |
| contacto.html | Líneas 137–230 | Formulario extendido en contacto.html — con campo empresa y ciudad |
| css/styles.css | Líneas 494–595 | Todos los estilos del formulario: fieldset, legend, inputs, botones |
| css/styles.css | Líneas 536–552 | Estilos de inputs con focus, válido e inválido |
| css/styles.css | Líneas 553–578 | Range slider personalizado con thumb circular |
| css/styles.css | Líneas 567–579 | Checkboxes y radios con accent-color |
| js/main.js | Líneas 10–16 | Slider de presupuesto: actualiza valor y progreso visual en tiempo real |
| js/main.js | Líneas 18–50 | Validación en tiempo real con checkValidity() y clases CSS |

### **Tema 17: iframe**
Iframes responsivos de YouTube (tutoriales) y Google Maps (ubicación), con filtro grayscale y hover para color.
📍 **¿Dónde se ve en la página?**
En index.html hay un video de YouTube sobre diseño web moderno incrustado. En servicios.html hay otro sobre SEO. En contacto.html hay un mapa de Google Maps mostrando Bogotá. Todos se muestran en escala de grises y al pasar el cursor vuelven a color.
📂 **Ubicación en el código:**
| Archivo | Líneas (aprox.) | Qué hace / Qué enseña |
|---------|----------------|----------------------|
| index.html | Líneas 308–327 | iframe de YouTube: 'Fundamentos de diseño web moderno' |
| servicios.html | Líneas 130–145 | iframe de YouTube: 'SEO y posicionamiento web' |
| contacto.html | Líneas 109–125 | iframe de Google Maps — mapa de Bogotá, Colombia |
| css/styles.css | Líneas 437–449 | `.iframe-wrapper { position:relative; padding-bottom:56.25% }` — ratio 16:9 |
| css/styles.css | Líneas 442–448 | `iframe { position:absolute; inset:0; filter:grayscale(100%) }` |
| css/styles.css | Línea 449 | `.iframe-wrapper:hover iframe { filter:grayscale(0%) }` — hover a color |

### **Tema 18: Transiciones (transition)**
transition en prácticamente todos los elementos interactivos: hover de links, cards, botones, inputs, imágenes y overlays.
📍 **¿Dónde se ve en la página?**
Cada interacción del usuario tiene una animación suave: los links del nav tienen un subrayado que crece desde la izquierda, las cards se elevan suavemente, los inputs del formulario se desplazan al hacer focus, el filtro de los videos e iframes cambia gradualmente.
📂 **Ubicación en el código:**
| Archivo | Líneas (aprox.) | Qué hace / Qué enseña |
|---------|----------------|----------------------|
| css/styles.css | Línea 41 | Variable: `--transition: 0.25s cubic-bezier(0.34,1.56,0.64,1)` |
| css/styles.css | Líneas 96–98 | logo: transition: transform, box-shadow |
| css/styles.css | Líneas 129–131 | nav links: transition: background, color |
| css/styles.css | Líneas 137–139 | nav a::after (subrayado): transition: transform — crece de izquierda a derecha |
| css/styles.css | Líneas 279–282 | cards: transition: transform, box-shadow — elevación al hover |
| css/styles.css | Líneas 408–410 | video: transition: filter — B&W a color al hover |
| css/styles.css | Líneas 447–448 | iframe: transition: filter — B&W a color al hover |
| css/styles.css | Líneas 547–549 | inputs: transition: box-shadow, transform — saltan al focus |
| css/styles.css | Líneas 651–655 | scroll reveal: transition: opacity, transform — fade-in al scroll |

### **Tema 19: Columnas de Texto**
column-count, column-gap y column-rule para distribuir texto en múltiples columnas estilo periódico.
📍 **¿Dónde se ve en la página?**
La sección 'Nuestra Historia' (fondo gris claro) muestra el texto dividido en 3 columnas con una línea separadora entre ellas. En tablet se reduce a 2 columnas y en móvil a 1 columna (responsive).
📂 **Ubicación en el código:**
| Archivo | Líneas (aprox.) | Qué hace / Qué enseña |
|---------|----------------|----------------------|
| css/styles.css | Líneas 315–331 | Bloque completo de `.columns-section` y `.columns-intro` |
| css/styles.css | Línea 325 | `column-count: 3` — tres columnas en escritorio |
| css/styles.css | Línea 326 | `column-gap: var(--sp-lg)` — espacio entre columnas |
| css/styles.css | Línea 327 | `column-rule: 2px solid var(--gray-300)` — línea divisora |
| css/styles.css | Línea 328 | `text-align: justify; hyphens: auto` — texto justificado con guiones |
| css/styles.css | Línea 330 | `break-inside: avoid` — evita cortar párrafos entre columnas |
| css/responsive.css | Líneas 11,37,49 | Media queries: 2 columnas en tablet, 1 columna en móvil |
| index.html | Líneas 185–214 | Uso: sección 'Nuestra Historia' con 5 párrafos distribuidos |

### **Tema 20: Vídeo**
Elemento `<video>` con controls, poster, múltiples `<source>`, y filtro CSS grayscale con hover a color.
📍 **¿Dónde se ve en la página?**
Hay un video incrustado en la sección 'Nuestro Trabajo'. Muestra una miniatura (poster) antes de reproducir. El video se ve en escala de grises; al pasar el cursor vuelve a color. Tiene controles nativos del navegador.
📂 **Ubicación en el código:**
| Archivo | Líneas (aprox.) | Qué hace / Qué enseña |
|---------|----------------|----------------------|
| index.html | Líneas 275–281 | `<video controls poster='URL'><source src='...' type='video/mp4'>` |
| servicios.html | Líneas 116–128 | Segundo video en página de servicios |
| css/styles.css | Líneas 401–411 | `video { width:100%; filter:grayscale(100%); border-radius:...; transition:filter }` |
| css/styles.css | Línea 412 | `video:hover { filter:grayscale(0%) }` — hover a color |

### **Tema 21: Audio**
Elemento `<audio>` con controls y visualizador de onda animado con CSS puro.
📍 **¿Dónde se ve en la página?**
En la sección multimedia hay un visualizador de ondas animado (10 barras que suben y bajan con CSS) sobre fondo negro, seguido del reproductor de audio nativo. Las barras simulan una onda de audio en reproducción.
📂 **Ubicación en el código:**
| Archivo | Líneas (aprox.) | Qué hace / Qué enseña |
|---------|----------------|----------------------|
| index.html | Líneas 292–304 | Bloque completo: `.audio-visual` con `.waveform` + `<audio controls>` |
| index.html | Líneas 292–296 | `<div class='audio-visual'><div class='waveform'>` — visualizador |
| index.html | Líneas 297–298 | 10 `<span>` — cada uno es una barra de la onda con animation-delay diferente |
| index.html | Líneas 298–301 | `<audio controls><source src='...' type='audio/mpeg'>` |
| css/styles.css | Líneas 413–435 | `.audio-visual`, `.waveform` y `.waveform span { animation: waveBar }` |
| css/styles.css | Líneas 422–435 | animation-delay escalonado: 0s, 0.1s, 0.2s ... 0.5s para efecto ola |

### **Tema 22: Transparencias y Degradados**
linear-gradient, radial-gradient, rgba() para transparencias, background-blend-mode y overlays.
📍 **¿Dónde se ve en la página?**
El fondo del hero negro tiene un degradado radial decorativo en la esquina. La franja de cita tiene un overlay degradado negro semitransparente encima de la foto. La sección CTA tiene un degradado diagonal. Los overlays de la galería usan gradient transparente para texto legible.
📂 **Ubicación en el código:**
| Archivo | Líneas (aprox.) | Qué hace / Qué enseña |
|---------|----------------|----------------------|
| css/styles.css | Líneas 158–163 | `.hero::before { background: radial-gradient(circle, ...) }` — halo decorativo |
| css/styles.css | Líneas 349–354 | `.parallax-strip::before { background: linear-gradient(135deg, rgba(0,0,0,0.8)...) }` |
| css/styles.css | Líneas 598–621 | `.cta-strip { background: linear-gradient(135deg, black 0%, gray 50%, ...) }` |
| css/styles.css | Líneas 607–612 | `.cta-strip::before { repeating-linear-gradient diagonal semitransparente }` |
| css/styles.css | Líneas 484–486 | `.gallery-overlay { background: linear-gradient(to top, rgba(0,0,0,0.75)...) }` |
| css/styles.css | Líneas 150–156 | Hero hero-section: repeating-linear-gradient para patrón de cuadrícula |

### **Tema 23: Animaciones (animation)**
@keyframes para: heroSlideUp (entrada del hero), waveBar (onda de audio), pulse (CTA pulsante), marquee (ticker), fadeInUp y scroll reveal con IntersectionObserver.
📍 **¿Dónde se ve en la página?**
Al cargar la página, el título, párrafo y botón del hero aparecen deslizándose desde abajo en secuencia (staggered). El ticker superior se desplaza indefinidamente. Las barras de audio suben y bajan. Al hacer scroll, las secciones aparecen con fade-in. El texto del CTA late suavemente.
📂 **Ubicación en el código:**
| Archivo | Líneas (aprox.) | Qué hace / Qué enseña |
|---------|----------------|----------------------|
| css/styles.css | Líneas 623–647 | Todos los @keyframes definidos |
| css/styles.css | Línea 625 | `@keyframes heroSlideUp` — opacity:0 + translateY(40px) → visible |
| css/styles.css | Línea 629 | `@keyframes waveBar` — scaleY(0.4) → scaleY(1) para onda de audio |
| css/styles.css | Línea 633 | `@keyframes pulse` — opacity 1 → 0.75 → 1 para CTA pulsante |
| css/styles.css | Línea 636 | `@keyframes marquee` — translateX(0) → translateX(-50%) para ticker |
| css/styles.css | Líneas 181–183 | h2 del hero: animation: heroSlideUp 0.9s both |
| css/styles.css | Líneas 186–188 | lead: animation: heroSlideUp con delay 0.15s |
| css/styles.css | Líneas 200–201 | .hero-cta: animation: heroSlideUp con delay 0.3s |
| css/styles.css | Líneas 206–207 | .hero-stats: animation: heroSlideUp con delay 0.45s |
| css/styles.css | Líneas 247–248 | .ticker-inner: animation: marquee 22s linear infinite |
| css/styles.css | Líneas 617–618 | .cta-strip h2: animation: pulse 3s ease-in-out infinite |
| css/styles.css | Líneas 648–655 | Clase .reveal + .visible para scroll reveal |
| js/main.js | Líneas 55–70 | IntersectionObserver — agrega clase .visible al hacer scroll |

---

## �🚀 Cómo Ejecutar el Proyecto

### 📋 **Requisitos Previos**
- Navegador web moderno
- Servidor web local (opcional)

### 🏃‍♂️ **Ejecución con Python**
```bash
# Clonar repositorio
git clone https://github.com/ingknarg32/IngenieriaWeb.git
cd IngenieriaWeb

# Iniciar servidor
py -m http.server 8000

# Abrir en navegador
http://localhost:8000
```

---

## 📱 Compatibilidad

### 🖥️ **Desktop**
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

### 📱 **Móvil**
- ✅ iOS Safari 14+
- ✅ Chrome Mobile 90+

---

## 🔧 Personalización

### 🎨 **Modificar Colores**
Editar en `css/styles.css` (líneas 1-20)

### 📧 **Configurar Email**
Editar en `contacto.html` (líneas 80-85)

### 🖼️ **Cambiar Assets**
Reemplazar archivos en carpeta `assets/`

---

## 🚀 Despliegue

### 🌐 **GitHub Pages**
1. Settings → Pages
2. Deploy from branch: main
3. Guardar y esperar

### 🔥 **Netlify**
1. Conectar cuenta GitHub
2. Seleccionar repositorio
3. Deploy automático

---

## 🤝 Contribución

1. Fork del proyecto
2. Crear rama feature
3. Commit cambios
4. Pull Request

---

## 📄 Licencia

MIT License

---

## 👥 Autor

**Solución Craft**
- 📧 contacto@solucioncraft.com
- 🌐 https://github.com/ingknarg32/IngenieriaWeb

---

*Última actualización: 2024*
