// loginForm
const loginForm = document.querySelector('.login-form')
// signupForm
const signupForm = document.querySelector('.signup-form')
// loginBtn
const loginBtn = document.querySelector('.login button')
// signupBtn
const signupBtn = document.querySelector('.signup button')
// backLayer
const backLayer = document.querySelector('.back-layer')


signupBtn.addEventListener('click', () => {
    loginForm.classList.remove('active')
    signupForm.classList.add('active')
    backLayer.style.clipPath = "inset(0 0 0 50%)"
});

loginBtn.addEventListener('click', () => {
    signupForm.classList.remove('active')
    loginForm.classList.add('active')
    backLayer.style.clipPath = ""

})