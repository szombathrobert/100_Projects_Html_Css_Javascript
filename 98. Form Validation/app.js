const username = document.querySelector('.username')
const email = document.querySelector('.email')
const password1 = document.querySelector('.password1')
const password2 = document.querySelector('.password2')
const submit = document.querySelector('.submit')

//MESSAGES

const usernameMessage = document.querySelector('.user-msg')
const emailMessage = document.querySelector('.email-msg')
const password1Message = document.querySelector('.password1-msg')
const password2Message = document.querySelector('.password2-msg')


submit.addEventListener('click', (e) => {
    e.preventDefault()

    if (
        username.value === "" && 
        email.value === "" && 
        password1.value === "" && 
        password2.value === ""
    ) {
        alert("Please fill all input fields!")
    }

    if (username.value === "") {
        showMessage(usernameMessage, "Please Provide Your Name", "red")
    } else {
        showMessage(usernameMessage, "Great name", "green")
    }

    if (email.value === "") {
        showMessage(emailMessage, "Please Provide Your Email", "red")
    } else {
        showMessage(emailMessage, "Great email!", "green")
    }

    if (password1.value === "") {
        showMessage(password1Message, "Please Provide Your password", "red")
    } else {
        showMessage(password1Message, "Valid password", "green")
    }

    if (password2.value === "") {
        showMessage(password2Message, "Confirm your password", "red")
    } else if (password1.value !== password2.value) {
        showMessage(password2Message, "Password not matching!", "red")
    } else {
        showMessage(password2Message, "Valid Password", "green")
    }
});


function showMessage(element, msg, color) {
    element.style.visibility = "visible";
    element.textContent = msg;
    element.style.color = color;
    element.previousElementSibling.style.border = `2px solid ${color}`;
} 