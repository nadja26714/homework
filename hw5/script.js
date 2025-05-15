const text = 'Javascript is fun';
console.log (text.includes('fun'))

let item = ''
if (!item) {
  console.log('hello')
} 

const firstName = 'John'
const lastName = 'Doe'
const occupation = 'software developer'
console.log (`Hello, my name is ${firstName} ${lastName}. I am a ${occupation}.`)

let x = undefined
let y = null
console.log (x == y);
console.log (x === y);
//В первом примере null и undefined считаются равными, 
// потому что они оба представляют пустие значения.
//В втором примере они считаются разными, потому что они различны по типу, null это тип 'object'

const sum = 1 + '1';
console.log (sum)
// как будто оба являются числами, но тот, что в скобках, будет преобразован в строку,
//  независимо от того, является ли он символом или строкой ,так что они будут складываться вместе, а не суммироваться