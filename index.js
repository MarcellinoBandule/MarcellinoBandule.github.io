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
function updateTime() {
    const currentTimeElement = document.getElementById('currentTime');
    const currentTime = new Date();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const day = days[currentTime.getDay()];
    const date = currentTime.getDate();
    const month = currentTime.getMonth() + 1; 
    const year = currentTime.getFullYear();
    const hours = String(currentTime.getHours()).padStart(2, '0');
    const minutes = String(currentTime.getMinutes()).padStart(2, '0');
    const seconds = String(currentTime.getSeconds()).padStart(2, '0');
    const formattedTime = `${day}, ${date}/${month}/${year} ${hours}:${minutes}:${seconds}`;
    currentTimeElement.textContent = formattedTime;
}


setInterval(updateTime, 1000);


updateTime();
