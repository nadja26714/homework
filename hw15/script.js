const student = {
  name: 'Надя',
  age: 29,
  subjects: ['Математика', 'История'],
  address: {
    city: 'Псков',
    street: 'Ленина'
  }
};

const studentCopy1 = Object.assign({}, student);

const studentCopy2 = {...student};

studentCopy1.subjects.push('Биология');

studentCopy2.address.city = 'Москва';

console.log('Копия 1:', studentCopy1);
console.log('Копия 2:', studentCopy2);
console.log('Оригинал:', student);

//При поверхностном копировании вложенные объекты и массивы остаются общими для оригинала и копии.
//Поэтому любые изменения внутри них затрагивают оба объекта.

const originalUser = {
    name: "Nadia",
    age: 30,
    address: {
       city: "Riga",
       zip: "12345"
    },
    sayHi: () => console.log('Hello, Nadia!')
};

const clonedUser = JSON.parse(JSON.stringify(originalUser));

clonedUser.address.city = 'Ogre';

clonedUser.name = 'Alise';

console.log(clonedUser)
console.log(originalUser)

//Использование JSON для копирования объектов удобно только для данных без методов и сложных типов данных.
//свойство sayHi исчезает при преобразовании.


function deepCopy(obj) {
// Если переданный аргумент — это не объект или это null, то просто возвращаю его.
// Потому что примитивы копируются по значению,
// и их копировать отдельно не нужно.
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }

// Создаю новую переменную, которая будет содержать копию.
// Если исходный объект — массив, создаю пустой массив.
// Если это обычный объект — создаю пустой объект.
    const copy = Array.isArray(obj) ? [] : {};

// Теперь нужно пройти по всем свойствам объекта.
    for (let key in obj) {

// Проверяю, что свойство принадлежит именно этому объекту,
// а не унаследовано от прототипа. Это важно, чтобы копия была чистой.
        if (obj.hasOwnProperty(key)) {
            
// Для каждого свойства вызываю deepCopy рекурсивно,
// чтобы скопировать вложенные объекты или массивы полностью.
            copy[key] = deepCopy(obj[key]);
        }
    }

// Когда все свойства обработаны, возвращаю полученную копию.
    return copy;
}