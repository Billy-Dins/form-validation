const form = document.querySelector('#browser-form')
const emailInput = document.querySelector('#email')
const countryInput = document.querySelector('#country')
const zipInput = document.querySelector('#zip')
const passwordInput = document.querySelector('#password')

emailInput.addEventListener('input', (event) => {
    console.log('hello')
    if (emailInput.validity.typeMismatch) {
        console.log('hello')
    }
})