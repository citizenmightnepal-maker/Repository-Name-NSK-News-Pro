/*
=========================================
NSK NEWS PRO
Core App
=========================================
*/

document.addEventListener("DOMContentLoaded", () => {

    initStickyHeader();
    initBackToTop();
    initReadingProgress();
    initRevealAnimation();

});

/* ==========================
   Sticky Header
========================== */

function initStickyHeader(){

    const header=document.querySelector(".header");

    if(!header) return;

    window.addEventListener("scroll",()=>{

        if(window.scrollY>80){

            header.classList.add("sticky");

        }else{

            header.classList.remove("sticky");

        }

    });

}

/* ==========================
   Back To Top
========================== */

function initBackToTop(){

    const btn=document.querySelector(".back-top");

    if(!btn) return;

    window.addEventListener("scroll",()=>{

        if(window.scrollY>400){

            btn.classList.add("show");

        }else{

            btn.classList.remove("show");

        }

    });

    btn.addEventListener("click",()=>{

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

}

/* ==========================
   Reading Progress
========================== */

function initReadingProgress(){

    const progress=document.querySelector(".reading-progress");

    if(!progress) return;

    window.addEventListener("scroll",()=>{

        const total=document.documentElement.scrollHeight-window.innerHeight;

        const current=window.scrollY;

        const width=(current/total)*100;

        progress.style.width=width+"%";

    });

}

/* ==========================
   Scroll Reveal
========================== */

function initRevealAnimation(){

    const items=document.querySelectorAll(".reveal");

    if(items.length===0) return;

    const observer=new IntersectionObserver(entries=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("active");

            }

        });

    },{

        threshold:.15

    });

    items.forEach(item=>observer.observe(item));

}
