window.addEventListener('scroll', function() {
    var nav = document.getElementById('nav');
    
    // Check the scroll position
    if (window.scrollY > 0) {
        nav.classList.add('scrolled'); // Add class when scrolled
        nav.classList.remove('transparent'); // Remove class when scrolled
    } else {
        nav.classList.remove('scrolled'); // Remove class when at the top
        nav.classList.add('transparent'); // Add class when at the top
    }
});


const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true,
});








