// ratings
const ratings = document.querySelectorAll('.rating')
// ratingsContainer
const ratingsContainer = document.querySelector('.ratings-container')
// sendBtn
const sendBtn = document.getElementById('send')
// panel
const panel = document.querySelector('#panel')


let selectedRating = 'Satisfied'

function removeActive() {
    for (let i = 0; i < ratings.length; i++) {
        ratings[i].classList.remove('active')
    }
}

ratingsContainer.addEventListener('click', e => {
    if(e.target.parentNode.classList.contains('rating')) {
        removeActive()
        e.target.parentNode.classList.add('active')
        selectedRating = e.target.nextElementSibling.innerHTML
    }
})

sendBtn.addEventListener('click', () => {
    panel.innerHTML = `
        <p class="heart">❤</p>
        <strong>Thank you!</strong>
        <br>
        <strong>Feedback: ${selectedRating}</strong>
    `
})