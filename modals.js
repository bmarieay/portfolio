const modalTogglers = document.querySelectorAll('.project__link');
const closeButtons = document.querySelectorAll('.modal-close');
const resumeToggler = document.querySelector('.resume');


modalTogglers.forEach( modalToggler => {
    modalToggler.addEventListener('click', e => {
        e.preventDefault();
        const modal = modalToggler.parentNode.parentNode.nextElementSibling;
        modal.classList.add('is-open');
        const closeBtn = modal.querySelector('.modal-close');
        closeBtn.addEventListener('click', () => {
            modal.classList.remove('is-open');
        })
    })
})

resumeToggler.addEventListener('click', e => {
    e.preventDefault();
    const modal = document.querySelector('.modal-resume');
    modal.classList.add('is-open');
    const closeBtn = modal.querySelector('.modal-close');
    closeBtn.addEventListener('click', () => {
        modal.classList.remove('is-open');
    })
})
