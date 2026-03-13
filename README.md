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

## 🚀 Cómo Ejecutar el Proyecto

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
