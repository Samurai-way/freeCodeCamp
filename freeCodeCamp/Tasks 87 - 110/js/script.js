/*              Task 87                    */
const testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
  };

const playerNumber = 16;  
const player = testObj[playerNumber];

/*              Task 88                     */
const myDog = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
};

myDog.name = "Happy Coder";

/*             Task 89                  */

const myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
};
myDog.bark = "Gav-gav";

/*              Task 90                 */

const myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"],
    "bark": "woof"
};
delete myDog.tails;

/*                 Task 91              */

function phoneticLookup(val) {
var result = "";
var lookup = {
      "alpha": "Adams",
      "bravo": "Boston",
      "charlie": "Chicago",
      "delta": "Denver",
      "echo": "Easy",
      "foxtrot": "Frank"
};
result = lookup[val];
return result;
}
  
phoneticLookup("charlie");

/*              Task 92                 */

function checkObj(obj, checkProp) {
    if (obj.hasOwnProperty(checkProp)) {
      return obj[checkProp];
    } else {
      return "Not Found";
    }
}

/*              Task 93                 */

let myMusic = [
{
      artist: "Billy Joel",
      title: "Piano Man",
      release_year: 1973,
      formats: ["CD", "8T", "LP"],
      gold: true
},
    
{
      artist: "Deep Purple",
      title: "Smoke on the water",
      release_year: 1976,
      formats: ["CD", "8T", "LP"]
}
];

/*              Task 94                 */

let myStorage = {
    "car": {
      "inside": {
        "glove box": "maps",
        "passenger seat": "crumbs"
    },
      "outside": {
        "trunk": "jack"
    }
}
};
  
let gloveBoxContents = myStorage.car.inside['glove box'];

/*                  Task 95                 */

const myPlants = [
    {
      type: "flowers",
      list: [
        "rose",
        "tulip",
        "dandelion"
    ]
    },
    {
      type: "trees",
      list: [
        "fir",
        "pine",
        "birch"
    ]
}
];
  
let secondTree = myPlants[1].list[1];

/*                      Task 96             */

const recordCollection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
};
  
  function updateRecords(records, id, prop, value) {
    if (value === '') {
      delete records[id][prop];
    } else if (prop === 'tracks') {
      records[id][prop] = records[id][prop] || []; 
    } else {
      records[id][prop] = value;
    }
    return records;
}

/*                      Task 97         */

const myArray = [];

let i = 5;
while(i >= 0) {
  myArray.push(i);
  i--;
}

/*                      Task 98         */

const myArray = [];
for (let i = 1; i < 6; i++) {
  myArray.push(i);
}

/*                      Task 99         */

const myArray = [];

for (let i = 1; i < 10; i+=2) {
  myArray.push(i);
}
  
/*                         Task 100     */

const myArray = [];

for (let i = 9;  i > 0;  i-= 2){
  myArray.push(i);
}

/*                      Task 101    */

const myArr = [2, 3, 4, 5, 6];

let total = 0;
for (let i = 0; i < myArr.length; i++) {
  total += myArr[i];
}

/*                  Task 102        */

function multiplyAll(arr) {
    var product = 1;
    for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j < arr[i].length; j++) {
        product = product * arr[i][j];
      }
    }
    return product;
  }
  
  multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);

/*                  Task 103            */

const myArray = [];
let i = 10;

do {
  myArray.push(i);
  i++;
}
  while (i < 5) {
}

/*                  Task 104            */

function sum(arr, n) {
    if(n <= 0) {
      return 0;
    } else {
      return sum(arr, n - 1) + arr[n - 1];
    }
}

/*                  Task 105           */

const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
  ];
  
  function lookUpProfile(name, prop) {
    for (let i = 0; i < contacts.length; i++) {
      if (contacts[i].firstName === name) {
        if (prop in contacts[i]) {
          return contacts[i][prop];
        } else {
          return "No such property";
        }
      }
    }
    return "No such contact";
  }
  
  lookUpProfile("Akira", "likes");

/*                  Task 106            */

function randomFraction() {
    return Math.random(randomFraction);
  }

/*                  Task 107            */

function randomWholeNum() {
    return Math.floor(Math.random() * 10);
}

/*              Task 108            */

function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);
}

/*              Task 109        */

function convertToInteger(str) {
    return parseInt(str);
}
  
convertToInteger("56");

/*              Task 110            */

function convertToInteger(str) {
    return parseInt(str, 2)
}
  
convertToInteger("10011");


