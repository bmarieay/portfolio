const modalTogglers = document.querySelectorAll('.project__link');
const closeButtons = document.querySelectorAll('.modal-close');
const resumeTogglers = document.querySelectorAll('.resume');
const wrapper = document.querySelector('.scroll-wrap');
const resumeModal = document.querySelector('.modal-resume');


const modalOpen = function(modal){
    modal.classList.add('is-open');
    modal.style.animation = 'modalIn 500ms forwards';
    //prevent the backpage from scrolling when modal is open
    document.body.style.overflowY = 'hidden';
}

const modalClose = function(){
    this.classList.remove('is-open');
    this.removeEventListener('animationend', modalClose);
}

const modalControl = function(modal){
    modalOpen(modal);
    const closeBtn = modal.querySelector('.modal-close');
    closeBtn.addEventListener('click', () => {
        modal.style.animation = 'modalOut 500ms forwards';
        modal.addEventListener('animationend', modalClose);
        document.body.style.overflowY = 'scroll';   
        
    })
    window.addEventListener("keydown", e => {
        if(e.code === "Escape"){
            modal.style.animation = 'modalOut 500ms forwards';
            modal.addEventListener('animationend', modalClose);
            document.body.style.overflowY = 'scroll';
        } 
    })
}

modalTogglers.forEach( modalToggler => {
    modalToggler.addEventListener('click', e => {
        e.preventDefault();
        const modal = modalToggler.parentNode.parentNode.nextElementSibling;
        modalControl(modal);
    })
 
})


resumeTogglers.forEach(resumeToggler => {
    resumeToggler.addEventListener('click', e => {
        e.preventDefault();
        const modal = document.querySelector('.modal-resume');
        modalControl(modal);
    }) 
})


//close the modal on ESC button for accessibility



//remove the animation to the modal when resizing (removes flickering)
window.addEventListener("resize", function() {
    modalTogglers.forEach( modalToggler => {
        let modal = modalToggler.parentNode.parentNode.nextElementSibling;
        modal.style.animation = ''
    })
        //also remove glitch for resume modal
        resumeModal.style.animation = '';
})


//remove glitch modal for scrolling
modalTogglers.forEach( modalToggler => {
    let modal = modalToggler.parentNode.parentNode.nextElementSibling;
    modal.addEventListener('scroll', e => {
        if(modal.classList.contains("is-open")) {
             modal.style.animation = ''
        }
    })
})

// remove glitch for resume modal when scrolling
resumeModal.addEventListener('scroll', () => {
    if(resumeModal.classList.contains("is-open")) {
        modal.style.animation = ''
   }
})


