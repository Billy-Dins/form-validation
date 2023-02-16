import style from './src/style.css'

const form = document.querySelector('#browser-form')
const formButton = document.querySelector('#submit-btn')
const formError = document.querySelector('#form-error')
const emailInput = document.querySelector('#email')
const emailError = document.querySelector('#emailError')
const countryInput = document.querySelector('#country')
const countryError = document.querySelector('#countryError')
const zipInput = document.querySelector('#zip')
const zipError = document.querySelector('#zipError')
const passwordInput = document.querySelector('#password')
const passwordError = document.querySelector('#passwordError')

function showError(input, error) {
    if (input.validity.valueMissing){
        error.textContent = 'You need to enter a value'
    } else if (input.validity.typeMismatch) {
        error.textContent = 'input needs to be requested type'
    } else if (input.validity.tooShort) {
        error.textContent = `input should be atleast ${input.minLength} characters; you entered ${input.value.length}.`
    } else if (input.validity.patternMismatch) {
        error.textContent = 'please entern a valid postal code in the format "A0A 0A0"'
    }
    error.className = 'error active'
}

formButton.addEventListener('click', (event) => {
    event.preventDefault();
    if (form.checkValidity()) {
        formError.textContent = 'mission success';
        formError.className = 'error'
    } else {
        showFormError();
    }
})

function showFormError() {
    formError.textContent = "form filled out incorrectly, please try again"
}

emailInput.addEventListener('input', (event) => {
    formError.textContent = ''
    if (emailInput.validity.valid) {
        emailError.textContent = '';
        emailError.className = 'error'
    } else {
        showError(emailInput, emailError);
    }
})

countryInput.addEventListener('input', (event) => {
    formError.textContent = ''
    if (countryInput.validity.valid) {
        countryError.textContent = '';
        countryError.className = 'error';
    } else {
        showError(countryInput, countryError)
    }
})

zipInput.addEventListener('input', (event) => {
    formError.textContent = ''
    if (zipInput.validity.valid) {
        zipError.textContent = '';
        zipError.className = 'error'
    }  else {
        showError(zipInput, zipError)
    }
})

passwordInput.addEventListener('input', (event) => {
    formError.textContent = ''
    if (passwordInput.validity.valid) {
        passwordError.textContent = '';
        passwordError.className = 'error'
    } else {
        showError(passwordInput, passwordError)
    }
})