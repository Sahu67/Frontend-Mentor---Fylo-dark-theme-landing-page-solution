const form = document.querySelector('.access form'),
eField = form.querySelector('.field'),
eInput = eField.querySelector('input'),
submitBtn = form.querySelector('.submit-btn');

form.onsubmit = (e) => {
    e.preventDefault();

    if(eInput.value === '' || eInput.value.trim() === '') {
        eField.classList.add('error');
    } else {
        checkEmail();
    }

    eInput.onkeyup = () => {
        checkEmail();
    }

    function checkEmail() {
        const pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;  // pattern to recognize email

        if(!eInput.value.match(pattern)) {
            eField.classList.add('error');
        } else {
            eField.classList.remove('error');
        }
    }

    if(!eField.classList.contains('error')) {
        alert('Thank you for providing your email address.. We will send you the free access id within 1 hour😇');
        eInput.value = '';
        eField.classList.remove('error');
    }
}