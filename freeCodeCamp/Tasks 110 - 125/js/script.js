/*                 Task 110             */
function checkEqual(a, b) {
    return a === b ? "Equal" : "Not Equal";
  }
  
  checkEqual(1, 2);

/*                  Task 111            */

function checkSign(num) {
    return num > 0 ? "positive"
      : num < 0 ? "negative"
      : "zero";
}

/*              Task 112            */

function countdown(n) {
    if (n < 1) {
      return [];
    } else {
      const arr = countdown(n - 1);
      arr.unshift(n);
      return arr;
    }
}

/*              Task 113            */

function rangeOfNumbers(startNum, endNum) {
    if (endNum - startNum === 0) {
      return [startNum];
    } else {
      var numbers = rangeOfNumbers(startNum, endNum - 1);
      numbers.push(endNum);
      return numbers;
    }
}

/*              Task 114            */
function checkScope() {
    "use strict";
    let i = "function scope";
    if (true) {
      let i = "block scope";
      console.log("Block scope i is: ", i);
    }
    console.log("Function scope i is: ", i);
    return i;
}

/*              Task 115            */

const s = [5, 7, 2];
function editInPlace() {
  "use strict"
  s[0] =  2;
  s[1] =  5;
  s[2] =  7;
}
editInPlace();

/*              Task 116            */

function freezeObj() {
    const MATH_CONSTANTS = {
      PI: 3.14
    };
    Object.freeze(MATH_CONSTANTS);
    try {
      MATH_CONSTANTS.PI = 99;
    } catch(ex) {
      console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}
const PI = freezeObj();

/*              Task 117            */

const magic = () => new Date();

/*                  Task 118        */

const myConcat = (arr1, arr2) => {
    "use strict";
    return arr1.concat(arr2);
};
console.log(myConcat([1, 2], [3, 4, 5]));

/*                  Task 119            */

const increment = (number, value = 1) => number + value;
console.log(increment(5, 2));
console.log(increment(5));

/*              Task 120                */

const sum = (...args) => {
    return args.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3)); 

/*              Task 121            */

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
arr2 = [...arr1];
console.log(arr2);

/*              Task 122            */

const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
};
const {today, tomorrow} = HIGH_TEMPERATURES;

/*              Task 123            */

const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
}
const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES;
console.log(highToday); 
console.log(highTomorrow);

/*              Task 124            */

const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
};
const { today: { low: lowToday, high: highToday }} = LOCAL_FORECAST;

/*              Task 125            */

let a = 8, b = 6;
[a, b] = [b, a];



