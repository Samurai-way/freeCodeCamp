              Task 24              

let a = 48;
let b = 108;
let c = 33;

// Змініть код лише під цим рядком
a /= 12;
b /= 4;
c /= 11;

            Task 25

var myStr = "I am a \"double quoted\" string inside \"double quotes\".";
       
            Task 26

var myStr = '<a href="http://www.example.com" target="_blank">Link</a>';

              Task 27

var myStr = "FirstLine\n\t\\SecondLine\nThirdLine";

              Task 28

const myStr = "This is the start. " + "This is the end.";

              Task 29

var myStr = "This is the first sentence. ";
myStr += "This is the second sentence.";

              Task 30

// Змініть код лише під цим рядком
const myName = "Oleg";
const myStr = "My name is " + myName + "and I am well!";

              Task 31

// Змініть код під цим рядком
const someAdjective = "difficult but rewarding!";
let myStr = "Learning to code is ";
myStr += someAdjective;


              Task 32

// Налаштування
let lastNameLength = 0;
const lastName = "Lovelace";

// Змініть код лише під цим рядком
lastNameLength = lastName.length;

              Task 33

// Налаштування
let firstLetterOfLastName = "";
const lastName = "Lovelace";

// Змініть код лише під цим рядком
firstLetterOfLastName = lastName[0]; // Змініть цей рядок

            Task 34

            // Налаштування
let myStr = "Jello World";

// Змініть код лише під цим рядком
myStr = "Hello World"; // Змініть цей рядок
// Змініть код лише над цим рядком

              Task 35

// Налаштування
const lastName = "Lovelace";

// Змініть код лише під цим рядком
const thirdLetterOfLastName = lastName[2]; // Змініть цей рядок

            Task 36

// Налаштування
const lastName = "Lovelace";

// Змініть код лише під цим рядком
const lastLetterOfLastName = lastName[lastName.length - 1]; // Змініть цей рядок

            Task 37

// Налаштування
const lastName = "Lovelace";

// Змініть код лише під цим рядком
const lastLetterOfLastName = lastName[lastName.length - 1]; // Змініть цей рядок

            Task 38

const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

// Змініть код лише під цим рядком
var wordBlanks = "The " + myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb + "."; // Змініть цей рядок
// Змініть код лише над цим рядком

            Task 39

// Змініть код лише під цим рядком
const myArray = ['Vasia', 2, 3];

            Task 40

// Змініть код лише під цим рядком
const myArray = [['Petia', 25, 'Grisha', 29]];

            Task 41

const myArray = [50, 60, 70];
const myData = myArray[0];

            Task 42

// Налаштування
const myArray = [18, 64, 99];

// Змініть код лише під цим рядком
myArray[0] = 45;

            Task 43

const myArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
  ];
  
const myData = myArray[2][1];

            Task 44

// Налаштування
const myArray = [["John", 23], ["cat", 2]];

// Змініть код лише під цим рядком
myArray.push(["dog", 3]);

            Task 45

// Налаштування
const myArray = [["John", 23], ["cat", 2]];

// Змініть код лише під цим рядком
const removedFromMyArray = myArray.pop();

            Task 46

// Налаштування
const myArray = [["John", 23], ["dog", 3]];

// Змініть код лише під цим рядком
const removedFromMyArray = myArray.shift();

            Task 47

// Налаштування
const myArray = [["John", 23], ["dog", 3]];
myArray.shift();

// Змініть код лише під цим рядком
myArray.unshift(["Paul", 35]);

            Task 48

const myList = [
    ["Canned Beans", 3],
    ["Milk Galon", 1],
    ["Cereal", 2],
    ["Toilet Paper", 12],
    ["Sack of Rice", 1]
];
         
            Task 49

function reusableFunction() {
    console.log("Hi World");
}
reusableFunction();

            Task 50

function functionWithArgs(num1, num2) {
    console.log(num1 + num2);
}
  
functionWithArgs(1, 2);

            Task 51

function timesFive(num) {
    return num * 5;
}
timesFive(5);

            Task 52

// Вкажіть змінну myGlobal під цим рядком
let myGlobal = 10;

function fun1() {
  // Призначте 5 oopsGlobal тут
oopsGlobal = 5;
}

// Змініть код лише над цим рядком

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}


            Task 53

function myLocalScope() {
  // Змініть код лише під цим рядком
const myVar = 
  console.log('inside myLocalScope', myVar);
}
myLocalScope();

// Запустіть та перевірте консоль
// myVar не визначений за межеми myLocalScope
console.log('outside myLocalScope', myVar);

            Task 54
// Налаштування
const outerWear = "T-Shirt";
function myOutfit() {
  // Змініть код лише під цим рядком
let outerWear = "sweater";
  // Змініть код лише над цим рядком
  return outerWear;
}
myOutfit();

            Task 55
// Налаштування
let sum = 0;
function addThree() {
  sum = sum + 3;
}

// Змініть код лише під цим рядком
function addFive() {
  sum = sum + 5;
}
// Змініть код лише над цим рядком
addThree();
addFive();

            Task 56

// Налаштування
let processed = 0;
function processArg(num) {
  return (num + 3) / 5;
}
// Змініть код лише під цим рядком
processed = processArg(7);

            Task 57

function nextInLine(arr, item) {
    arr.push(item);
    const temp = arr.shift();
    return temp; 
    }
    let testArr = [1,2,3,4,5];
    // Відобразити код
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));  

            Task 58

function welcomeToBooleans() {
    // Змініть код лише під цим рядком
  
    return true; // Змініть цей рядок
  
    // Змініть код лише над цим рядком
}

            Task 59

function trueOrFalse(wasThatTrue) {
    // Змініть код лише під цим рядком
    if (wasThatTrue) {
      return "Yes, that was true";
    }
      return "No, that was false";
  
    // Змініть код лише над цим рядком
  
}

            Task 60

// Налаштування
function testEqual(val) {
    if (val == 12) { // Змініть цей рядок
      return "Equal";
    }
    return "Not Equal";
  }
  
  testEqual(10);

            Task 61

// Налаштування
function testStrict(val) {
    if (val === 7) { // Змініть цей рядок
      return "Equal";
    }
    return "Not Equal";
  }
  
  testStrict(10);

            Task 62

// Налаштування
function compareEquality(a, b) {
    if (a === b) { // Змініть цей рядок
      return "Equal";
    }
    return "Not Equal";
  }
  
  compareEquality(10, "10");

            Task 63

// Налаштування
function testNotEqual(val) {
    if (val != 99) { // Змініть цей рядок
      return "Not Equal";
    }
    return "Equal";
  }
  
  testNotEqual(10);

            Task 64

// Налаштування
function testStrictNotEqual(val) {
    if (val !== 17) { // Змініть цей рядок
      return "Not Equal";
    }
    return "Equal";
  }
  
  testStrictNotEqual(10);

            Task 65

// Налаштування
function testStrictNotEqual(val) {
    if (val !== 17) { // Змініть цей рядок
      return "Not Equal";
    }
    return "Equal";
  }
  
  testStrictNotEqual(10);

            Task 66

function testGreaterThan(val) {
    if (val > 100) {  // Змініть цей рядок
      return "Over 100";
    }
  
    if (val > 10) {  // Змініть цей рядок
      return "Over 10";
    }
  
    return "10 or Under";
  }
  
  testGreaterThan(10);

            Task 67

function testGreaterOrEqual(val) {
    if (val >= 20) {  // Змініть цей рядок
      return "20 or Over";
    }
  
    if (val >= 10)  {  // Змініть цей рядок
      return "10 or Over";
    }
  
    return "Less than 10";
  }
  
  testGreaterOrEqual(10);

            Task 68

function testLessThan(val) {
    if (val < 25) {  // Змініть цей рядок
      return "Under 25";
    }
  
    if (val < 55) {  // Змініть цей рядок
      return "Under 55";
    }
  
    return "55 or Over";
  }
  
  testLessThan(10);

            Task 69

function testLessOrEqual(val) {
    if (val <= 12) {  // Змініть цей рядок
      return "Smaller Than or Equal to 12";
    }
  
    if (val <= 24) {  // Змініть цей рядок
      return "Smaller Than or Equal to 24";
    }
  
    return "More Than 24";
  }
  
  testLessOrEqual(10);

            Task 70

function testLogicalAnd(val) {
    // Змініть код лише під цим рядком
    if (val <= 50 && val >= 25) {
      return "Yes";
    }
    // Змініть код лише над цим рядком
    return "No";
  }
  
  testLogicalAnd(10);

            Task 71

function testLogicalOr(val) {
    // Змініть код лише під цим рядком
    if (val < 10 || val > 20) {
    return "Outside";
  }
  
    // Змініть код лише над цим рядком
    return "Inside";
  }
  
  testLogicalOr(15);

            Task 72

function testElse(val) {
    let result = "";
    // Змініть код лише під цим рядком
    if (val > 5) {
      result = "Bigger than 5";
    } else {
      result = "5 or Smaller";
    }
    // Змініть код лише над цим рядком
    return result;
  }
  
  testElse(4);

            Task 73

function testElseIf(val) {
    if (val > 10) {
      return "Greater than 10";
    }
    else if (val < 5) {
      return "Smaller than 5";
    }
    else {
    return "Between 5 and 10";    
    }
    
  }
  
  testElseIf(7);

            Task 74

function orderMyLogic(val) {
    if(val < 5) {
      return "Less than 5";
    } else if (val < 10) {
      return "Less than 10";
    } else {
      return "Greater than or equal to 10";
    }
  }

            Task 75

function testSize(num) {
    // Змініть код лише під цим рядком
    if (num < 5) {
      return "Tiny";
    } else if (num < 10) {
      return "Small";
    } else if (num < 15) {
      return "Medium";
    } else if (num < 20) {
      return "Large";
    } else {
      return "Huge";
    }
    // Змініть код лише над цим рядком
  }
  
  testSize(7);

            Task 76

const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"

function golfScore(par, strokes) {
  // Змініть код лише під цим рядком
if (strokes == 1) {
    return names[0];
  } else if (strokes <= par - 2) {
    return names[1];
  } else if (strokes == par - 1) {
    return names[2];
  } else if (strokes == par) {
    return names[3];
  } else if (strokes == par + 1) {
    return names[4];
  } else if (strokes == par + 2) {
    return names[5];
  } else {
    return names[6];
}

golfScore(5, 4);

            Task 77

function caseInSwitch(val) {
    var answer = "";
    switch (val) {
      case 1:
        return "alpha";
        break;
      case 2:
        return "beta";
        break;
      case 3:
        return "gamma";
        break;
      case 4:
        return "delta";
        break;
    }
    return answer;
  }
  caseInSwitch(1);

            Task 78

function switchOfStuff(val) {
      let answer = "";
      // Змініть код лише під цим рядком
      switch (val) {
        case "a":
          answer = "apple";
          break;
        case "b":
          answer = "bird";
          break;
        case "c":
          answer = "cat";
          break;
        default:
          answer = "stuff";
      }
     
    
      // Змініть код лише над цим рядком
      return answer;
    }
    
    switchOfStuff(1);

                Task 79

function sequentialSizes(val) {
    var answer = "";
    switch (val) {
      case 1:
      case 2:
      case 3:
        return "Low";
        break;
      case 4:
      case 5:
      case 6:
        return "Mid";
        break;
      case 7:
      case 8:
      case 9:
        return "High";
        break;
    }
    return answer;
  }
  sequentialSizes(1);

                Task 80

    function chainToSwitch(val) {
let answer = "";
    switch (val) {
    case "bob":
    answer = "Marley";
    break;
    case 42:
    answer = "The Answer";
    break;
    case 1:
    answer = "There is no #1";
    break;
    case 99:
    answer = "Missed me by this much!";
    break;
    case 7:
    answer = "Ate Nine";
    break;
}
    return answer;
}
chainToSwitch(7);


                Task 81

function isLess(a, b) {
    return a <= b;
}
isLess(10, 15);

                Task 82

// Налаштування
function abTest(a, b) {
    // Змініть код лише під цим рядком
  if (a < 0 || b < 0) {
      return undefined;
}
  
  
    // Змініть код лише над цим рядком
  
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}
  
  abTest(2,2);

                Task 83

let count = 0;
function cc(card) {
    switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
        count++;
        break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
    count--;
    break;
}
    if (count > 0) {
    return count + " Bet";
    } else {
    return count + " Hold";
    }
}
                
cc(2); cc(3); cc(7); cc('K'); cc('A');

                Task 84

const myDog = {
    name: 'Petro',
    legs: 4,
    tails: 5,
    "friends": ['Vasia', 'Valera']
};

            Task 85

const testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
};
  let hatValue = testObj.hat;    
  let shirtValue = testObj.shirt;
  
            Task 86

const testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
};

  const entreeValue = testObj["an entree"];   // Змініть цей рядок
  const drinkValue = testObj["the drink"];    // Змініть цей рядок