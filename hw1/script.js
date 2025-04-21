const person = "Nadia";
console.log (typeof person)

const age = 29;
console.log (typeof age)

const isSheGirl = true;
console.log (typeof isSheGirl)

let x
console.log (x)

const y = null;
console.log (y)

const sweets = ["buiscuit", "candypop", "icecream"];

console.log (typeof sweets);

const animal = {

    type: "cat",

    age: 2,

    isDangerous: false
};

console.log (typeof animal)


let number = 100

let number2 = number

console.log (number, number2)

number2 = 10

console.log (number, number2)

//только второе значение меняется ,потому что каждая переменная имеет разное хранилище.

const someValue = {
    name: 'Nadia'
}
const someValue2 = someValue

console.log (someValue,someValue2)

someValue2.name = 'Kevin'

console.log (someValue,someValue2)

//если я изменю значение в ссылке, то все переменные, которые связаны- также изменятся






