const firstInput = document.querySelector(`input`)

firstInput.addEventListener('input', function (letters) {
    letters.target.value = letters.target.value.replace(/[^a-zA-Z]/g, '');
});

const twoInput = document.querySelector(`input[name="last-name"]`) 

twoInput.addEventListener('input', function (letters) {
    letters.target.value = letters.target.value.replace(/[^a-zA-Z]/g, '');
});


const modalAccept = document.querySelector(`.accept`);
const modalCancel = document.querySelector(`.close`);
const modal = document.querySelector(`.modal`);

modalAccept.addEventListener(`click`, () => {
    alert(`You accepted the terms and conditions of the page!`)
    return modal.remove(`.modal`)
})

modalCancel.addEventListener(`click`, () => {
    modal.remove(`.modal`)
})