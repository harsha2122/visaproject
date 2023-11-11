function initLocoScroll() {
    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true
    });

    const nav = document.getElementById("nav");

    function handleNavigationVisibility() {
        if (window.innerWidth <= 768) {
            nav.style.display = "flex";
        } else {
            nav.style.opacity = "1";
            nav.style.transition = "background-color 0.3s ease-in-out, color 0.3s ease-in-out"; // Add transition property

            locoScroll.on("scroll", (e) => {
                const scrollDistance = e.scroll.y;

                const page1 = document.querySelector(".vacation");
                const page1Position = page1.offsetTop;
                const changeColorPoint = page1Position;

                if (scrollDistance >= changeColorPoint) {
                    // Change background color to white
                    nav.style.background = "black";
                    nav.style.color = "black";
                } else {
                    // Reset to original styles
                    nav.style.background = "transparent";
                    nav.style.color = "black";
                }
            });
        }
    }

    handleNavigationVisibility();

    window.addEventListener("resize", handleNavigationVisibility);
}

initLocoScroll();

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    grabCursor: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  
  $(function() {
    $("#datepicker1, #datepicker3, #datepicker5").datepicker({
        minDate: 0,
        onSelect: function(selected) {
        var minDate = new Date(selected);
        minDate.setDate(minDate.getDate() + 1);
        $(this).closest('.search-container', '.search-container1').find('.datepicker').not(this).datepicker("option", "minDate", minDate);
        }
    });

    $(".datepicker").not("#datepicker1, #datepicker3, #datepicker5").datepicker({
        minDate: 0
    });
    });

    function toggleMenu() {
        var mobileMenu = document.getElementById('mobile-menu');
        mobileMenu.style.display = (mobileMenu.style.display === 'flex') ? 'none' : 'flex';
        mobileMenu.classList.toggle('hamburger-open');
    }