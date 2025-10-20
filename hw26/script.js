const form = document.getElementById('form');
const res = document.getElementById('result');

window.onload = () => {
  const data = localStorage.getItem('contact');
  if (data) {
    const c = JSON.parse(data);
    res.textContent = `Имя: ${c.name}, Телефон: ${c.phone}, Email: ${c.email}`;
  }
};

form.onclick = (e) => e.stopPropagation(); 

form.onsubmit = e => {
  e.preventDefault();
  const contact = {
    name: form.name.value,
    phone: form.phone.value,
    email: form.email.value
  };
  localStorage.setItem('contact', JSON.stringify(contact));
  res.textContent = `Имя: ${contact.name}, Телефон: ${contact.phone}, Email: ${contact.email}`;
};


const form = document.getElementById('expForm');
const list = document.getElementById('list');

let expenses = JSON.parse(localStorage.getItem('expenses')) || [];

function render() {
  list.innerHTML = '';
  expenses.forEach((e,i) => {
    const li = document.createElement('li');
    li.textContent = `${e.desc}, ${e.sum}, ${e.dat}`;
    const btn = document.createElement('button');
    btn.textContent = 'X';
    btn.onclick = () => {
      expenses.splice(i,1);
      localStorage.setItem('expenses', JSON.stringify(expenses));
      render();
    };
    li.appendChild(btn);
    list.appendChild(li);
  });
}

form.onsubmit = e => {
  e.preventDefault();
  expenses.push({
    desc: form.desc.value,
    sum: form.sum.value,
    dat: form.dat.value
  });
  localStorage.setItem('expenses', JSON.stringify(expenses));
  render();
  form.reset();
};

render();


const display = document.getElementById('time');
let seconds = +sessionStorage.getItem('seconds') || 0;

function tick() {
  seconds++;
  display.textContent = seconds;
  sessionStorage.setItem('seconds', seconds);
}

setInterval(tick, 1000);