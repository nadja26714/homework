import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const handleDecrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleIncrease = () => {
    setCount(count + 1);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Счетчик: {count}</h1>
      
      <button onClick={handleDecrease} disabled={count === 0}>
        Уменьшить
      </button>
      
      <button onClick={handleIncrease} style={{ marginLeft: '10px' }}>
        Увеличить
      </button>

      {count === 0 && (
        <p style={{ color: 'red', marginTop: '10px' }}>
          Пожалуйста, измените количество, оно не может быть равно 0
        </p>
      )}
    </div>
  );
}


import React, { useState } from 'react';

function PostFetcher() {
  const [postId, setPostId] = useState('');
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    setPostId(e.target.value);
  };

  const fetchPost = () => {
    if (!postId) {
      setError('Пожалуйста, введите ID поста');
      setPost(null);
      return;
    }

    setLoading(true);
    setError('');
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Пост не найден');
        }
        return response.json();
      })
      .then((data) => {
        setPost(data);
      })
      .catch((err) => {
        setError(err.message);
        setPost(null);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Получить пост по ID</h2>
 
      <input
        type="number"
        placeholder="Введите ID поста"
        value={postId}
        onChange={handleInputChange}
        style={{ marginRight: '10px', width: '150px' }}
      />

      <button onClick={fetchPost}>Получить пост</button>

      {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}

      {loading && <p>Загрузка...</p>}

      {post && (
        <div style={{ marginTop: '20px', border: '1px solid #ccc', padding: '10px' }}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      )}
    </div>
  );
}