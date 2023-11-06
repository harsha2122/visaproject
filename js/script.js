function initLocoScroll() {
    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true
    });

    locoScroll.on("scroll", (e) => {
        const nav = document.getElementById("nav");
        const scrollDistance = e.scroll.y;

        const page1 = document.querySelector(".page1");
        const page1Position = page1.offsetTop;
        const changeColorPoint = page1Position + page1.offsetHeight;

        if (scrollDistance > changeColorPoint) {

            gsap.to(nav, {
                backgroundColor: "#000", 
                duration: 0.5 
            });
        } else {
            gsap.to(nav, {
                backgroundColor: "rgba(0,0,0,0)",
                duration: 0.5
            });
        }
    });
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
  