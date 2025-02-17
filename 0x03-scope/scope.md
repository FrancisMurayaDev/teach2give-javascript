## Scope

- Scope in JS determined where variables are accessible.

JavaScript has the folowing types of scope.

1. Global Scope
2. Function Scope (local scope)
3. Block Scope (introduced in ES6)

### 1. Global Scope

A variable declared outside any function is globally accessible.

It can be accessed anywhere in the JavaScript program.

```
let age = 25;

function exampleFunction() {
  console.log(age); // accessible inside function
}

exampleFunction(); // 25
console.log(age); // accessible outside function too
```


### 2. Function Scope

Functions declared within a function are only accesible within that function.

They cannot be accessed outside the function.

```
function exampleFunction() {
  let age = 25;
  console.log(age); // works inside the function
}

console.log(age); // ReferenceError: age is not defined
```

### 3. Block Scope

Before ES6, JS only had global scope and function scope. 

The var keyword did not support scope.

A block is code inside curly brackets {}. Example in if, for, while statements.


```
if (true) {
  let age = 25;
  console.log(age); // works inside the block
}
console.log(age); // age is not defined
```

Variables declared with let and const are only accesible inside the block they are declared in.

var does not follow block scope.

### 4. Lexical Scope

Lexical scope means that a function can access variables from its parent scope. Example: Parent Function.


```
function parentFunction() {
  let age = 25;
  function innerFunction() {
    console.log(age); // 25
  }
  innerFunction();
}

parentFunction();
```