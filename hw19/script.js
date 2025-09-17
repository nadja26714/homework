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


function fibonacci(n) {
  const fib = [0, 1]; 

  if (n < 2) {
    return fib[n];
  }

  for (let i = 2; i <= n; i++) {
    fib.push(fib[i - 1] + fib[i - 2]); 
  }

  return fib[n];
}

console.log(fibonacci(7));  
console.log(fibonacci(10)); 
