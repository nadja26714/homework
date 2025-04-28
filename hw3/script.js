const number = 2;

if (number <0 ) {
	console.log('отрицательное число');
} else if (number >=1 ) {
	console.log('положительное число');
} else {
    console.log ('ноль')
}

const weight = 57;
const height = 1.63;

const a = Math.pow(height,2);
const result = weight / a;

if (result <18.5) {
    console.log ('дефицит веса')
} else if (result <= 24.9) {
    console.log ('норма веса')
} else if (result <= 29.9) {
    console.log ('предожирение')
} else {
    console.log ('ожирение')
}


const month = Number(prompt('напиши число месяца'));
let monthName;

switch (month) {
    case 1:
        monthName = 'Январь';
        break;
    case 2:
        monthName = 'Февраль';
        break;
    case 3:
        monthName = 'Март';
        break;
    case 4:
        monthName = 'Апрель';
        break;
    case 5:
        monthName = 'Май';
        break;
    case 6:
        monthName = 'Июнь';
        break;
    case 7:
        monthName = 'Июль';
        break;
    case 8:
        monthName = 'Август';
        break;
     case 9:
        monthName = 'Сентябрь';
        break;
    case 10:
        monthName = 'Октябрь';
        break;
    case 11:
        monthName = 'Ноябрь';
        break;
    case 12:
        monthName = 'Декабрь';
        break;
    default:
        monthName = 'Неверный месяц';
}
console.log(monthName)


const fruits = prompt('напиши какой фрукт хочешь')

switch (fruits) {
    case 'апельсин':
      console.log('апельсин стоит 100 рублей за килограмм.');
      break;
    case 'яблоко':
      console.log('яблоко стоит 50 рублей за килограмм.');
      break;
    case 'банан':
      console.log('банан стоит 200 рублей за килограмм.');
      break;
    case 'вишня':
      console.log('вишня стоит 1000 рублей за килограмм.');
      break;
    case 'манго':
    case 'ананас':
      console.log('вишня стоит 600 рублей за килограмм.');
      break;
    default:
      console.log('Извините, у нас нету ' +fruits+ '.');
  }






