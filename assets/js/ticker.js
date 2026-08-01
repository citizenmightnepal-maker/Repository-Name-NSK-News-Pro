/*
=========================================
NSK NEWS PRO
Breaking News Ticker
=========================================
*/

document.addEventListener("DOMContentLoaded", () => {

    const ticker = document.querySelector(".breaking-news");

    if (!ticker) return;

    let speed = 1;
    let paused = false;

    function animate() {

        if (paused) {
            requestAnimationFrame(animate);
            return;
        }

        ticker.scrollLeft += speed;

        if (
            ticker.scrollLeft >=
            ticker.scrollWidth - ticker.clientWidth
        ) {
            ticker.scrollLeft = 0;
        }

        requestAnimationFrame(animate);

    }

    ticker.addEventListener("mouseenter", () => {

        paused = true;

    });

    ticker.addEventListener("mouseleave", () => {

        paused = false;

    });

    animate();

});
