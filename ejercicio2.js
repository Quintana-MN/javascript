const numbers = [13, 54, 76, 89, 62, 77, -89]

function numbersForDelete(numbers){

    if(numbers.length < 5) return "tu array debe tener como mínimo 5 elementos"
console.log(numbers)
numbers.splice(-3)
console.log(numbers)

}

console.log(numbersForDelete(numbers))