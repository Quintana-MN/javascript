const minSum = num => {
    num.sort((a, b) => a - b)
    return num[0] + num[1]
}

console.log(minSum([7,4,2,3]))