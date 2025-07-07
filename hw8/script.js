function isPalindrome(str) {
  const reversed = str.split('').reverse().join('');
  return str === reversed;
}
console.log(isPalindrome("шалаш"))
console.log(isPalindrome("привет"));   


function findShortestWord(sentence) {
  return sentence.split(' ').sort((a, b) => a.length - b.length)[0];
}
console.log(findShortestWord("Я люблю программировать")); 


function createPhoneNumber(number) {
  const s = number.toString();
  return `8 (${s.slice(0,3)}) ${s.slice(3,6)}-${s.slice(6,9)}`;
}
console.log(createPhoneNumber(123456789)); 


function findMinAndMax(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  return { min, max };
}
const numbers = [7, 1, 9, 4];
const result = findMinAndMax(numbers);
console.log(result);


function sortArray(arr) {
  return arr.slice().sort((a, b) => a - b);
}
const array = [2, 9, 1, 5];
const sortedArray = sortArray(array);
console.log(sortedArray); 