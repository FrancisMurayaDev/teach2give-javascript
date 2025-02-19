## Template Literals.

Known as template strings. - they use backticks (``) instead of single or double quotes.

Introduced inES6, to make working with strings more flexible and readable.

They allow:

- Multi-line string without `/n`.
- String Interpolation (injecting variables to strings.)

- Embedded expressions.

1. String Interpolation: Injecting variables into strings.

Before ES6, concatenation (+) was used.

Template literals made this easier.

Before Template Literals:

```js
const username = "Dennis";
const age = 25;

console.log("My name is " + username + " and I am " + age + " years old.");
// My name is Dennis and I am 25 years old.
```

With Template Literals:

```js
const name = "Dennis";
const age = 25;

console.log(`My name is ${name} and I am ${age} years old.`);
// My name is Dennis and I am 25 years old.
```

2. Multi-line strings (No need for \n)

Before ES6, multi-line strings required `/n` or joining with `+`:

Before:

```js
const multiLine = "This is line 1\n" + "This is line 2\n" + "This is line 3";

console.log(multiLine);
/*
This is line 1
This is line 2
This is line 3
*/
```

After:

```js
const multiLine = `This is line 1
This is line 2
This is line 3`;

console.log(multiLine);
/*
This is line 1
This is line 2
This is line 3
*/
```

3. Expression inside template Literals.

Template literals can evaluate expressions directly inside ${}.

```js
let a = 10;
let b = 20;

function product(number1, number2) {
  return number1 * number2;
}

console.log(
  `The sum of ${a} and ${b} is ${a + b} and the product is ${product(a, b)}`
);
```
