/* ===================================================
   NSK NEWS PRO
   app.js v1.0
=================================================== */

document.addEventListener("DOMContentLoaded", function () {

    /* ==========================
       Sticky Header
    ========================== */

    const header = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 120) {

            header.classList.add("sticky");

        } else {

            header.classList.remove("sticky");

        }

    });


    /* ==========================
       Back To Top
    ========================== */

    const backTop = document.querySelector(".back-top");

    if (backTop) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 500) {

                backTop.classList.add("show");

            } else {

                backTop.classList.remove("show");

            }

        });

        backTop.addEventListener("click", () => {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        });

    }


    /* ==========================
       Reading Progress
    ========================== */

    const progress = document.querySelector(".reading-progress");

    if (progress) {

        window.addEventListener("scroll", () => {

            let scrollTop = document.documentElement.scrollTop;

            let height = document.documentElement.scrollHeight -

                document.documentElement.clientHeight;

            let percent = (scrollTop / height) * 100;

            progress.style.width = percent + "%";

        });

    }


    /* ==========================
       Dark Mode
    ========================== */

    const darkBtn = document.querySelector(".dark-toggle");

    if (darkBtn) {

        darkBtn.addEventListener("click", () => {

            document.body.classList.toggle("dark");

            localStorage.setItem(

                "darkMode",

                document.body.classList.contains("dark")

            );

        });

    }

    if (localStorage.getItem("darkMode") === "true") {

        document.body.classList.add("dark");

    }


    /* ==========================
       Mobile Menu
    ========================== */

    const menuBtn = document.querySelector(".menu-btn");

    const nav = document.querySelector(".navbar ul");

    if (menuBtn) {

        menuBtn.addEventListener("click", () => {

            nav.classList.toggle("active");

        });

    }


    /* ==========================
       Lazy Images
    ========================== */

    const images = document.querySelectorAll("img[data-src]");

    const observer = new IntersectionObserver((entries, obs) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                const img = entry.target;

                img.src = img.dataset.src;

                img.removeAttribute("data-src");

                obs.unobserve(img);

            }

        });

    });

    images.forEach(img => observer.observe(img));

});
