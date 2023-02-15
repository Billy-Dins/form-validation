import style from './src/style.css'

const form = document.querySelector('#browser-form')
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
        error.textContent = 'You need to enter an email address'
    } else if (input.validity.typeMismatch) {
        error.textContent = 'entered value needs to be an email address'
    } else if (input.validity.tooShort) {
        error.textContent = `Email should be atleast ${emailInput.minLength} characters; you entered ${emailInput.value.length}.`
    }
    error.className = 'error active'
}

emailInput.addEventListener('input', (event) => {
    if (emailInput.validity.valid) {
        emailError.textContent = '';
        emailError.className = 'error'
    } else {
        showError(emailInput, emailError);
    }
})

