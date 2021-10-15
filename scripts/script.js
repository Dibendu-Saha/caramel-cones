
var navEl = document.querySelector('.nav-bar');

document.addEventListener('scroll', () => {
    if (window.scrollY > 753)
        navEl.classList.add('nav-bg');
    else
        navEl.classList.remove('nav-bg');
});