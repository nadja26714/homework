function countdown(seconds) {
  function tick(remaining) {
    if (remaining >= 0) {
      console.log(`Осталось: ${remaining} секунд`);
      setTimeout(() => tick(remaining - 1), 1000);
    } else {
      console.log('Время вышло!');
    }
  }
  tick(seconds);
}

countdown(5);


function remindToDrinkWater() {
  const interval = 30 * 60 * 1000; 
  setInterval(() => {
    console.log("Не забудь выпить воды!");
  }, interval);
}

remindToDrinkWater();

const button = document.getElementById('startStop');
const delayInput = document.getElementById('delay');
const textInput = document.getElementById('text');

let interval = null;

button.onclick = () => {
    if (interval) {
        clearInterval(interval);
        interval = null;
        button.textContent = 'Начать';
    } else {
        const delayValue = delayInput.value.trim();
        const delay = parseInt(delayValue, 10);
        const text = textInput.value;

        if (isNaN(delay) || delay < 100) {
            alert('Пожалуйста, введите число, которое не меньше 100 миллисекунд.');
            return;
        }

        interval = setInterval(() => {
            console.log(text);
        }, delay);
        button.textContent = 'Стоп';
    }
};