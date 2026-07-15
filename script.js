
// Contact form handling (contact.html only — this exits early on other
// pages since #contact-form won't exist there).
const contactForm = document.getElementById('contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const nameInput = contactForm.querySelector('input[type="text"]');
    const name = nameInput ? nameInput.value.trim() : '';

    alert(
      name
        ? `Thanks, ${name} — we'll get back to you soon.`
        : "Thanks — we'll get back to you soon."
    );

    contactForm.reset();
  });
}
