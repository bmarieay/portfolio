const hero = document.querySelector(".hero");
const slider = document.querySelector(".slider");
const logo = document.querySelector("#logo");
const primaryNav = document.querySelector(".nav__item");
const navToggle = document.querySelector(".mobile-nav-toggle");
const transition = document.querySelectorAll('.transition');
const section = document.querySelector('.hero')
const options = {
    rootMargin: "-500px 0px 0px 0px"
}
// const heroTitle = document.querySelector(".hero__title");

const t1 = new TimelineMax();

t1.fromTo(hero, 1, {height: "0%"}, {height: "80%", ease: Power2.easeInOut})
.fromTo(hero, 1.2, {width: "100%"}, {width: "90%", ease: Power2.easeInOut})
.fromTo(primaryNav, 0.5, {opacity: 0, x: 30}, {opacity: 1, x: 0}, "-=0.5");


navToggle.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute("data-visible")
    if(visibility === "false"){
        primaryNav.setAttribute('data-visible', 'true');
        navToggle.setAttribute('aria-expanded', 'true')
    } else {
        primaryNav.setAttribute('data-visible', 'false');
        navToggle.setAttribute('aria-expanded', 'false')
    }
    console.log(visibility)
})


const observer = 
    new IntersectionObserver(function (entries, observer){
    entries.forEach(entry => {
        if(!entry.isIntersecting){
            console.log(transition)
            for(let trans of transition){
                trans.classList.add('nav-scrolled')
            }
            console.log(entry)
        } else {
            for(let trans of transition){
                trans.classList.remove('nav-scrolled')
            }
        }

    })
}, options)

observer.observe(section);

let resizeTimer;
window.addEventListener("resize", () => {
    document.body.classList.add("resize-animation-stopper");
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
    document.body.classList.remove("resize-animation-stopper");
    }, 400);
});