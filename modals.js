const modalTogglers = document.querySelectorAll('.project__link');
const closeButtons = document.querySelectorAll('.modal-close');

modalTogglers.forEach( modalToggler => {
    modalToggler.addEventListener('click', e => {
        e.preventDefault();
        const modal = modalToggler.parentNode.parentNode.nextElementSibling;
        // console.log(modal)
        modal.classList.add('is-open');
        const closeBtn = modal.querySelector('.modal-close');
        closeBtn.addEventListener('click', () => {
            modal.classList.remove('is-open');
        })
    })
})


// for(let toggler of modalTogglers){
//     toggler.addEventListener('click', () => {
//         const modal = modalToggle.parentNode.nextElementSibling;

//     })
// }

// projectContainter.addEventListener('click', e => {
//     e.preventDefault();
//     console.log(e.target)
//     const modalToggle = e.target.closest('.project__link');
//     console.log(modalToggle)
//     if(!modalToggle) 
//         return
    
//     const modal = modalToggle.parentNode.nextElementSibling;
// })