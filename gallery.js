document.addEventListener("DOMContentLoaded", function() {
    const galleryItems = document.querySelectorAll('.gallery-item img');
    const lightbox = document.createElement('div');
    lightbox.classList.add('lightbox');
    document.body.appendChild(lightbox);

    galleryItems.forEach(function(item) {
        item.addEventListener('click', function() {
            const imgSrc = item.getAttribute('src');
            const lightboxContent = `
                <div class="lightbox-content">
                    <img src="${imgSrc}" alt="Gallery Image">
                </div>
            `;
            lightbox.innerHTML = lightboxContent;
            lightbox.style.display = 'flex';
        });
    });

    lightbox.addEventListener('click', function() {
        lightbox.style.display = 'none';
    });
});
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