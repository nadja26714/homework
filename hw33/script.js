class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }
  
  showInfo() {
    console.log(`Автомобиль: ${this.brand} ${this.model}`);
  }
}

const car1 = new Car('Toyota', 'Camry');
const car2 = new Car('Honda', 'Civic');

car1.showInfo(); 
car2.showInfo(); 



class ElectricCar extends Car {
  constructor(brand, model, batteryCapacity) {
    super(brand, model);
    this.batteryCapacity = batteryCapacity; 
  }
  
  showInfo() {
    console.log(`Электромобиль: ${this.brand} ${this.model}, батарея: ${this.batteryCapacity} кВтч`);
  }
}

const electricCar = new ElectricCar('Tesla', 'Model S', 100);
electricCar.showInfo();




class Animal {
  speak() {
    console.log('Животное издает звук');
  }
}

class Dog extends Animal {
  speak() {
    console.log('Гав-гав');
  }
}

class Cat extends Animal {
  speak() {
    console.log('Мяу');
  }
}

const animals = [new Animal(), new Dog(), new Cat()];

for (let animal of animals) {
  animal.speak(); 
}