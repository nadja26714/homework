class Book {
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }

  getInfo() {
    return `Название: ${this.title}, автор: ${this.author}, страниц: ${this.pages}`;
  }
}

const book1 = new Book('Война и мир', 'Лев Толстой', 1225);
console.log(book1.getInfo()); 



class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  displayInfo() {
    console.log(`Имя: ${this.name}, Email: ${this.email}`);
  }
}

const user1 = new User('Иван Иванов', 'ivan@gmail.com');
const user2 = new User('Мария Петрова', 'maria@gmail.com');

user1.displayInfo(); 
user2.displayInfo(); 



class Rectangle {
  constructor(width, height) {
    this.width = width;
    this._height = height; 
  }

  get perimeter() {
    return 2 * (this.width + this._height);
  }

  get height() {
    return this._height;
  }

  set height(value) {
    if (value > 0) {
      this._height = value;
    } else {
      console.error('Ошибка: высота должна быть больше 0.');
    }
  }
}

const rect = new Rectangle(10, 5);
console.log(rect.perimeter); 
rect.height = 8; 
console.log(rect.perimeter); 
rect.height = -3; 
