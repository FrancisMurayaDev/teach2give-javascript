## Functions

A function is a block of code that performs a specific task.

Functions help write:

- modular code
- maintanable code
- reusable code

Functions can:

- be assigned to variables.
- passed as arguments.
- returned from other functions.
- stored in data structures.
- created dynamically.

Syntax of declaring a function:

```
function functionName () {
  //function body
}
```

```
function printHello () {
  console.log("Hello");
}
```

- To use a function, you need to call it.

See below:

```
function printHello () {
  console.log("Hello");
}

//calling a function

printHello();
```

### Parameters vs Arguments

- Parameter - variable declared in a function defination. It acts as placeholder for the value that will be passed to the function when the function is being called.

- Arguments - actual value passed to a function when called. Provided data that the function or mwthod will operate on.

```
function greet(name) { // name is a parameter
  console.log(`Hello ${name}`);
}

greet("Francis Muraya"); // Francis Muraya is an argument
```

### Function Return Values

- using the return keyword.

code:

```
function add(number1, number2) {
  return number1 + number2;
}

let sum = add(35, 23);
console.log(sum);
```

### Categories of Functions

#### Functions that;

- don't take parameter(s) and dont return a value.

example code:

```
function add() {
 let a = 55;
 let b = 68;
 console.log(a + b);
}

add();
```

- don't take parameter(s) but return a value.

Example:

```
function add() {
 let a = 55;
 let b = 68;
 return a + b;
}

console.log(add());
```

- take parameter(s) but dont return a value.

Example:

```
function add(a, b) {
  console.log(a + b);
}
add(5, 3);
```

- take parameter(s) and return a value.

Example:

```
function add(a, b) {
 return a + b;
}
console.log(add(5, 3));
```

### Types of Functions in JavaScript

- Function declaration

```
function add(a, b) {
 console.log(a + b);
}

add(5, 2);
```

- Function Expression/anonymous function

It is saving a function to a variable.

```
let add = function (a, b) {
 console.log(a + b);
}

add(5, 2);
```

- Arrow Functions

They were introduced in the ES6.

Simplify how we write functions.

```
let add = (a, b) => {
 return a + b;
}

console.log(add(5, 2));
```

There is no need to put the curly braces if there is only one line in the body of the arrow function.

So instead of the above, we can have:

```
let add = (a, b) => console.log(a + b);
```

Also, if there is one line in the body of arrow function and its a return statement, we can remove the return keyword:

Like this:

```
let add = (a, b) => a + b;

console.log(add(5, 2));
```

Additionally, if the arrow function has only one parameter, we can get rid of the parenthesis as shown below:

```
let square = number => number * number;

console.log(square(8)); // 64
```

- Immediately Invoked Function Expression (IIFE)

They are anonymous and are executed imediately after being defined.

They are written like this:

```
(function () {
  console.log("Hello, World!");
})();
```

They also take parameters as below:

```
(function (a, b) {
  let sum = a + b;
  let product = a + b;
  console.log(`The sum of ${a} and ${b} is ${sum}`);
  console.log(`The product of ${a} and ${b} is ${product}`);
})(5, 6);
```

#### Callback Functions

These are functions passed as arguments to other functions.

```
function greet(name, callback) {
  console.log(`Hello ${name}`);
  callback();
}

greet("Francis", function () {
  console.log("Welcome back");
});
```
