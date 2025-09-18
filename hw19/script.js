function outerFunction() {
  let message = "Привет!";

  function innerFunction() {
    console.log(message);
  }
  return innerFunction; 
}
const func = outerFunction();
func();


function outer() {
  let a = "Как дела?";

  function middle() {
    let b = "У меня всё хорошо.";

    function inner() {
      let c = "Спасибо!";
      console.log(a); 
      console.log(b); 
      console.log(c); 
    }
    inner();
  }
  middle(); 
}
outer();


function createFibonacciCalculator() {
  const cache = [0, 1]; 

  return function fib(n) {
    if (cache[n] !== undefined) {
      return cache[n];
    }

    for (let i = cache.length; i <= n; i++) {
      cache[i] = cache[i - 1] + cache[i - 2];
    }

    return cache[n];
  }
}
const fibonacci = createFibonacciCalculator();

console.log(fibonacci(0));  
console.log(fibonacci(1)); 
console.log(fibonacci(5)); 
console.log(fibonacci(10)); 
console.log(fibonacci(50)); 