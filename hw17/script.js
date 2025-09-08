const person = {
  name: 'Надя',
  age: 29,
  greet() {
    console.log(`Привет, меня зовут ${this.name} и мне ${this.age} лет.`);
  }
};

person.greet(); 

const greetFunction = person.greet;
greetFunction(); 
//Когда вызываешь метод через объект — всё хорошо, this ссылается на этот объект.
//Но если скопировать метод в переменную и вызвать её — this уже не знает, к чему относится, и свойства становятся undefined.
//Чтобы сохранить связь, нужно использовать bind.



const student = {

  name: 'Alice',

  

  greet: function() {

    console.log(`Hello, ${this.name}!`);

  },



  delayedGreet: function() {

    setTimeout(this.greet, 1000);

  }

};

student.greet() // Hello, Alice
student.delayedGreet() // Hello, undefined 

//В первом случае student.greet() работает, потому что this — это сам объект student.
//Во втором случае setTimeout вызывает функцию отдельно, и this там уже не student, а undefined, поэтому имя не выводится.
//Чтобы исправить, можно внутри delayedGreet использовать стрелочную функцию, которая сохраняет this


function sayName() {
  console.log('Меня зовут ' + this.name);
}

const person1 = { name: 'Надя' };

sayName.call(person1); 

sayName.apply(person1);

const sayNameNadia = sayName.bind(person1);
sayNameNadia(); 





function sayHello() {

    console.log('Hello, ' + this.name)

}



const admin = {

    name: 'Bob'

};



const user = {

    name: 'John'

};



const sayHelloToAdmin = sayHello.bind(admin)

sayHelloToAdmin()



const sayHelloToUser = sayHelloToAdmin.bind(user)

sayHelloToUser()


//bind фиксирует this навсегда.
//Если привязать функцию к admin, потом нельзя изменить this на user.
//Поэтому обе функции выводят имя admin — «Bob».
//Чтобы получить имя user, нужно вызвать bind на исходной функции, а не на уже привязанной.