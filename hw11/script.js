const person = {
    name: 'Надежда',
    surname: 'Подгорная',
    age: 29,
    hobbies: ['рисование', 'чтение'],
    contacts: {
        email: 'nadja26777@gmail.com',
        phone: [111111 , 22222]
    }
};

for (let key in person) {
    console.log (person[key])
}

console.log (person.name);

console.log (person.hobbies[0]);

console.log (Object.keys(person));

console.log (Object.values(person));

person['age'] = 22;

person.city = 'Псков';

delete person.surname;

console.log (person);

console.log (Object.entries(person));

console.log (person.contacts.phone[1]);


