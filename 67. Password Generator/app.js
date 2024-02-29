const genBtn = document.querySelector('.btn1')
const copyBtn = document.querySelector('.btn2')

genBtn.addEventListener('click', () => genPassword())
copyBtn.addEventListener('click', () => copyPassword())


function genPassword() {
    let chars = "0123456789abcdefghijklmnopqristuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    passwordLength = 7
    password = ""

    for (let i = 0; i <= passwordLength; i++) {
        let randomNumber = Math.floor(Math.random() * chars.length)
        password += chars.substring(randomNumber, randomNumber + 1)
    }
    document.getElementById('password').value = password
}

function copyPassword() {
    let copyText =  document.getElementById('password')
    copyText.select()
    document.execCommand('copy')

    // Display a message "Copied to clipboard" in a popup modal
    Swal.fire({
        icon: 'success',
        title: 'Copied to clipboard',
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })
}