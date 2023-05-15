const firstInput = document.querySelector(`input`)

firstInput.addEventListener('input', function (letters) {
    letters.target.value = letters.target.value.replace(/[^a-zA-Z]/g, '');
});

const twoInput = document.querySelector(`input[name="last-name"]`) 

twoInput.addEventListener('input', function (letters) {
    letters.target.value = letters.target.value.replace(/[^a-zA-Z]/g, '');
});