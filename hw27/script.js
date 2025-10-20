document.getElementById('formPost').onsubmit = function(e) {
    e.preventDefault();
    const data = {
      userId: document.getElementById('userId').value,
      title: document.getElementById('title').value,
      body: document.getElementById('body').value
    };

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => {
      document.getElementById('response').textContent = JSON.stringify(data);
    });
};


document.getElementById('loadPosts').onclick = function() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(posts => {
        const ul = document.getElementById('postList');
        ul.innerHTML = '';
        posts.forEach(p => {
          ul.innerHTML += `<li>${p.title} <button onclick="deletePost(${p.id})">Удалить</button></li>`;
        });
      });
};


function deletePost(id) {
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: 'DELETE'
  }).then(res => {
    if (res.ok) {
      alert('Пост удален');
    }
  });
}


function updateUser() {
  const data = {
    name: 'Новое имя',
    username: 'new_username'
  };
  fetch('https://jsonplaceholder.typicode.com/users/1', {
    method: 'PUT',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify(data)
  })
  .then(res => res.json())
  .then(updated => {
    alert('Обновлено: ' + JSON.stringify(updated));
  });
}