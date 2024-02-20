const text = document.querySelector('.content-container-2')

const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {
    text.classList.toggle('toggle')
})