function average() {
  let sum = 0; 
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i]; 
  }
  return sum / arguments.length; 
}
console.log(average(1, 2, 3));


function UserInfo(user) {
  return 'Имя: ' + user.name + ', Возраст: ' + user.age + ', Страна: ' + user.country;
}

const user = { name: 'Надя', age: 29, country: 'Россия' };
console.log(UserInfo(user));


const data = {
  person: {
    name: 'Надя',
    contacts: {
      email: 'nadja@gmail.com',
      phones: ['12345', '67890']
    }
  },
  hobbies: ['рисование', 'чтение']
};

console.log(data.person.name); 
console.log(data.person.contacts.email);
console.log(data.person.contacts.phones[0]); 
console.log(data.hobbies); 


const oldArray = [2, 3];

const newArray = [1, ...oldArray, 4];
console.log(newArray);


const obj = { a: 1, b: 2, c: 3 };

const { b, ...newObj } = obj;

console.log(newObj); 