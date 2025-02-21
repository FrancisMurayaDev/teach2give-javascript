# JavaScript Classes
- Before ES6 (2015), JavaScript did not have a formal class keyword.

- With ES6, JavaScript introduced the class syntax, making OOP more structured.

- A class refers to the blueprint of an object.

## Creating a Class
 - To create a class in JavaScript, you use the class keyword followed by the class name. 
 
 - Inside the class, you define a constructor method to initialize object properties.

 ```js
 class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`My name is ${this.name}`);
  }
}
```

The `constructor` method initializes the object's properties.

## Creating instances of a class

To create an instance of a class, use the `new` keyword.

```js
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`My name is ${this.name}`);
  }
}

const user1 = new User("John Doe", 25);
user1.greet(); // My name is John Doe
```