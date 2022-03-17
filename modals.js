const modalTogglers = document.querySelectorAll('.project__link');
const closeButtons = document.querySelectorAll('.modal-close');
const resumeTogglers = document.querySelectorAll('.resume');

const modalOpen = function(modal){
    modal.classList.add('is-open');
    modal.style.animation = 'modalIn 500ms forwards';
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
        })
    }) 
})

