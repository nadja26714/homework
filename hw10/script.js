//1. Найдите с помощью break points ошибку в коде этой функции и исправьте ее:

function hasEvenNumber(arr) {
  for (let i = 0; i < arr.length; i++) {

    if (arr[i] % 2 === 0) {

      return true;
    }
  }
  return false;
}

console.log(hasEvenNumber([1, 3, 4, 5])); 

//2. Найдите с помощью debugger ошибку в коде этой функции и исправьте ее:

function calculateAverage(numbers) {

  let sum = 0;

  for (let i = 0; i < numbers.length; i++) { 

    sum += numbers[i];
  }

  return sum / numbers.length;
}

console.log(calculateAverage([2, 4, 6]));

//3. Найдите с помощью console.log ошибку в коде этой функции и исправьте ее:

function findLargestNumber(arr) {

  if (arr.length === 0) return undefined; 
  let largest = arr[0];

  for (let i = 1; i < arr.length; i++) {

    if (arr[i] > largest) {

      largest = arr[i];
    }
  }
  return largest;
}

console.log(findLargestNumber([-10, -20, -30]));



