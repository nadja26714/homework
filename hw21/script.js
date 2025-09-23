function safeDivide(a, b) {
  try {
    if (b === 0) {
      throw new Error("Деление на ноль невозможно");
    }
    return a / b;
  } catch (error) {
    console.error(error.message);
    return null; 
  }
}

console.log(safeDivide(10, 2)); 
console.log(safeDivide(10, 0)); 
  


function transformJSON(str) {
  try {
    return JSON.parse(str);
  } catch (error) {
    console.log("Ошибка-неправильный формат JSON");
    console.log("Подробности ошибки:", error.message);
    return null;
  }
}

console.log(transformJSON('{"name":"Анна"}'));      
console.log(transformJSON('невалидный JSON'));  



function checkAccess(age) {
  try {
    if (age < 18) {
      throw new Error("Доступ запрещен");
    }
    console.log("Доступ разрешен");
  } catch (error) {
    console.error(error.message);
  }
}

checkAccess(20); 
checkAccess(15); 


