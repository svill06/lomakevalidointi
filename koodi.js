document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    resetErrors();

    let isValid = true;

    const userId = document.getElementById('userid').value;
    if (userId.length < 6) {
        showError('useridError', 'Käyttäjä ID:n pitää olla vähintään 6 merkkiä pitkä.');
        isValid = false;
    }

    const password = document.getElementById('pass').value;
    const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@£$€&%#]).{6,}$/;
    if (!passwordPattern.test(password)) {
        showError('passError', 'Salasanan tulee olla vähintään 6 merkkiä pitkä ja sisältää yksi iso kirjain, yksi numero ja yksi erikoismerkki (!@£$€&%#).');
        isValid = false;
    }

    const name = document.getElementById('name').value;
    if (name.trim() === '') {
        showError('nameError', 'Nimi ei voi olla tyhjä.');
        isValid = false;
    }

    const address = document.getElementById('address').value;
    if (address.trim() === '') {
        showError('addressError', 'Osoite ei voi olla tyhjä.');
        isValid = false;
    }

    const postalCode = document.getElementById('postalcode').value;
    const postalCodePattern = /^\d{5}$/;
    if (!postalCodePattern.test(postalCode)) {
        showError('postalcodeError', 'Postinumeron pitää olla 5 numeroa.');
        isValid = false;
    }

    const email = document.getElementById('email').value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        showError('emailError', 'Anna kelvollinen sähköpostiosoite.');
        isValid = false;
    }

    const genderMale = document.getElementById('male').checked;
    const genderFemale = document.getElementById('female').checked;
    if (!genderMale && !genderFemale) {
        showError('genderError', 'Valitse sukupuoli.');
        isValid = false;
    }

    if (isValid) {
        this.submit(); // 
    }
});

function showError(elementId, message) {
    document.getElementById(elementId).textContent = message;
}

function resetErrors() {
    const errorElements = document.querySelectorAll('.error');
    errorElements.forEach(function(el) {
        el.textContent = '';
    });
}
