const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const taskListEl = document.getElementById('taskList');
const filterButtons = document.querySelectorAll('#filters button');

let tasks = [];
let currentFilter = 'all';

window.addEventListener('load', () => {
  loadTasks();
  fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(res => res.json())
    .then(data => {
      const apiTasks = data.map(item => ({
        id: item.id,
        text: item.title,
        completed: item.completed,
        reminderTimeoutId: null
      }));
      tasks = [...tasks, ...apiTasks];
      saveTasks();
      renderTasks();
    })
    .catch(error => {
      console.error('Ошибка получения данных:', error);
      renderTasks();
    });
});

function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
  const data = localStorage.getItem('tasks');
  if (data) {
    tasks = JSON.parse(data);
  }
}

function renderTasks() {
  taskListEl.innerHTML = '';
  const filteredTasks = tasks.filter(task => {
    if (currentFilter === 'all') return true;
    if (currentFilter === 'completed') return task.completed;
    if (currentFilter === 'active') return !task.completed;
  });
  
  filteredTasks.forEach(task => {
    const li = document.createElement('li');
    li.className = 'task-item';

    const checkboxContainer = document.createElement('div');
    checkboxContainer.className = 'checkbox-container';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.completed;
    checkbox.addEventListener('change', () => {
      task.completed = checkbox.checked;
      saveTasks();

      const remindBtn = li.querySelector('.reminder-btn');
      if (remindBtn) {
        if (task.completed) {
          remindBtn.style.display = 'none';
        } else {
          remindBtn.style.display = '';
        }
      }
    });
    checkboxContainer.appendChild(checkbox);

    const span = document.createElement('span');
    span.className = 'task-text';
    span.textContent = task.text;
    if (task.completed) {
      span.classList.add('completed');
    }

    const buttonsDiv = document.createElement('div');
    buttonsDiv.className = 'task-buttons';

    const remindBtn = document.createElement('button');
    remindBtn.textContent = 'Напомнить';
    remindBtn.className = 'reminder-btn';
    remindBtn.title = 'Через 1 минуту';

    if (task.completed) {
      remindBtn.style.display = 'none';
    }

    remindBtn.addEventListener('click', () => {
      if (task.reminderTimeoutId) clearTimeout(task.reminderTimeoutId);
      task.reminderTimeoutId = setTimeout(() => {
        alert('Напоминание: ' + task.text);
        task.reminderTimeoutId = null;
        saveTasks();
      }, 60000);
      saveTasks();
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Удалить';
    deleteBtn.className = 'delete-btn';
    deleteBtn.title = 'Удалить задачу';
    deleteBtn.addEventListener('click', () => {
      if (task.reminderTimeoutId) clearTimeout(task.reminderTimeoutId);
      tasks = tasks.filter(t => t.id !== task.id);
      saveTasks();
      renderTasks();
    });

    buttonsDiv.appendChild(remindBtn);
    buttonsDiv.appendChild(deleteBtn);

    li.appendChild(checkboxContainer);
    li.appendChild(span);
    li.appendChild(buttonsDiv);

    taskListEl.appendChild(li);
  });
}

taskForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const text = taskInput.value.trim();
  if (text === '') return;
  const newTask = {
    id: Date.now(),
    text,
    completed: false,
    reminderTimeoutId: null
  };
  tasks.push(newTask);
  saveTasks();
  renderTasks();
  taskInput.value = '';
});

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelector('#filters button.active').classList.remove('active');
    btn.classList.add('active');
    currentFilter = btn.dataset.filter;
    renderTasks();
  });
});