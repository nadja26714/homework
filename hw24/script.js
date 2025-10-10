async function delay(ms) {
  await new Promise(resolve => setTimeout(resolve, ms));
  console.log("Задержка завершена");
}

delay(2000);


async function fetchUserData() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
  const data = await response.json();
  return data;
}

fetchUserData().then(user => {
  console.log(user);
});
