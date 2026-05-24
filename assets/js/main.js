const header = document.getElementById('myHeader');

function checkScroll() {
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}
window.addEventListener('DOMContentLoaded', checkScroll);
window.addEventListener('scroll', checkScroll);