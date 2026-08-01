document.addEventListener("DOMContentLoaded",()=>{

const toggle=document.querySelector(".mobile-toggle");
const menu=document.querySelector(".menu");

if(toggle && menu){

toggle.addEventListener("click",()=>{

menu.classList.toggle("show");

});

}

document.querySelectorAll(".menu > li").forEach(item=>{

item.addEventListener("click",function(){

if(window.innerWidth<993){

this.classList.toggle("open");

}

});

});

});
