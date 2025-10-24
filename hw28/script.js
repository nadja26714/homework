"use strict";

function add(a, b) {
  let sum = a + b; 
  return sum;
}


function sum(a, b) {
  return a + b;
}


function showThis() {
  console.log(this);
}

showThis(); 


const obj = {};
delete obj.toString;

//delete удаляет только свойства, созданные в объекте.
//метод toString — внутри прототипа, и его нельзя удалить так.