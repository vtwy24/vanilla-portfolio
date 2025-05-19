document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', async function (e) {
      e.preventDefault();
      const formData = new FormData(form);
      const values = Object.fromEntries(formData.entries());

      try {
        const res = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(values),
        });
        if (!res.ok) throw new Error('Failed to send email');
        alert('Email sent!');
        form.reset();
      } catch (err) {
        console.error(err);
        alert('There was an error sending your message.');
      }
    });
  }
});
