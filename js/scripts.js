window.addEventListener('DOMContentLoaded', () => {
    const currentYear = new Date().getFullYear();
    document.getElementById('year').textContent = currentYear;
});

const toggle = document.getElementById('toggle-form');
const formWrapper = document.getElementById('formWrapper');

toggle.addEventListener('click', (e) => {
    e.preventDefault();
    formWrapper.classList.toggle('open');
});  