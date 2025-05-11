for (let i = 1; i < 11; i++) {
    console.log(i);
} 

let i = 1;
let sum = 0;

while (i <= 100) {
    sum = sum + i;
    i++;
}
 console.log (sum)



let number = 100;
 
isPrime:
for (let i = 2; i <= number; i++) { 
 
  for (let j = 2; j < i; j++) { 
    if (i % j == 0) continue isPrime; 
  }
 
  console.log(i); 
}
