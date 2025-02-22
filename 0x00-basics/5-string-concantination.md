# String Concantination

String concatenation is the process of joining two or more strings together.

## 3 ways of Creating Strings

1. single quotes `' '`
```js
'Good Morning`
```
- Its a recommended way.

2. Double Quotes

```js
"Good Morning"
```
3. Escape Character `/'` 
- `/n` creates a new line.

4. Back Ticks 
- Also called template strings.


### Ways of Concatinating Strings.

#### 1. Using the (+) Operator.

```
let firstName = "Francis";
let lastName = "Muraya";
let fullName = firstName + lastName;
console.log("My full name is " + fullName);
```

#### 2. Using the += operator to append to an existing string.

```
let message = "Hello ";
message += "Francis.";
console.log(message);
```

#### 3. Using Template Literals.

Template literals (introduced in ES6) use backticks (`) and '${}' placeholders for variables.

Interpolation `${}` - helps insert a value directly inside to a string. 

Template strings are also multi-line strings.

```
let firstName = "Francis";
let lastName = "Muraya";
console.log(`My name is ${firstName} ${lastName}`);
```

- To check what `typeof` a value something is, we use:

typeof `value`

```js
typeof 2; //number

typeof 'hello'; //string
```

- Adding a string and a number, JavaScript will convert the number into a string.
This is also called `type conversion`.


