"use strict";

function add(a, b) {
  let sum = a + b; 
  return sum;
}

"use strict";

function sum(a, b) {
  return a + b;
}

"use strict";

function showThis() {
  console.log(this);
}

showThis(); 

"use strict";

const obj = {};
delete obj.toString;