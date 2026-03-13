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

## 📚 Temas del Proyecto (Exactos de la Imagen)

Aquí se detallan los 21 temas exactos mostrados en la imagen y su ubicación en el código:

### **Tema 1: Estructura semántica de HTML5**
**Ubicación:** Todos los archivos HTML (líneas 1-50)
- `index.html` - Uso de `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`
- `contacto.html` - Estructura semántica completa

### **Tema 2: Etiquetas básicas**
**Ubicación:** Todos los archivos HTML (líneas 1-100)
- `<h1>` a `<h6>` para jerarquía de contenido
- `<p>`, `<span>`, `<div>` para estructura básica

### **Tema 3: Imágenes, listas y enlaces**
**Ubicación:** Todos los archivos HTML
- `index.html` - Logo y imágenes de portfolio
- `contacto.html` (líneas 80-120) - Listas de información de contacto
- Todos los archivos HTML (líneas 20-30) - Enlaces de navegación

### **Tema 4: Introducción a CSS**
**Ubicación:** `css/styles.css` (líneas 1-50)
- Sintaxis CSS básica
- Selectores fundamentales
- Estructura de reglas CSS

### **Tema 5: Las propiedades CSS más utilizadas**
**Ubicación:** `css/styles.css` (líneas 50-150)
- `color`, `background-color`, `font-size`
- `margin`, `padding`, `border`
- `display`, `position`

### **Tema 6: Creación de un favicon**
**Ubicación:** `assets/img/favicon/` y todos los archivos HTML (líneas 10-15)
- `favicon.ico`, `favicon-16x16.png`, `favicon-32x32.png`
- `apple-touch-icon.png`, `android-chrome-192x192.png`
- `site.webmanifest` para configuración

### **Tema 7: Bordes redondeados**
**Ubicación:** `css/styles.css` (líneas 200-250)
- `border-radius` para elementos redondeados
- Aplicación a botones, tarjetas y contenedores

### **Tema 8: Sombras**
**Ubicación:** `css/styles.css` (líneas 250-300)
- `box-shadow` para sombras de contenedores
- `text-shadow` para sombras de texto

### **Tema 9: Imágenes de fondo**
**Ubicación:** `css/styles.css` (líneas 300-350)
- `background-image` para imágenes de fondo
- `background-size`, `background-position`
- `background-repeat` para control de repetición

### **Tema 10: Tipografías**
**Ubicación:** `css/styles.css` (líneas 350-400)
- `font-family`, `font-weight`, `font-style`
- `line-height`, `letter-spacing`
- Importación de fuentes web

### **Tema 11: Cajas flotantes (float)**
**Ubicación:** `css/styles.css` (líneas 400-450)
- `float: left`, `float: right`
- `clear: both` para limpiar flotantes
- Layouts basados en float

### **Tema 12: Centrar el contenido**
**Ubicación:** `css/styles.css` (líneas 450-500)
- `margin: 0 auto` para centrar horizontalmente
- `text-align: center` para centrar texto
- Flexbox para centrado moderno

### **Tema 13: Flex, sin dolor**
**Ubicación:** `css/styles.css` (líneas 500-550)
- `display: flex`
- `justify-content`, `align-items`
- `flex-direction`, `flex-wrap`

### **Tema 14: Posición de los elementos (position)**
**Ubicación:** `css/styles.css` (líneas 550-600)
- `position: relative`, `position: absolute`
- `position: fixed`, `position: static`
- `top`, `right`, `bottom`, `left`

### **Tema 15: Transformaciones (transform)**
**Ubicación:** `css/styles.css` (líneas 600-650)
- `transform: scale()`, `transform: rotate()`
- `transform: translate()`, `transform: skew()`
- Transiciones con transform

### **Tema 16: Formularios**
**Ubicación:** `contacto.html` (líneas 150-300) y `css/styles.css` (líneas 650-700)
- Formulario de contacto completo
- Estilos para inputs, selects, textareas
- Validación HTML5 y CSS

### **Tema 17: iframe**
**Ubicación:** `contacto.html` (líneas 200-220)
- Mapa de ubicación con iframe
- Integración de contenido externo
- Responsive iframe

### **Tema 18: Transiciones (transition)**
**Ubicación:** `css/styles.css` (líneas 700-750)
- `transition: all 0.3s ease`
- `transition-property`, `transition-duration`
- Efectos hover suaves

### **Tema 19: Columnas de texto**
**Ubicación:** `css/styles.css` (líneas 750-800)
- `column-count`, `column-gap`
- `column-rule` para separadores
- Diseño de texto en columnas

### **Tema 20: Vídeo**
**Ubicación:** `index.html` (líneas 270-280)
- Elemento `<video>` con controles
- `poster` para imagen de preview
- Formatos MP4 compatibles

### **Tema 21: Audio**
**Ubicación:** `index.html` (líneas 290-300)
- Elemento `<audio>` con controles
- Formatos MP3 y compatibilidad
- Reproducción automática opcional

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
