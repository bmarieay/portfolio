const hero = document.querySelector(".hero");
const slider = document.querySelector(".slider");
const logo = document.querySelector("#logo");
const primaryNav = document.querySelector("#nav__item");
const navToggle = document.querySelector(".mobile-nav-toggle");
const transition = document.querySelectorAll('.transition');
const section = document.querySelector('.hero');
const faders = document.querySelectorAll('.faders');
const sliders = document.querySelectorAll('.sliders');
const navLinks = document.querySelectorAll('.nav__link');
const options = {
    rootMargin: "-400px 0px 0px 0px"
}
const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -250px 0px"
};

//hero animation
const t1 = new TimelineMax();

t1.fromTo(hero, 1, {height: "0%"}, {height: "80%", ease: Power2.easeInOut})
.fromTo(hero, 1.2, {width: "100%"}, {width: "80%", ease: Power2.easeInOut});

//navbar toggling
navToggle.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute("data-visible")
    if(visibility === "false"){
        primaryNav.setAttribute('data-visible', 'true');
        navToggle.setAttribute('aria-expanded', 'true')
    } else {
        primaryNav.setAttribute('data-visible', 'false');
        navToggle.setAttribute('aria-expanded', 'false')
    }
})

//for navbar scroll
const observer = 
    new IntersectionObserver(function (entries, observer){
    entries.forEach(entry => {
        if(!entry.isIntersecting){
            for(let trans of transition){
                trans.classList.add('nav-scrolled')
            }
        } else {
            for(let trans of transition){
                trans.classList.remove('nav-scrolled')
            }
        }

    })
}, options);

observer.observe(section);

//for appearonscroll animations
const appearOnScroll = 
    new IntersectionObserver(function(entries, appearOnScroll){
        entries.forEach(entry => {
            if(!entry.isIntersecting){
                return;
            } else {
                entry.target.classList.add("appear");
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, appearOptions);



faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

sliders.forEach(slider => {
    appearOnScroll.observe(slider);
})


//stop animation while resizing for navbar
let resizeTimer;
window.addEventListener("resize", () => {
    document.body.classList.add("resize-animation-stopper");
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
    document.body.classList.remove("resize-animation-stopper");
    }, 400);
});

//close the navigation after clicking

for(let link of navLinks){
    link.addEventListener('click', () => {
        primaryNav.setAttribute('data-visible', 'false');
        navToggle.setAttribute('aria-expanded', 'false');
    })
}
