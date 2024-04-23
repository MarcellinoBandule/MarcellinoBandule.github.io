const navigationItems = document.querySelectorAll('.navigation li');
navigationItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'scale(1.1)';
    });
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'scale(1)';
    });
});
window.addEventListener('scroll', function() {
const parallax = document.getElementById('parallax');
let scrollPosition = window.pageYOffset;

parallax.style.transform = 'translateY(' + scrollPosition * 0.5 + 'px)';
});
document.addEventListener("DOMContentLoaded", function() {
    const scrollLinks = document.querySelectorAll('a.scroll-link');

    scrollLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            const offsetTop = targetElement.offsetTop;

            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        });
    });
});
