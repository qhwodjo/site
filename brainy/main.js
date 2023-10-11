 //navbar scroll change on scroll

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle
    ('window-scroll', window.scrollY > 80)
})  

//Sow and Hide FAQ answer
const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        //icon change
        const icon = faq.querySelector('.faq_icon i');
        if(icon.className === 'uil uil-plus') {
            icon.className = "uil uil-minus"
        } else {
            icon.className = "uil uil-plus";
        }
    })
})

//Show and Hide  NAV MENU

const menu = document.querySelector(".nav_menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener('click', () => {
    menu.stlye.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
})

// close nav menu
const closeNav = () => {
    menu.stlye.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}

closeBtn.addEventListener('click', closeNav)

$(".burger-nav").on("click", function(){
        
    $(".container nav_container nav ul").toggleClass("open");
    
});
/*

const openMenuBtn = document.getElementById('#open-menu-btn');
const closeMenuBtn = document.getElementById('#close-menu-btn');
const menu = document.querySelector('.nav_menu');

openMenuBtn.addEventListener('click', () => {
	menu.Style.display  = 'block';
	openMenuBtn.stlye.display = 'none';
	closeMenuBtn.style.display = 'block';
});

closeMenuBtn.addEventListener('click', () => {
	menu.Style.display  = 'none';
	openMenuBtn.stlye.display = 'block';
	closeMenuBtn.style.display = 'none';
});

function toggleMenu(){
            var menu = document.getElementById('menu');
            menu.classList.toggle('active'); 
        }
        document.getElementById('open-menu-btn').addEventListener('click', toggleMenu);
        document.getEventListener('click', toggleMenu);
*/








$(document).ready(function(){
    $(".counter").counterUp({
        delay: 10,
        time: 1200
    })
});
