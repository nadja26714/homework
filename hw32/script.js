const obj = {};

Object.defineProperty(obj, 'prop', {
  value: 'текст',
  writable: false 
});

console.log(obj.prop);

obj.prop = 'новое';

console.log(obj.prop); 

//Вывод: менять свойство нельзя.



const obj = {
  visibleProp: 'будет видно',
  anotherProp: 1
};

Object.defineProperty(obj, 'hiddenProp', {
  value: 'не видно в цикле',
  enumerable: false 
});

for (let key in obj) {
  console.log(key); 
}

console.log(obj.hiddenProp); 