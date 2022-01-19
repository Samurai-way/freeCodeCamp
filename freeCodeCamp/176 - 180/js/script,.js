/*                  176                 */

// Open your browser console.
let output = "Get this to log once in the browser console and twice in the freeCodeCamp console";
// Use console.clear() on the next line to clear the browser console.


// Use console.log() to print the output variable.
console.log(output);

// Check the two consoles to see the difference. The freeCodeCamp console should have printed the variable twice, one for each test of this challenge. The browser console should only print the variable once becuase you cleared it first.
console.clear();

/*                  177                 */

let seven = 7;
let three = "3";
console.log(seven + three);
console.log(typeof seven);
console.log(typeof three);

/*                  178             */

// 'i' and 'e' swapped in "receivables" and missing 's' in "payables"

let receivables = 10;
let payables = 8;
let netWorkingCapital = receivables - payables;
console.log(`Net working capital is: ${netWorkingCapital}`);

/*              179             */

let myArray = [1, 2, 3];
let arraySum = myArray.reduce((previous, current) =>  previous + current);
console.log(`Sum of array values is: ${arraySum}`);

/*              180                 */

let innerHtml = "<p>Click here to <a href=\"#Home\">return home</a></p>";
console.log(innerHtml);

