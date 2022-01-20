/*              181                 */

let innerHtml = "<p>Click here to <a href=\"#Home\">return home</a></p>";
console.log(innerHtml);

/*                  182                 */

let x = 7;
let y = 9;
let result = "to come";

if (x == y) {
  result = "Equal!";
} else {
  result = "Not equal!";
}

console.log(result);

/*              183                     */

function getNine() {
    let x = 6;
    let y = 3;
    return x + y;
  }
  
  let result = getNine();
  console.log(result);

  /*                    184                 */

  function raiseToPower(b, e) {
    return Math.pow(b, e);
  }
  
  let base = 2;
  let exp = 3;
  let power = raiseToPower(base, exp);
  console.log(power);

/*                  185                     */

function countToFive() {
    let firstFive = "12345";
    let len = firstFive.length;
    // Fix the line below
    for (let i = 0; i < len; i++) {
      // Do not alter code below this line
      console.log(firstFive[i]);
    }
  }

/*                  186                     */

function zeroArray(m, n) {
    let newArray = [];
    for (let i = 0; i < m; i++) {
      let row = []; 
      for (let j = 0; j < n; j++) {
        row.push(0);
      }
      newArray.push(row);
    }
    return newArray;
  }
  let matrix = zeroArray(3, 2);
  console.log(matrix);

/*                  187                     */

function myFunc() {
    for (let i = 1; i <= 4; i += 2) {
      console.log("Still going!");
    }
  }

/*                  188                         */

let yourArray = ["a", 2, true, "c", null, { name: "john" }]; 


/*                  189                         */

let myArray = ["a", "b", "c", "d"];
myArray[1] = "anything we want";
console.log(myArray);

/*                  190                         */

function mixedNumbers(arr) {
    arr.unshift("I", 2, "three");
    arr.push(7, "VIII", 9);
    return arr;
  }
  console.log(mixedNumbers(["IV", 5, "six"]));

