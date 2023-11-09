function initLocoScroll() {
    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true
    });

    const nav = document.getElementById("nav");
    const nav1 = document.getElementById("nav1");

    function handleNavigationVisibility() {
        if (window.innerWidth <= 768) {
            nav.style.display = "flex";
            nav1.style.display = "none"; 
        } else {
 
            nav.style.opacity = "1"; 
            nav1.style.opacity = "0"; 
            nav1.style.pointerEvents = "none";

            locoScroll.on("scroll", (e) => {
                const scrollDistance = e.scroll.y;

                const page1 = document.querySelector(".vacation");
                const page1Position = page1.offsetTop;
                const changeColorPoint = page1Position;

                if (scrollDistance >= changeColorPoint) {
                    nav.style.opacity = "0"; 
                    nav1.style.opacity = "1"; 
                    nav.style.pointerEvents = "none"; 
                    nav1.style.pointerEvents = "auto";
                } else {
                    nav.style.opacity = "1";
                    nav1.style.opacity = "0";
                    nav.style.pointerEvents = "auto"; 
                    nav1.style.pointerEvents = "none"; 
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

