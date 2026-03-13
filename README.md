# 🚀 Solución Craft - Sitio Web Profesional

**Sitio web corporativo moderno y responsivo para Solución Craft**

---

## 📋 Descripción del Proyecto

Solución Craft es un sitio web corporativo diseñado para mostrar servicios de desarrollo web y diseño digital. El sitio presenta una interfaz moderna, profesional y completamente responsiva que funciona perfectamente en todos los dispositivos.

### ✨ Características Principales

- 🎨 **Diseño Moderno**: Interfaz limpia y profesional con animaciones suaves
- 📱 **Totalmente Responsivo**: Se adapta perfectamente a móviles, tablets y desktop
- ⚡ **Rendimiento Optimizado**: Código limpio y optimizado para carga rápida
- 🎯 **UX/UI Intuitiva**: Navegación sencilla y experiencia de usuario fluida
- 📧 **Formulario de Contacto**: Sistema funcional con validación en tiempo real
- 🎬 **Contenido Multimedia**: Soporte para video y audio integrados

---

## 🏗️ Estructura del Proyecto

```
├── 📁 assets/
│   ├── 📁 img/
│   │   ├── 📁 favicon/          # Iconos para navegadores
│   │   └── 🖼️ logo.jpeg         # Logo principal
│   ├── 🎵 audio/
│   │   └── 🎧 presentacion.mp3  # Audio de presentación
│   └── 📁 video/                # (Video excluido por tamaño)
├── 📁 css/
│   ├── 🎨 styles.css            # Estilos principales
│   └── 📱 responsive.css        # Estilos responsivos
├── 📁 js/
│   └── ⚡ main.js               # Funcionalidad JavaScript
├── 📄 index.html                # Página principal
├── 📄 quienes.html              # Sobre nosotros
├── 📄 servicios.html            # Servicios
├── 📄 contacto.html             # Contacto
└── 📄 README.md                 # Este archivo
```

---

## 🛠️ Tecnologías Utilizadas

### Frontend
- **HTML5** - Estructura semántica y moderna
- **CSS3** - Estilos avanzados con Flexbox/Grid
- **JavaScript (ES6+)** - Interactividad y funcionalidades dinámicas

### Características Técnicas
- **CSS Variables** - Sistema de diseño consistente
- **Media Queries** - Diseño adaptativo
- **Form Validation** - Validación nativa y personalizada
- **LocalStorage** - Persistencia de datos del usuario
- **Intersection Observer** - Animaciones al hacer scroll

---

## 📄 Páginas del Sitio

### 🏠 **index.html** - Página Principal
- Hero section con llamado a la acción
- Presentación de servicios principales
- Estadísticas y logros
- Testimonios de clientes
- Sección de portfolio

### 👥 **quienes.html** - Sobre Nosotros
- Historia de la empresa
- Misión y visión
- Equipo de trabajo
- Valores corporativos

### 🛠️ **servicios.html** - Servicios
- Catálogo completo de servicios
- Descripción detallada de cada servicio
- Proceso de trabajo
- Precios y paquetes

### 📧 **contacto.html** - Contacto
- Formulario de contacto funcional
- Información de contacto directa
- Mapa de ubicación
- Horarios de atención

---

## ⚡ Funcionalidades JavaScript

### 🎯 **Características Implementadas**

1. **Año Dinámico**
   - Actualización automática del año en el footer

2. **Timestamp Oculto**
   - Marca de tiempo para seguimiento de formularios

3. **Range Slider Interactivo**
   - Selector de presupuesto con visualización en tiempo real
   - Animación de progreso personalizada

4. **Validación de Formularios**
   - Validación en tiempo real
   - Mensajes de error personalizados
   - Indicadores visuales de estado

5. **Animaciones al Scroll**
   - Revelación progresiva de elementos
   - Efectos parallax sutiles
   - Transiciones suaves

---

## 🎨 Sistema de Diseño

### 🎨 **Paleta de Colores**
```css
--primary-color: #2563eb      /* Azul principal */
--secondary-color: #1e40af   /* Azul oscuro */
--accent-color: #f59e0b      /* Amarillo acento */
--text-dark: #1f2937         /* Texto oscuro */
--text-light: #6b7280        /* Texto claro */
--bg-light: #f9fafb          /* Fondo claro */
```

### 📏 **Espaciado**
```css
--sp-xs: 0.5rem
--sp-sm: 1rem
--sp-md: 2rem
--sp-lg: 3rem
--sp-xl: 4rem
```

### 🎭 **Tipografía**
- **Headings**: Inter o similar (modern, clean)
- **Body**: System fonts para rendimiento
- **Weights**: 300, 400, 500, 600, 700

---

## 🚀 Cómo Ejecutar el Proyecto

### 📋 **Requisitos Previos**
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Servidor web local (opcional pero recomendado)

### 🏃‍♂️ **Método 1: Servidor Python**
```bash
# Clonar el repositorio
git clone https://github.com/ingknarg32/IngenieriaWeb.git
cd IngenieriaWeb

# Iniciar servidor Python
py -m http.server 8000

# Abrir en navegador
# http://localhost:8000
```

### 🏃‍♂️ **Método 2: Servidor Node.js**
```bash
# Instalar http-server
npm install -g http-server

# Iniciar servidor
http-server -p 8000

# Abrir en navegador
# http://localhost:8000
```

### 🏃‍♂️ **Método 3: VS Code Live Server**
- Instalar extensión "Live Server"
- Clic derecho en `index.html`
- Seleccionar "Open with Live Server"

---

## 📱 Compatibilidad y Responsividad

### 🖥️ **Desktop**
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

### 📱 **Móvil**
- ✅ iOS Safari 14+
- ✅ Chrome Mobile 90+
- ✅ Samsung Internet 14+

### 💻 **Tablets**
- ✅ iPad Safari 14+
- ✅ Android Chrome 90+

---

## 🔧 Personalización y Configuración

### 🎨 **Modificar Colores**
Editar variables CSS en `styles.css`:
```css
:root {
  --primary-color: #tu-color;
  --secondary-color: #tu-color;
  /* ... */
}
```

### 📧 **Configurar Formulario**
Modificar email en `contacto.html`:
```html
<a href="mailto:tu-email@dominio.com">tu-email@dominio.com</a>
```

### 🖼️ **Cambiar Assets**
Reemplazar archivos en carpeta `assets/` manteniendo los nombres.

---

## 🚀 Despliegue

### 🌐 **GitHub Pages**
1. Ir a Settings → Pages
2. Seleccionar fuente: Deploy from branch
3. Elegir rama: main
4. Guardar y esperar despliegue

### 🔥 **Netlify**
1. Conectar cuenta GitHub
2. Seleccionar repositorio
3. Configurar build settings (no requerido)
4. Deploy automático

### 🐳 **Docker**
```dockerfile
FROM nginx:alpine
COPY . /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

---

## 🐛 Solución de Problemas Comunes

### ❓ **Video no se reproduce**
- Verificar formato compatible (MP4, WebM)
- Comprobar ruta del archivo
- Asegurar tamaño <100MB para GitHub

### ❓ **Formulario no envía**
- Configurar servidor backend
- Verificar validación JavaScript
- Revisar configuración email

### ❓ **Estilos no aplican**
- Limpiar cache del navegador
- Verificar rutas CSS
- Comprobar orden de carga

---

## 🤝 Contribución

¡Las contribuciones son bienvenidas! Por favor:

1. Fork del proyecto
2. Crear rama feature (`git checkout -b feature/AmazingFeature`)
3. Commit cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir Pull Request

---

## 📄 Licencia

Este proyecto está bajo licencia MIT. Ver archivo `LICENSE` para más detalles.

---

## 👥 Autor

**Solución Craft**
- 📧 contacto@solucioncraft.com
- 🌐 [Sitio Web](https://github.com/ingknarg32/IngenieriaWeb)

---

## 🙏 Agradecimientos

- Iconos y recursos de diseño
- Fonts y tipografías web
- Comunidad de desarrolladores web

---

**⭐ Si te gusta este proyecto, no olvides darle una estrella en GitHub!**

---

*Última actualización: 2024*
