function sumArray(arr) {
  if (arr.length === 0) {
    return 0;
  }
  return arr[0] + sumArray(arr.slice(1));
}

console.log(sumArray([1, 2, 3, 4, 5])); 



function findMax(arr) {
  if (arr.length === 0) return null;

  if (arr.length === 1) return arr[0];

  const maxRest = findMax(arr.slice(1));
  return arr[0] > maxRest ? arr[0] : maxRest;
}

console.log(findMax([4, 7, 2, 9, 3])); 



function createFibonacci() {
  const cache = { 0: 0, 1: 1 }; 

  function fib(n) {
    if (cache[n] !== undefined) {
      return cache[n]; 
    }
    cache[n] = fib(n - 1) + fib(n - 2);
    return cache[n];
  }

  return fib;
}

const fibonacci = createFibonacci();

console.log(fibonacci(0));  
console.log(fibonacci(1));  
console.log(fibonacci(5));  
console.log(fibonacci(10)); 
console.log(fibonacci(50)); 
