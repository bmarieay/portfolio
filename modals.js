const modalTogglers = document.querySelectorAll('.project__link');
const closeButtons = document.querySelectorAll('.modal-close');
const resumeTogglers = document.querySelectorAll('.resume');

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

modalTogglers.forEach( modalToggler => {
    modalToggler.addEventListener('click', e => {
        e.preventDefault();
        const modal = modalToggler.parentNode.parentNode.nextElementSibling;
        modalOpen(modal);
        const closeBtn = modal.querySelector('.modal-close');
        closeBtn.addEventListener('click', () => {
            modal.style.animation = 'modalOut 500ms forwards';
            modal.addEventListener('animationend', modalClose);
            document.body.style.overflowY = 'scroll';

        })
    })
})

resumeTogglers.forEach(resumeToggler => {
    resumeToggler.addEventListener('click', e => {
        e.preventDefault();
        const modal = document.querySelector('.modal-resume');
        modalOpen(modal);
        const closeBtn = modal.querySelector('.modal-close');
        closeBtn.addEventListener('click', () => {
            modal.style.animation = 'modalOut 500ms forwards';
            modal.addEventListener('animationend', modalClose);
            document.body.style.overflowY = 'scroll';

        })
    }) 
})


//remove the animation to the modal when resizing (removes flickering)
window.addEventListener("resize", function() {
    modalTogglers.forEach( modalToggler => {
        let modal = modalToggler.parentNode.parentNode.nextElementSibling;
        if(modal.classList.contains("is-open")) {
             modal.style.animation = ''
        }
    })
})

