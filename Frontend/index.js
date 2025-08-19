// Mobile nav toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
menuToggle?.addEventListener('click', () => navLinks.classList.toggle('open'));

// Sticky header shadow on scroll
const header = document.querySelector('header');
const shadow = () => header.style.boxShadow = window.scrollY > 8 ? '0 6px 16px rgba(2,8,23,.35)' : 'none';
window.addEventListener('scroll', shadow); shadow();

// Intersection Observer for reveal
const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('show'); });
}, { threshold: .12 });
document.querySelectorAll('[data-reveal]').forEach(el => observer.observe(el));

// FAQ toggle
document.querySelectorAll('.faq-q').forEach(q => q.addEventListener('click', () => {
    q.parentElement.classList.toggle('open');
}));

// Appointment form
const form = document.getElementById('apptForm');
const toast = document.getElementById('toast');
const toastMsg = document.getElementById('toastMsg');

form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    if (!name || !/^\d{10}$/.test(phone)) {
        showToast('Please enter a valid name and 10‑digit phone number');
        return;
    }
    // Fake success (replace with fetch to backend)
    showToast(`Thanks, ${name}! We will call you shortly.`);
    form.reset();
});

function showToast(message) {
    toastMsg.textContent = message; toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
}

// Year
document.getElementById('year').textContent = new Date().getFullYear();
  