const headerTitle = document.getElementById('header-title');

headerTitle.innerHTML = '<h1>hello world<h1>';


const textElements = document.getElementsByClassName('text');

for (const element of textElements) {
  element.style.color = 'blue';
  element.style.backgroundColor = 'yellow';
};


const newParagraph = document.createElement('p');

newParagraph.textContent = 'goodbye.';

document.body.appendChild(newParagraph);


const IdToRemove = document.getElementById('remove-me');

IdToRemove.parentNode.removeChild(IdToRemove);


const link = document.querySelector('a');

link.setAttribute('href', 'https://yandex.ru');

console.log(link.getAttribute('href'));


const newElement = document.createElement('div');

newElement.classList.add('new-class');

newElement.textContent = 'new class';

const container = document.getElementById('container');

container.appendChild(newElement);


const DivElement = document.querySelector('.text');

DivElement.classList.toggle('active');

console.log(DivElement.classList.contains('active'));