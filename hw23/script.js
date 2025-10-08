function getUserData() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('Данные пользователя');
    }, 2000);
  });
}

getUserData().then(data => {
  console.log(data);
});



function fetchData3Sec() {
  return new Promise(resolve => {
    setTimeout(() => resolve('Данные за 3 сек'), 3000);
  });
}

function fetchData5Sec() {
  return new Promise(resolve => {
    setTimeout(() => resolve('Данные за 5 сек'), 5000);
  });
}

Promise.all([fetchData3Sec(), fetchData5Sec()]).then(results => {
  console.log(results[0]);
  console.log(results[1]);
});




function getRandomDelayPromise(name) {
  const delay = Math.floor(Math.random() * 5000) + 1000; 
  return new Promise(resolve => {
    setTimeout(() => resolve(`${name} завершился за ${delay} мс`), delay);
  });
}

const p1 = getRandomDelayPromise('Промис 1');
const p2 = getRandomDelayPromise('Промис 2');

Promise.race([p1, p2]).then(result => {
  console.log(result);
});