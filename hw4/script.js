for (let i = 1; i < 11; i++) {
    console.log(i);
} 

let i = 1;
while (i < 101) {
    console.log(i);
   
    i++;
}

let number = 100;
 
isPrime:
for (let i = 2; i <= number; i++) { 
 
  for (let j = 2; j < i; j++) { 
    if (i % j == 0) continue isPrime; 
  }
 
  console.log(i); 
}
