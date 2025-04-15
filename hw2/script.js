const result = 2 * 2 + 2;
console.log(result);

const x = Math.sin(54);
const y = Math.cos(16);
const result1 = ((x*y)**2)
console.log(Math.ceil(result1));


const a = 13.2 * 71.90;
const b = Math.sqrt(a);
const c = Math.pow(7,4);
const d = 2.4 / c;
const e = (16 * b) / d;

const part = e + Math.pow(3, Math.sqrt(49));
const result2 = part * Math.pow(2, 7);
console.log(Math.ceil(result2)); 

const num1 = 10;
const num2 = 25;
const num3 = 30;
const num4 = 45;

if (num1 % 2 == 0) {
	console.log('четное');
} else {
	console.log('нечетное');
}

if (num2 % 2 == 0) {
	console.log('четное');
} else {
	console.log('нечетное');
}

if (num3 % 2 == 0) {
	console.log('четное');
} else {
	console.log('нечетное');
}

if (num4 % 2 == 0) {
	console.log('четное');
} else {
	console.log('нечетное');
}


const name = ''

if (!name) {
	console.log('Hello,Guest!');
} else {
	console.log ('Hello, '+name+'!')
}
