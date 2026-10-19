document.addEventListener('DOMContentLoaded', () => {
  const currentYear = document.getElementById('current-year');
  if (currentYear) currentYear.textContent = String(new Date().getFullYear());

  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.main-navigation .nav-link').forEach((link) => {
    const isCurrentPage = link.getAttribute('href') === currentPath;
    link.classList.toggle('active', isCurrentPage);
    if (isCurrentPage) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  });

  const navbar = document.getElementById('navbarCodeNest');
  if (navbar && window.bootstrap) {
    const collapse = window.bootstrap.Collapse.getOrCreateInstance(navbar, { toggle: false });
    navbar.querySelectorAll('.nav-link').forEach((link) => {
      link.addEventListener('click', () => {
        if (navbar.classList.contains('show')) collapse.hide();
      });
    });
  }

  document.querySelectorAll('form[data-form-status]').forEach((form) => {
    const status = document.getElementById(form.dataset.formStatus);
    const fields = [...form.querySelectorAll('[data-validate]')];
    const button = form.querySelector('button[type="submit"]');
    const defaultButtonText = button?.textContent.trim() ?? '';

    function showStatus(message, type) {
      if (!status) return;
      status.className = `alert form-status alert-${type} mt-3`;
      status.setAttribute('role', type === 'danger' ? 'alert' : 'status');
      status.setAttribute('aria-live', type === 'danger' ? 'assertive' : 'polite');
      status.textContent = message;
      status.focus();
    }

    function validateField(field) {
      field.setCustomValidity('');
      const trimmedValue = field.type === 'checkbox' ? field.value : field.value.trim();

      if (field.required && field.type !== 'checkbox' && !trimmedValue) {
        field.setCustomValidity('Completa este campo.');
      } else if (field.minLength > 0 && trimmedValue.length < field.minLength) {
        field.setCustomValidity(`Escribe al menos ${field.minLength} caracteres.`);
      }

      const valid = field.checkValidity();
      field.classList.toggle('is-invalid', !valid);
      field.classList.toggle('is-valid', valid && (field.type === 'checkbox' ? field.checked : !!trimmedValue));
      field.setAttribute('aria-invalid', String(!valid));

      const feedback = field.closest('.form-check')?.querySelector('.invalid-feedback')
        ?? field.parentElement.querySelector('.invalid-feedback');
      if (feedback && !valid) {
        feedback.textContent = field.validity.valueMissing
          ? 'Completa este campo.'
          : field.validationMessage;
      }
      return valid;
    }

    fields.forEach((field) => {
      field.addEventListener('input', () => {
        status?.classList.add('d-none');
        if (field.classList.contains('is-invalid')) validateField(field);
      });
      field.addEventListener('change', () => {
        status?.classList.add('d-none');
        if (field.classList.contains('is-invalid')) validateField(field);
      });
      field.addEventListener('blur', () => validateField(field));
    });

    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      fields.filter((field) => field.type !== 'checkbox').forEach((field) => {
        field.value = field.value.trim();
      });

      const valid = fields.map(validateField).every(Boolean);
      if (!valid) {
        showStatus('Revisa los campos marcados antes de continuar.', 'danger');
        form.querySelector('[aria-invalid="true"]')?.focus();
        return;
      }

      if (form.elements.namedItem('_gotcha')?.value) {
        form.reset();
        return;
      }

      if (button) {
        button.disabled = true;
        button.dataset.originalText = button.textContent;
        button.textContent = 'Enviando…';
      }

      try {
        const data = new FormData(form);
        fields.forEach((field) => {
          if (field.type !== 'checkbox') data.set(field.name, field.value.trim());
        });

        const response = await fetch(form.action, {
          method: 'POST',
          headers: { Accept: 'application/json' },
          body: data,
        });
        let result = {};
        if (response.headers.get('content-type')?.includes('application/json')) {
          result = await response.json();
        }
        if (!response.ok) {
          const detail = result?.errors?.map((item) => item.message).join(' ');
          throw new Error(detail || `HTTP ${response.status}`);
        }

        form.reset();
        fields.forEach((field) => {
          field.classList.remove('is-valid', 'is-invalid');
          field.removeAttribute('aria-invalid');
        });
        showStatus(
          form.id === 'newsletterForm'
            ? '¡Gracias! Tu suscripción fue enviada.'
            : 'Mensaje enviado correctamente. Pronto te responderemos.',
          'success',
        );
      } catch (error) {
        console.error('No fue posible enviar el formulario:', error);
        showStatus('No pudimos enviar el mensaje. Inténtalo de nuevo o contáctanos por correo.', 'danger');
      } finally {
        if (button) {
          button.disabled = false;
          button.textContent = button.dataset.originalText || defaultButtonText;
        }
      }
    });
  });
});
