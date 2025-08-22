const processArray = (numbers) => {
  return numbers.map(num => num * num);
};

const inputArray = [1, 2, 3, 4, 5];
const resultArray = processArray(inputArray);
console.log(resultArray);



const myObject = {
  name: 'Надежда',
  greet: function() {
    setTimeout(() => {
      console.log(this.name);
    }, 1000);
  }
};

myObject.greet();



const applyFunction = (fn, arr) => arr.map(x => fn(x));

const numbers = [1, 2, 3];
const double = x => x * 2;

console.log(applyFunction(double, numbers)); 