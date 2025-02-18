## Objects

- In JS, an object is a collection of key-value pairs.

It is a data-structure that stores values as a collection of key value pairs.

- The key should be a string and the value of any type. 

- Keys are also referred to as properties. 

- Objects are important data structures in JavaScript. 

- A function inside an object is called a method.

### Creating Objects

1. Using Objects Literal.

It uses curly brackets. 

```js
const student = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
  isStillStudying: true,
  greet: function () {
    console.log("Hello, World!");
  },
};
```

2. Using <i>new Object() </i>

<i>new Objects()</i> creates a empty object. Rarely used in modern JS.

```js
const student = new Object();
student.firstName = "John";
student.lastName = "Doe";
student.age = 25;
student.isStillStudying = true;
student.greet = function () {
  console.log("Hello, World!");
};
```

3. Using a constructor function.

It is a regular function used with the <i>new</i> keyword to create multiple multiple objects with shared properties and methods.

```js
function Student(firstName, lastName, age, isStillStudying) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.isStillStudying = isStillStudying;
  this.greet = function () {
    console.log("Hello, World!");
  };
}

const student = new Student("John", "Doe", 25, true);
```

Always use object literals.


### Accessing Object Properties 

1. Dot Notation

- access object property using a dot(.), followed by a property name.

```js
const student = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
  isStillStudying: true,
  greet: function () {
    console.log("Hello, World!");
  },
};

console.log(student.firstName); // John
console.log(student.lastName); // Doe
```

2. Bracket Notation

Accessing an object using square brackets [], with property name as string.

Useful for dynamic keys or properties with special characters.

```js
const student = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
  isStillStudying: true,
  greet: function () {
    console.log("Hello, World!");
  },
};

console.log(student["firstName"]); // John
console.log(student["lastName"]); // Doe
console.log(student["age"]); // 25
console.log(student["isStillStudying"]); // true
```


### Modifying Objects.

1. Adding new properties

- using dot or bracket notation to add new properties to an object.

```js
const student = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
  isStillStudying: true,
  greet: function () {
    console.log("Hello, World!");
  },
};

student.major = "Computer Science";
student["graduationYear"] = 2026;
```

2. Updating a Property.

```js
const student = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
  isStillStudying: true,
  greet: function () {
    console.log("Hello, World!");
  },
};

student.age = 37;
student["isStillStudying"] = false;
```

3. Deleting a Property.

```js
const student = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
  isStillStudying: true,
  greet: function () {
    console.log("Hello, World!");
  },
};

delete student.age;
delete student.isStillStudying;
```


### Checking Properties in an Object.

- To check whether a certain property is available. 
- We use: 

1. in keyword

```js
const student = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
  isStillStudying: true,
  greet: function () {
    console.log("Hello, World!");
  },
};

console.log("firstName" in student); // true
console.log("middleName" in student); // false
```

2. hasOwnProperty() method.

```js
const student = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
  isStillStudying: true,
  greet: function () {
    console.log("Hello, World!");
  },
};

console.log(student.hasOwnProperty("firstName")); // true
console.log(student.hasOwnProperty("middleName")); // false
```

### Object Methods.

1. object.keys(objectName)

Returns an array containing all the keys of an object.

```js
const student = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
  isStillStudying: true,
  greet: function () {
    console.log("Hello, World!");
  },
};

console.log(Object.keys(student));
// [ 'firstName', 'lastName', 'age', 'isStillStudying', 'greet' ]

```

2. Object.values(objectName)

Returns an array containing all the values of an object.

```js
const student = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
  isStillStudying: true,
  greet: function () {
    console.log("Hello, World!");
  },
};

console.log(Object.values(student));
// [ 'John', 'Doe', 25, true, [Function: greet] ]
```

3. Object.entries(objectName)

Object.entries() returns an array of key-value pairs from an object, making it useful for iteration.

```js
const student = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
  isStillStudying: true,
  greet: function () {
    console.log("Hello, World!");
  },
};

console.log(Object.entries(student));
// [
//     [ 'firstName', 'John' ],
//     [ 'lastName', 'Doe' ],
//     [ 'age', 25 ],
//     [ 'isStillStudying', true ],
//     [ 'greet', [Function: greet] ]
// ]
```

4. Object.freeze(objectName)

Freezes an object.
- prevents new properties from being added to it and existing ones from being removed.

- it prevents an object modification.

```js
const student = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
  isStillStudying: true,
  greet: function () {
    console.log("Hello, World!");
  },
};

Object.freeze(student);
student.middleName = "Smith"; // won't work
```

### Iterating over an Object using the for..in loop.

You can use the for--in loop to iterate over an object as below:

The for..in loop can be used to loop over arrays.

```js
const student = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
  isStillStudying: true,
  greet: function () {
    console.log("Hello, World!");
  },
};

for (let key in student) {
  console.log(key)
}
```
