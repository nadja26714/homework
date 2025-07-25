const button = document.getElementById('button');

button.addEventListener('click', function()  {
    button.textContent = 'button-clicked';
});

const header = document.getElementById('header');

header.addEventListener('mouseover', function() {
    header.style.fontSize = '50px';
    header.style.color = 'yellow';
});

header.addEventListener('mouseout', function() {
    header.style.fontSize = '';
    header.style.color = '';
});

const input = document.getElementById('myInput');

input.addEventListener('keyup', function(event) {
    console.log('keyup:', event.key);
});

 const form = document.getElementById('myForm');
 
 form.addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Форма успешно отправлена!');
});


const button2 = document.getElementById('toggleThemeBtn');

button2.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
});