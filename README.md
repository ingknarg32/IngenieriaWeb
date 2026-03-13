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

## � Temas del Proyecto (Hasta Tema 21)

Aquí se detallan los 21 temas principales implementados en el proyecto y su ubicación exacta en el código:

### **Tema 1: Estructura semántica de HTML5**
**Ubicación:** Todos los archivos HTML (líneas 1-50)
- `index.html` - Uso de `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`
- `contacto.html` - Estructura semántica completa

### **Tema 2: Etiquetas básicas**
**Ubicación:** Todos los archivos HTML (líneas 1-100)
- `<h1>` a `<h6>` para jerarquía de contenido
- `<p>`, `<span>`, `<div>` para estructura básica

### **Tema 3: Listas**
**Ubicación:** `contacto.html` (líneas 80-120)
- Listas desordenadas `<ul>` con información de contacto
- `quienes.html` - Listas de servicios y características

### **Tema 4: Enlaces y navegación**
**Ubicación:** Todos los archivos HTML (líneas 20-30)
- Navegación principal en `<nav>`
- Enlaces internos entre páginas
- `contacto.html` (líneas 22-26) - Menú de navegación

### **Tema 5: Imágenes**
**Ubicación:** Todos los archivos HTML
- `index.html` - Logo y imágenes de portfolio
- `assets/img/` - Carpeta con imágenes y favicon
- Uso de `<img>` con atributos alt y src

### **Tema 6: Formularios**
**Ubicación:** `contacto.html` (líneas 150-300)
- Formulario de contacto completo
- Validación HTML5 con atributos `required`
- Campos de texto, email, teléfono, select, textarea

### **Tema 7: Tablas**
**Ubicación:** `servicios.html` (líneas 100-150)
- Tablas de precios y servicios
- Estructura con `<table>`, `<thead>`, `<tbody>`, `<tr>`, `<td>`

### **Tema 8: Audio y Video**
**Ubicación:** `index.html` (líneas 270-290)
- Elemento `<video>` con controles
- Elemento `<audio>` para presentación
- `assets/audio/presentacion.mp3` - Archivo de audio

### **Tema 9: Iframes**
**Ubicación:** `contacto.html` (líneas 200-220)
- Mapa de ubicación con iframe
- Integración de servicios externos

### **Tema 10: Metadatos y SEO**
**Ubicación:** Todos los archivos HTML (líneas 1-15)
- `<meta charset="UTF-8">`
- `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
- `<title>`, `<meta name="description">`
- Open Graph meta tags

### **Tema 11: CSS Básico**
**Ubicación:** `css/styles.css` (líneas 1-100)
- Selectores básicos
- Propiedades fundamentales
- Sintaxis CSS estándar

### **Tema 12: Selectores y Especificidad**
**Ubicación:** `css/styles.css` (líneas 50-150)
- Selectores de clase `.class`
- Selectores de ID `#id`
- Selectores de atributo `[required]`
- Selectores descendientes

### **Tema 13: Modelo de Caja (Box Model)**
**Ubicación:** `css/styles.css` (líneas 100-200)
- `margin`, `padding`, `border`
- `box-sizing: border-box`
- Layout con dimensiones controladas

### **Tema 14: Flexbox**
**Ubicación:** `css/styles.css` (líneas 200-300)
- Contenedores flex: `display: flex`
- `justify-content`, `align-items`
- `flex-direction`, `flex-wrap`

### **Tema 15: Grid**
**Ubicación:** `css/styles.css` (líneas 300-400)
- `display: grid`
- `grid-template-columns`, `grid-template-rows`
- `grid-gap`, `grid-area`

### **Tema 16: Responsive Design**
**Ubicación:** `css/responsive.css` (líneas 1-100)
- Media queries para diferentes dispositivos
- Breakpoints para móvil, tablet, desktop
- Diseño adaptativo

### **Tema 17: Animaciones y Transiciones**
**Ubicación:** `css/styles.css` (líneas 400-500)
- `transition` para efectos suaves
- `animation` para movimientos
- `@keyframes` para animaciones complejas

### **Tema 18: JavaScript Básico**
**Ubicación:** `js/main.js` (líneas 1-50)
- Variables y constantes
- Funciones básicas
- Manipulación del DOM

### **Tema 19: Manipulación del DOM**
**Ubicación:** `js/main.js` (líneas 8-35)
- `document.querySelectorAll()`
- `document.getElementById()`
- Modificación de contenido con `textContent`

### **Tema 20: Eventos**
**Ubicación:** `js/main.js` (líneas 18-35)
- `addEventListener('input', callback)`
- `addEventListener('blur', callback)`
- Manejo de eventos de usuario

### **Tema 21: Storage**
**Ubicación:** `js/main.js` (líneas 50-80)
- `localStorage` para persistencia de datos
- Guardado de preferencias de usuario
- Recuperación de datos almacenados

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
