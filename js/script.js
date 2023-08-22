AOS.init();

const header = document.querySelector("header");
window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",this.window.scrollY > 60)
});


let navbar = document.querySelector('.navbar');

document.querySelector('#menu-icone').onclick = () =>{
    navbar.classList.toggle('active');
    
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    
}
