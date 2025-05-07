// active header sticky 
const header = document.querySelector("header");
window.addEventListener("scroll", ()=>{
    header.classList.toggle("sticky", window.scrollY > 50)
})

// active scroll menu
const link = document.querySelectorAll("header ul li a");
const section = document.querySelectorAll("section");

function activeMenu(){
    let secLength = section.length;
    while(--secLength && window.scrollY + 500 < section[secLength].offsetTop){}
    link.forEach(sec => sec.classList.remove("active"));
    link[secLength].classList.add("active");
}

activeMenu();
window.addEventListener("scroll", activeMenu);

// active burger-menu icon
const menuIcon = document.querySelector("#menu-icon");
const navList = document.querySelector(".nav-list");

menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navList.classList.toggle("open");
}

// remove menu List 
window.onscroll = () => {
    menuIcon.classList.remove("bx-x");
    navList.classList.remove("open");
}

// Scroll animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add("show-items");
        } else {
            entry.target.classList.remove("show-items")

        }
    });
});

const scrollLeft = document.querySelectorAll(".scroll-left");
scrollLeft.forEach((el) => observer.observe(el));

const scrollRight = document.querySelectorAll(".scroll-right");
scrollRight.forEach((el) => observer.observe(el));

const scrollTop = document.querySelectorAll(".scroll-top");
scrollTop.forEach((el) => observer.observe(el));

const scrollBottom = document.querySelectorAll(".scroll-bottom");
scrollBottom.forEach((el) => observer.observe(el));

const scrollScale = document.querySelectorAll(".scroll-scale");
scrollScale.forEach((el) => observer.observe(el));