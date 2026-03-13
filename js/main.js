// =====================================================
// SOLUCIÓN CRAFT — main.js
// =====================================================

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
