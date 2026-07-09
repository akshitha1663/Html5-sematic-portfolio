document.addEventListener('DOMContentLoaded', () => {
  const yearElements = document.querySelectorAll('#year');
  yearElements.forEach((element) => {
    element.textContent = new Date().getFullYear();
  });

  const form = document.querySelector('.contact-form');
  const status = document.querySelector('.form-status');

  if (form && status) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();

      const formData = new FormData(form);
      const name = formData.get('name')?.toString().trim() || '';
      const email = formData.get('email')?.toString().trim() || '';
      const subject = formData.get('subject')?.toString().trim() || '';
      const message = formData.get('message')?.toString().trim() || '';

      if (!name || !email || !subject || !message) {
        status.textContent = 'Please complete all required fields before submitting.';
        return;
      }

      if (!email.includes('@')) {
        status.textContent = 'Please enter a valid email address.';
        return;
      }

      status.textContent = `Thanks ${name}! Your message has been received.`;
      form.reset();
    });
  }
});
