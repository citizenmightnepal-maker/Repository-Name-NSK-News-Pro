/* ===================================================
   NSK NEWS PRO
   Hero Slider v1.0
=================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const slides = document.querySelectorAll(".hero-slide");

    const nextBtn = document.querySelector(".slider-next");

    const prevBtn = document.querySelector(".slider-prev");

    let current = 0;

    if (!slides.length) return;

    function showSlide(index){

        slides.forEach(slide=>{

            slide.classList.remove("active");

        });

        slides[index].classList.add("active");

    }

    function nextSlide(){

        current++;

        if(current >= slides.length){

            current = 0;

        }

        showSlide(current);

    }

    function prevSlide(){

        current--;

        if(current < 0){

            current = slides.length-1;

        }

        showSlide(current);

    }

    showSlide(current);

    if(nextBtn){

        nextBtn.addEventListener("click",nextSlide);

    }

    if(prevBtn){

        prevBtn.addEventListener("click",prevSlide);

    }

    setInterval(nextSlide,5000);




    /* ======================
       Touch Swipe
    ======================= */

    let startX=0;

    let endX=0;

    const slider=document.querySelector(".hero-slider");

    if(slider){

        slider.addEventListener("touchstart",(e)=>{

            startX=e.changedTouches[0].screenX;

        });

        slider.addEventListener("touchend",(e)=>{

            endX=e.changedTouches[0].screenX;

            if(startX-endX>60){

                nextSlide();

            }

            if(endX-startX>60){

                prevSlide();

            }

        });

    }

});
