window.addEventListener('scroll', function() {
    const nav = document.getElementById('nav');
    if (window.scrollY > 10) {
      nav.classList.add('scroll');
    } else {
      nav.classList.remove('scroll');
    }
});


const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true,
});




