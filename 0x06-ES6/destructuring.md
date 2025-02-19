## Destructuring

- It is a convenient way to extract values from arrays or objects and assign them to variables in a single line.

### Destructing Arrays

```js
const numbers = [1, 2, 3];
const [first, second, third] = numbers;

console.log(first); // 1
console.log(second); // 2
console.log(third); // 3
```

We can skip values when destructing:

```js
const numbers = [1, 2, 3];
const [, , third] = numbers;

console.log(third); // 3
```

We can use the rest operator to collect remaining elements into an array during destructuring:

```js
const numbers = [1, 2, 3, 4, 5, 6, 7];
const [first, second, ...others] = numbers;
console.log(others); // [ 3, 4, 5, 6, 7 ]
```

We can also use destructing to swap variables:

```js
let a = 1,
  b = 2;

[a, b] = [b, a];

console.log(a); // 2
console.log(b); // 1
```

### Destructuring Objects

```js
const person = {
  name: "Alice",
  age: 25,
};

const { name, age } = person;

console.log(name); // Alice
console.log(age); // 25
```

You can also rename variables when destructuring objects:

```js
const person = {
  name: "Alice",
  age: 25,
};

const { name: firstName, age: yearsSinceBirth } = person;

console.log(firstName); // Alice
console.log(yearsSinceBirth); // 25
```

You can assign default value if the variable does not exist in an object:

```js
const person = {
  name: "Alice",
  age: 25,
};

const {
  name: firstName,
  age: yearsSinceBirth,
  major = "Computer Science",
} = person;

console.log(firstName); // Alice
console.log(yearsSinceBirth); // 25
console.log(major); // Computer Science
```

We can use rest operator to gather the remaining properties of an object during destructuring:

```js
const person = {
  firstName: "Alice",
  lastName: "Doe",
  dateOfBirth: 2000,
  major: "Computer Science",
  profession: "Web Developer",
};

const { firstName, lastName, ...otherDetails } = person;
console.log(otherDetails);
// {
//   dateOfBirth: 2000,
//   major: 'Computer Science',
//   profession: 'Web Developer'
// }
```
