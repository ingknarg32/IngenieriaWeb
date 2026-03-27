const EMAILJS_CONFIG = {
  publicKey:  'TU_PUBLIC_KEY',   // ← aquí
  serviceId:  'TU_SERVICE_ID',   // ← aquí
  templateId: 'TU_TEMPLATE_ID'   // ← aquí
};

document.addEventListener('DOMContentLoaded', function () {

  // ----- Año dinámico en footer -----
  const yearEls = document.querySelectorAll('#footer-year');
  yearEls.forEach(el => { el.textContent = new Date().getFullYear(); });

  // ----- Hidden timestamp -----
  const ts = document.getElementById('timestamp');
  if (ts) ts.value = new Date().toISOString();

  // ----- Range slider con valor -----
  const slider = document.getElementById('presupuesto');
  const sliderVal = document.getElementById('presupuesto-valor');
  if (slider && sliderVal) {
    const updateSlider = () => {
      const v = parseInt(slider.value);
      sliderVal.textContent = '$' + v.toLocaleString('es-CO');
      const pct = ((v - slider.min) / (slider.max - slider.min)) * 100;
      slider.style.setProperty('--progress', pct + '%');
    };
    slider.addEventListener('input', updateSlider);
    updateSlider();
  }

  // ----- Validación de formulario -----
  const form = document.querySelector('.contact-form');
  if (form) {
    const requiredFields = form.querySelectorAll('[required]');

    requiredFields.forEach(field => {
      field.addEventListener('blur', () => validateField(field));
      field.addEventListener('input', () => {
        if (field.classList.contains('field-invalid')) validateField(field);
      });
    });

    function validateField(field) {
      const valid = field.checkValidity();
      field.classList.toggle('field-invalid', !valid);
      field.classList.toggle('field-valid', valid);
      return valid;
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      let ok = true;
      requiredFields.forEach(f => { if (!validateField(f)) ok = false; });
      if (ok) {
        showToast('¡Mensaje enviado con éxito! Te contactaremos pronto.', 'success');
        setTimeout(() => {
          form.reset();
          requiredFields.forEach(f => f.classList.remove('field-valid', 'field-invalid'));
          if (slider && sliderVal) {
            slider.value = 1000;
            const p = ((1000 - slider.min) / (slider.max - slider.min)) * 100;
            slider.style.setProperty('--progress', p + '%');
            sliderVal.textContent = '$1,000';
          }
        }, 2500);
      } else {
        showToast('Por favor, completa los campos requeridos.', 'error');
      }
    });
  }

  // ----- Toast / Notificación -----
  function showToast(msg, type = 'info') {
    const colors = { success: '#0d0d0d', error: '#5c5c5c', info: '#2e2e2e' };
    const toast = document.createElement('div');
    toast.textContent = msg;
    Object.assign(toast.style, {
      position: 'fixed', bottom: '28px', right: '28px',
      background: colors[type] || colors.info,
      color: '#fafafa',
      padding: '14px 22px',
      border: '3px solid #fafafa',
      borderRadius: '8px',
      fontFamily: "'Nunito', sans-serif",
      fontWeight: '700',
      fontSize: '0.9rem',
      boxShadow: '5px 5px 0 #fafafa',
      zIndex: '99999',
      maxWidth: '320px',
      transform: 'translateY(80px)',
      opacity: '0',
      transition: 'transform 0.35s cubic-bezier(0.34,1.56,0.64,1), opacity 0.3s ease'
    });
    document.body.appendChild(toast);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        toast.style.transform = 'translateY(0)';
        toast.style.opacity = '1';
      });
    });
    setTimeout(() => {
      toast.style.transform = 'translateY(80px)';
      toast.style.opacity = '0';
      setTimeout(() => toast.remove(), 350);
    }, 3500);
  }

  // ----- Scroll reveal con IntersectionObserver -----
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(el => obs.observe(el));
  } else {
    // Fallback: mostrar todo
    revealEls.forEach(el => el.classList.add('visible'));
  }

  // ----- Hover 3D sutil en tarjetas -----
  document.querySelectorAll('article.card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `translate(-4px,-4px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });

  // ----- Scroll suave para enlaces internos -----
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const id = link.getAttribute('href').slice(1);
      const target = document.getElementById(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ----- Teclado: Escape cierra toasts -----
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      document.querySelectorAll('[style*="fixed"]').forEach(el => {
        if (el.style.bottom) el.remove();
      });
    }
  });

  console.log('🚀 Solución Craft — scripts cargados');
});

// =====================================================
// TEMA 25: CANVAS — Visualizador de datos interactivo
// =====================================================
(function () {
  const canvas = document.getElementById('grafico-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  const datos = [
    { mes: 'Ene', proyectos: 4, color: '#0d0d0d' },
    { mes: 'Feb', proyectos: 7, color: '#2e2e2e' },
    { mes: 'Mar', proyectos: 5, color: '#444444' },
    { mes: 'Abr', proyectos: 9, color: '#5c5c5c' },
    { mes: 'May', proyectos: 12, color: '#0d0d0d' },
    { mes: 'Jun', proyectos: 8, color: '#2e2e2e' },
    { mes: 'Jul', proyectos: 11, color: '#444444' },
    { mes: 'Ago', proyectos: 15, color: '#0d0d0d' },
  ];

  let modo = 'barras';
  const PAD = { top: 30, right: 20, bottom: 50, left: 50 };

  function dibujarBarras() {
    const W = canvas.width, H = canvas.height;
    const chartW = W - PAD.left - PAD.right;
    const chartH = H - PAD.top - PAD.bottom;
    const maxVal = Math.max(...datos.map(d => d.proyectos)) + 2;
    const barW = (chartW / datos.length) * 0.55;
    const gap = (chartW / datos.length) * 0.45;

    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = '#f0f0f0';
    ctx.fillRect(0, 0, W, H);

    // Ejes
    ctx.strokeStyle = '#0d0d0d';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(PAD.left, PAD.top);
    ctx.lineTo(PAD.left, H - PAD.bottom);
    ctx.lineTo(W - PAD.right, H - PAD.bottom);
    ctx.stroke();

    // Líneas guía
    for (let i = 0; i <= 4; i++) {
      const y = PAD.top + (chartH / 4) * i;
      const val = Math.round(maxVal - (maxVal / 4) * i);
      ctx.strokeStyle = '#dcdcdc';
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 3]);
      ctx.beginPath();
      ctx.moveTo(PAD.left, y);
      ctx.lineTo(W - PAD.right, y);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.fillStyle = '#7a7a7a';
      ctx.font = '11px Space Mono, monospace';
      ctx.textAlign = 'right';
      ctx.fillText(val, PAD.left - 8, y + 4);
    }

    // Barras animadas
    datos.forEach((d, i) => {
      const x = PAD.left + i * (barW + gap) + gap / 2;
      const barH = (d.proyectos / maxVal) * chartH;
      const y = H - PAD.bottom - barH;

      // Barra
      ctx.fillStyle = d.color;
      ctx.beginPath();
      ctx.roundRect ? ctx.roundRect(x, y, barW, barH, 4) : ctx.rect(x, y, barW, barH);
      ctx.fill();

      // Borde cartoon
      ctx.strokeStyle = '#0d0d0d';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Sombra cartoon
      ctx.fillStyle = 'rgba(0,0,0,0.2)';
      ctx.fillRect(x + 4, y + 4, barW, barH);
      ctx.fillStyle = d.color;
      ctx.beginPath();
      ctx.roundRect ? ctx.roundRect(x, y, barW, barH, 4) : ctx.rect(x, y, barW, barH);
      ctx.fill();
      ctx.strokeStyle = '#0d0d0d';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Valor encima
      ctx.fillStyle = '#0d0d0d';
      ctx.font = 'bold 12px Space Mono, monospace';
      ctx.textAlign = 'center';
      ctx.fillText(d.proyectos, x + barW / 2, y - 6);

      // Label mes
      ctx.fillStyle = '#444';
      ctx.font = '11px Nunito, sans-serif';
      ctx.fillText(d.mes, x + barW / 2, H - PAD.bottom + 18);
    });

    // Título eje Y
    ctx.save();
    ctx.translate(14, H / 2);
    ctx.rotate(-Math.PI / 2);
    ctx.fillStyle = '#7a7a7a';
    ctx.font = '11px Nunito, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('Proyectos entregados', 0, 0);
    ctx.restore();
  }

  function dibujarLinea() {
    const W = canvas.width, H = canvas.height;
    const chartW = W - PAD.left - PAD.right;
    const chartH = H - PAD.top - PAD.bottom;
    const maxVal = Math.max(...datos.map(d => d.proyectos)) + 2;
    const stepX = chartW / (datos.length - 1);

    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = '#0d0d0d';
    ctx.fillRect(0, 0, W, H);

    // Líneas guía
    for (let i = 0; i <= 4; i++) {
      const y = PAD.top + (chartH / 4) * i;
      const val = Math.round(maxVal - (maxVal / 4) * i);
      ctx.strokeStyle = 'rgba(255,255,255,0.08)';
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 3]);
      ctx.beginPath();
      ctx.moveTo(PAD.left, y);
      ctx.lineTo(W - PAD.right, y);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.fillStyle = '#7a7a7a';
      ctx.font = '11px Space Mono, monospace';
      ctx.textAlign = 'right';
      ctx.fillText(val, PAD.left - 8, y + 4);
    }

    // Relleno bajo la línea
    ctx.beginPath();
    datos.forEach((d, i) => {
      const x = PAD.left + i * stepX;
      const y = PAD.top + chartH - (d.proyectos / maxVal) * chartH;
      i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    });
    ctx.lineTo(PAD.left + (datos.length - 1) * stepX, H - PAD.bottom);
    ctx.lineTo(PAD.left, H - PAD.bottom);
    ctx.closePath();
    ctx.fillStyle = 'rgba(255,255,255,0.06)';
    ctx.fill();

    // Línea
    ctx.beginPath();
    ctx.strokeStyle = '#fafafa';
    ctx.lineWidth = 2.5;
    ctx.lineJoin = 'round';
    datos.forEach((d, i) => {
      const x = PAD.left + i * stepX;
      const y = PAD.top + chartH - (d.proyectos / maxVal) * chartH;
      i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    });
    ctx.stroke();

    // Puntos y etiquetas
    datos.forEach((d, i) => {
      const x = PAD.left + i * stepX;
      const y = PAD.top + chartH - (d.proyectos / maxVal) * chartH;
      ctx.fillStyle = '#fafafa';
      ctx.beginPath();
      ctx.arc(x, y, 5, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#0d0d0d';
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.fillStyle = '#fafafa';
      ctx.font = 'bold 11px Space Mono, monospace';
      ctx.textAlign = 'center';
      ctx.fillText(d.proyectos, x, y - 12);
      ctx.fillStyle = '#7a7a7a';
      ctx.font = '11px Nunito, sans-serif';
      ctx.fillText(d.mes, x, H - PAD.bottom + 18);
    });

    // Ejes
    ctx.strokeStyle = '#fafafa';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(PAD.left, PAD.top);
    ctx.lineTo(PAD.left, H - PAD.bottom);
    ctx.lineTo(W - PAD.right, H - PAD.bottom);
    ctx.stroke();
  }

  function render() {
    modo === 'barras' ? dibujarBarras() : dibujarLinea();
  }

  render();

  document.getElementById('btn-barras')?.addEventListener('click', () => { modo = 'barras'; render(); });
  document.getElementById('btn-linea')?.addEventListener('click', () => { modo = 'linea'; render(); });
  document.getElementById('btn-limpiar')?.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#f0f0f0';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#7a7a7a';
    ctx.font = '16px Nunito, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('Canvas limpio — haz clic en Barras o Línea para dibujar', canvas.width / 2, canvas.height / 2);
  });

  // Tooltip al hacer clic en barra
  canvas.addEventListener('click', (e) => {
    if (modo !== 'barras') return;
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const mx = (e.clientX - rect.left) * scaleX;
    const chartW = canvas.width - PAD.left - PAD.right;
    const maxVal = Math.max(...datos.map(d => d.proyectos)) + 2;
    const barW = (chartW / datos.length) * 0.55;
    const gap = (chartW / datos.length) * 0.45;

    datos.forEach((d, i) => {
      const x = PAD.left + i * (barW + gap) + gap / 2;
      if (mx >= x && mx <= x + barW) {
        showToast(`${d.mes}: ${d.proyectos} proyectos entregados`, 'info');
      }
    });
  });

  function showToast(msg, type) {
    const t = document.createElement('div');
    t.textContent = msg;
    Object.assign(t.style, {
      position:'fixed', bottom:'28px', right:'28px',
      background:'#0d0d0d', color:'#fafafa',
      padding:'12px 20px', border:'3px solid #fafafa',
      borderRadius:'8px', fontFamily:"'Nunito',sans-serif",
      fontWeight:'700', fontSize:'0.85rem',
      boxShadow:'5px 5px 0 #fafafa', zIndex:'99999',
      transform:'translateY(80px)', opacity:'0',
      transition:'transform 0.35s cubic-bezier(0.34,1.56,0.64,1),opacity 0.3s ease'
    });
    document.body.appendChild(t);
    requestAnimationFrame(() => requestAnimationFrame(() => {
      t.style.transform = 'translateY(0)'; t.style.opacity = '1';
    }));
    setTimeout(() => { t.style.transform = 'translateY(80px)'; t.style.opacity = '0';
      setTimeout(() => t.remove(), 350); }, 2500);
  }
})();

// =====================================================
// TEMA 27 + 28: CONTENIDO EDITABLE + STORAGE
// =====================================================
(function () {
  const KEYS = ['nota-1', 'nota-2'];

  // Tema 28: cargar desde localStorage al iniciar
  KEYS.forEach(key => {
    const el = document.getElementById(key);
    if (!el) return;
    const saved = localStorage.getItem('sc_' + key);
    if (saved) el.innerHTML = saved;
  });

  // Tema 28: guardar en localStorage
  function guardar() {
    KEYS.forEach(key => {
      const el = document.getElementById(key);
      if (el) localStorage.setItem('sc_' + key, el.innerHTML);
    });
    const st = document.getElementById('storage-status');
    if (st) {
      st.textContent = '✓ Guardado en localStorage — ' + new Date().toLocaleTimeString('es-CO');
      setTimeout(() => { st.textContent = ''; }, 3000);
    }
  }

  // Autoguardado al escribir (Tema 27: input en contenteditable)
  KEYS.forEach(key => {
    const el = document.getElementById(key);
    if (el) el.addEventListener('input', () => {
      clearTimeout(el._saveTimer);
      el._saveTimer = setTimeout(guardar, 1200);
    });
  });

  // Botón guardar manual
  document.getElementById('btn-guardar-notas')?.addEventListener('click', guardar);

  // Botón limpiar storage
  document.getElementById('btn-limpiar-notas')?.addEventListener('click', () => {
    KEYS.forEach(key => localStorage.removeItem('sc_' + key));
    const st = document.getElementById('storage-status');
    if (st) {
      st.textContent = '🗑 Notas eliminadas del storage';
      setTimeout(() => { st.textContent = ''; }, 2500);
    }
  });
})();
