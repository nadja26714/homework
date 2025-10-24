class Counter {
  #count;

  constructor() {
    this.#count = 0; 
  }

  increment() {
    this.#count++;
  }

  decrement() {
    this.#count--;
  }

  getValue() {
    return this.#count;
  }
}

const myCounter = new Counter();
myCounter.increment();
console.log(myCounter.getValue()); 
myCounter.decrement();
console.log(myCounter.getValue()); 



class EmailValidator {
  static isValid(email) {
    return typeof email === 'string' && email.includes('@');
  }
}

console.log(EmailValidator.isValid('test@gmail.com')); 
console.log(EmailValidator.isValid('invalidgmail.com'));



class Order {
  #items; 
  #total; 

  constructor(items) {
    this.#items = items; 
    this.#total = null;
  }

  #calculateTotal() {
    return this.#items.reduce((sum, item) => sum + item, 0);
  }

  getTotal() {
    this.#total = this.#calculateTotal();
    return this.#total;
  }
}

const myOrder = new Order([100, 200, 300]);
console.log(myOrder.getTotal()); 