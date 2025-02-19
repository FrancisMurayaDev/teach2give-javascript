## Object Literal Enhancements

ES6 introduced several enhancements to object literals making it easier and more concise to create and work with objects.

These enhancements include:

### Shorthand Property Names

If a variable name matches the property name, you can omit the value assignment.

Before ES6 code:

```js
const firstName = "John";
const lastName = "Doe";
const age = 25;

const user = { firstName: firstName, lastName: lastName, age: age }; //correct
console.log(user); // { firstName: 'John', lastName: 'Doe', age: 25 }
```

After ES6 CODE:

```js
const firstName = "John";
const lastName = "Doe";
const age = 25;

const user = { firstName, lastName, age }; // correct
console.log(user); // { firstName: 'John', lastName: 'Doe', age: 25 }
```

### Method Shorthand

You can define methods in an object without using the `function` keyword.

Before ES6 Code:

```js
const user = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
  introduction: function () {
    console.log(`My name is ${this.firstName} ${this.lastName}`);
  },
};
user.introduction();
```

After ES6 Code:

```js
const user = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
  introduction() {
    console.log(`My name is ${this.firstName} ${this.lastName}`);
  },
};
user.introduction();
```

### Computed Property Names

You can use expressions as property names by wrapping then in a square brackets [].

```js
const user = {
  ["first" + "Name"]: "John",
  lastName: "Doe",
  age: 25,
};
console.log(user); // { firstName: 'John', lastName: 'Doe', age: 25 }
```
