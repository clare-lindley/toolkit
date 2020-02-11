function squareSum(numbers){


  return numbers.map((element) => Math.pow(element, 2))
  .reduce((accumulator, currentElement) => accumulator + currentElement,0);
}

// How can we simplify it?
// function squareSum(numbers){
//   return numbers.reduce(function(sum, n){
//     return (n*n) + sum;
//   },0)
// }

squareSum([1,2])
