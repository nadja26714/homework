form.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Форма отправлена (реализация зависит от задач)');
});

document.getElementById('outer').addEventListener('click', () => {
    console.log('Outer div clicked');
});

document.getElementById('middle').addEventListener('click', (event) => {
    console.log('Middle div clicked');
    event.stopPropagation(); 
});

document.getElementById('inner').addEventListener('click', () => {
    console.log('Inner div clicked');
});



const form = document.getElementById('myForm');

form.addEventListener('input', (event) => {
    const target = event.target;
    if (target.tagName.toLowerCase() === 'input') {
        if (target.value.length > 20) {
            target.style.borderColor = 'red';
            console.log(`Ошибка: длина поля "${target.name}" больше 20 символов`);
        } else {
            target.style.borderColor = ''; 
        }
    }
});



form.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Форма отправлена (реализация зависит от задач)');
});