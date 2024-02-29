const searchContainer = document.querySelector('.container')
const mic = document.querySelector('.mic-icon')
const magnifier = document.querySelector('.magnifier')

magnifier.addEventListener('click', () => {
    searchContainer.classList.remove('active')
    mic.classList.remove('hidden')
})