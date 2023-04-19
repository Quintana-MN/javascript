const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const maxAdjacentProduct = (numbers) => {
  const productArray = numbers.map((number,i) => number * numbers[i+1]).slice(0,-1)
  return Math.max(...productArray)
}

console.log(maxAdjacentProduct(numbers))