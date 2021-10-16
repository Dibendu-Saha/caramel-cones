
var navEl = document.querySelector('.nav-bar'),
    landingEl = document.querySelector('header'),
    options = {
        root: null,
        threshold: 0
    };

var obs = new IntersectionObserver(entries => {
    var entry = entries[0];

    if (!entry.isIntersecting)
        navEl.classList.add('nav-bg');
    else
        navEl.classList.remove('nav-bg');
}, options);

obs.observe(landingEl);


