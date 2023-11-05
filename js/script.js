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
            // Use GSAP to animate the background color change
            gsap.to(nav, {
                backgroundColor: "#000", // Change this to the desired color
                duration: 0.5 // Adjust duration as needed
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
