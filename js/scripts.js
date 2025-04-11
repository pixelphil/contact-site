// dynamic calendar year in footer
window.addEventListener('DOMContentLoaded', () => {
    const currentYear = new Date().getFullYear();
    document.getElementById('year').textContent = currentYear;
});

// contact form open/close
const toggle = document.getElementById('toggle-form');
const formWrapper = document.getElementById('formWrapper');

toggle.addEventListener('click', (e) => {
    e.preventDefault();
    formWrapper.classList.toggle('open');
});  