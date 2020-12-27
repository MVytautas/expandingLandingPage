const elements = document.querySelectorAll('.panel');

elements.forEach(el => {
    el.addEventListener('click', () => {
        removeActiveClasses()
        el.classList.add('active')
    })
})

function removeActiveClasses() {
    elements.forEach(el => {
        el.classList.remove('active')
    })
}