
var navEl = document.querySelector('.nav-bar'),
    navLinkEl = document.querySelectorAll('.nav-link');
    landingEl = document.querySelector('header'),
    collectionTitle = document.querySelector('.title'),
    imgEl = document.querySelector('.img-container'),
    collectionSectionEl = document.querySelector('.section-collections');


var obs1 = new IntersectionObserver(entries => {
    var entry = entries[0];
 
    if (!entry.isIntersecting) {
        navEl.classList.add('sticky', 'nav-bg');
        navLinkEl.forEach(el => el.classList.add('nav-text'));
    }
    else {
        navEl.classList.remove('sticky', 'nav-bg');
        navLinkEl.forEach(el => el.classList.remove('nav-text'));
    }
}, {
    root: null,
    threshold: 0.1
});

obs1.observe(landingEl);



var obs2 = new IntersectionObserver(entries => {
    var entry = entries[0];

    if (entry.isIntersecting) {
        imgEl.classList.add('reveal');
    } else {
        imgEl.classList.remove('reveal');
    }

}, {
    root: null,
    threshold: 0.6
});

obs2.observe(collectionSectionEl);
