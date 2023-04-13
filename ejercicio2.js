const names = [Pedro, Carlos, Agustin, Martina, Sol]

function namesForDelete(names){
console.log(names)
console.splice(2, 3, 4)
console.log(names)
}

namesForDelete(names)