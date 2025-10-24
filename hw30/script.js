class Person {
  constructor(name) {
    this.name = name;
  }

  introduce() {
    console.log(`Привет, меня зовут ${this.name}`);
  }
}

class Student extends Person {
  constructor(name, course) {
    super(name);
    this.course = course;
  }

  introduce() {
    console.log(`Привет, меня зовут ${this.name}, и я учусь на ${this.course} курсе`);
  }
}

const student = new Student('Алексей', 3);
student.introduce();

console.log(Student.prototype);



class Employee extends Person {
  constructor(name, position) {
    super(name);
    this.position = position;
  }

  work() {
    console.log(`Я работаю на позиции ${this.position}`);
  }

  introduce() {
    console.log(`Привет, меня зовут ${this.name}, и я работаю на позиции ${this.position}`);
  }
}

const emp = new Employee('Надя', 'Продавец');
emp.introduce();
emp.work();



const Vehicle = {
  move() {
    console.log('Машина движется');
  }
};

const Car = Object.create(Vehicle);
Car.drive = function() {
  console.log('Автомобиль водит');
};

Car.move();  
Car.drive(); 