const sheepAndWolf = ([`sheep", "sheep", "sheep", "wolf", "sheep"`])
const sheepAndWolf2 = ([`sheep", "sheep", "sheep", "wolf`])

const warnTheSheep = (arraySheepsWolf) => {
    const wolfIndex = arraySheepsWolf.findIndex(Object => Object === "wolf");
    let sheepIndex = arraySheepsWolf.length - wolfIndex -1;

if(wolfIndex === arraySheepsWolf - 1){
    return `¡No sigas comiendo Ovejas!`;
} 
else {
    return `¡Hey Oveja numero ${sheepIndex}! El lobo esta cerca`
 }
}

console.log(warnTheSheep(sheepAndWolf))
console.log(warnTheSheep(sheepAndWolf2))