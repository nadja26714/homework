const numbers = [2, 3];

const sum = numbers.map(num => num * num);

console.log (sum);


const numbers2 = [1, 2, 2, 3, 4, 5, 5, 5, 6];

const unique = numbers2.filter((a, b) => numbers2.indexOf(a) === b);

console.log (unique);


const numbers3 = [1, 2, 3];

const sum3 = numbers3.reduce((total, num) => total + num, 0); 

console.log (sum3);


const numbers4 = [1, 2, 3, 4, 5];

const reversed = numbers4.reduce((a, b) => [b, ...a], []);

console.log(reversed);


let age = 2;

age = 3;

console.log(age)

const animal = 'cat';

animal = 'dog';

console.log(animal)

//В первой варианте, когда я создавала две переменные, я могла изменять значения let, но не могла изменять значения const


let num = [2,3,4];

num.push(5)

num.splice(1,1)

console.log(num)

num = [6]

console.log(num)

//здесь в массиве я могу изменять let значения, добавлять и удалять элементы 

const animals = ['cat','dog']

animals.push ('bird')

animals.splice(1,1)

console.log(animals)

animals = ['fish']

console.log(animals)

//Здесь я могу только добавлять, удалять элементы, делать с ними все, что захочу. но я все еще не могу изменить значения const.






