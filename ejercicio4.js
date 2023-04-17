const newArray = number => {
    const array = [0]
    for(i = 0; i < number; i++){
        array.push(i);
    }
    return array;
}

console.log(newArray(10))