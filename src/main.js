//Variables declaration
let firstName = "Francis";
var age = 18;
const price = 500;
 
firstName = "John";
age = "65";
price = 600; //This will result to an error.

let lastName; //declared but not defined.
console.log(lastName); //The output will be undefined.

let year = 2019 //declared and initialized with a value.
console.log(year); // output will be 2019.

//naming variables 
let age = 16;
let _name = "Francis";
let $score = 10;

let name = 'John';
let Name = 'Joe';
console.log(name) // John
console.log(Name) // Joe

let fisrtName = "Smith"
let secondName = "Doe"
let totalScore = 18;

let firstName = "Francis";
let lastName = "Muraya";

let age = 16; //Integer
let price = 45.67; //Decial
let notANumber = NaN;

let onTime = true;
let inTime = false;

let state;
console.log(state) // output will be undefined.


let age = null; //no age


let age = 25;
let firstName = "Jane";
let bigNumber = 987589798784832934898348792;

console.log(age); //number
console.log(firstName); // string
console.log(bigNumber); //bigInt


let x = 34;
let y = 26;
console.log(x + y); // 60

let firstName = "Joe";
let lastName = "Smith";
console.log(firstName + lastName); // JoeSmith


let x = 10;
console.log(x++); // 10 (returns first, then increments)
console.log(x); // 11

let y = 10;
console.log(++y); // 11 (increments first, then returns)

let x = 10;
console.log(x--); // 10 (returns first, then increments)
console.log(x); // 9

let y = 10;
console.log(--y); // 9 (increments first, then returns)

//Operators

let age = 34;
//Adding numbers.
let x = 34;
let y = 26;
console.log(x + y); // 60

//Adding Strings
let firstName = "Joe";
let lastName = "Smith";
console.log(firstName + lastName); // JoeSmith

//Subtracting numbers.
let x = 36;
let y = 24;
console.log(x - y); // 12

//Multiplying numbers.
let x = 3;
let y = 2;
console.log(x * y); // 6

//Dividing numbers.
let x = 6;
let y = 2;
console.log(6 / 2); // 3

//Modulus
let x = 6;
let y = 2;
console.log(6 % 2); // 0

//Exponentiation
let x = 10;
let y = 4;
console.log(10 ** 4); // 10000

let x = 10;
console.log(x++); // 10 (returns first, then increments)
console.log(x); // 11

let y = 10;
console.log(++y); // 11 (increments first, then returns)

let x = 10;
console.log(x--); // 10 (returns first, then increments)
console.log(x); // 9

let y = 10;
console.log(--y); // 9 (increments first, then returns)

//Assignment Operators

let age = 34;
let age = 5;
age += 4 // age = 5 = 4;

let age = 15;
age -=5; // age = 15 -5 = 10

let x = 5;
x *= 2; // x = x * 2 → 10

let x = 15;
x /= 3; // x = x / 3 → 5  

//Comparision Operators

let a = 10;
let b = 5;
console.log(a == b); // false
console.log(a == 10); // true

console.log(7 == "7"); // true

let a = 10;
let b = 5;
console.log(a === b); // false
console.log(a === 10); // true

console.log(7 === "7"); // false

let a = 7;
let b = 3;
console.log(a != b); // true
console.log(a != 7); // false

console.log(7 != "7"); // false

let a = 10;
let b = 5;
console.log(a !== b); // true
console.log(a !== 10); // false

console.log(10 !== "10"); // true

let a = 6;
let b = 2;
console.log(a > b); // true
console.log(b > a); // false

let a = 7;
let b = 5;
console.log(a < b); // false
console.log(b < a); // true

let a = 10;
let b = 5;
console.log(a >= b); // true
console.log(b >= a); // false
console.log(10 >= 10); // true

let a = 6;
let b = 3;
console.log(a <= b); // false
console.log(b <= a); // true
console.log(7 <= 7); // true

console.log(true && true); // true
console.log(true && false); // false

console.log(true || true); // true
console.log(true || false); // true
console.log(false || false); // false

console.log(!true); // false
console.log(!false); // true

// Concantination 

let firstName = "Francis";
let lastName = "Muraya";
let fullName = firstName + lastName;
console.log("My full name is " + fullName);

let message = "Hello ";
message += "Francis.";
console.log(message);

let firstName = "Francis";
let lastName = "Muraya";
console.log(`My name is ${firstName} ${lastName}`);





