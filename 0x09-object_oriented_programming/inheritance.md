# Inheritance

- Inheritance allows one class to inherit properties and methods from another class.

- This helps in code reusability and hierarchical structuring of objects.

- In JavaScript, inheritance is implemented using the `extends` keyword with ES6 classes.

- Inheritance is used when there is a "is-a" relationship (e.g., A Car is a Vehicle, A Dog is an Animal).

- Inheritance helps avoid code duplication when multiple classes share common behavior.

```js
class Animal {
  constructor(numLegs, numEyes) {
    this.numLegs = numLegs;
    this.numEyes = numEyes;
  }

  move() {
    console.log(`Animal looking at the road with ${this.numEyes} eyes`);
    console.log(`Animal moving with ${this.numLegs} legs`);
  }

  eat() {
    console.log(`Animal eating for survival`);
  }
}

class Cow extends Animal {
  constructor(numLegs, numEyes, breed, gender) {
    super(numLegs, numEyes); // calls the parent constructor
    this.breed = breed;
    this.gender = gender;
  }

  sound() {
    console.log(`The ${this.gender} ${this.breed} cow is mooing`);
  }
}

const myCow = new Cow(4, 2, "Guernsey", "Male");
myCow.move();
myCow.eat();
myCow.sound();
```

# Polymorphism

- Polymorphism allows an entity of an object-oriented code such as a variable or a method to have more than one form.

Polymorphism in object-oriented programming is achieved through:

- Method overriding: child class provides its own implementation of a method that it has inherited.

- Method overloading: feature that allows multiple methods in the same class to have the same name but different parameters, not really supported in JavaScript but can be demonstrated.

Implementing polymorphism with method overriding:

```js
class Math {
  add(number1, number2) {
    return number1 + number2;
  }
}

class Arithmetics extends Math {
  add(number1, number2) {
    if (number1 < 0) {
      console.log("Can only add positive numbers");
    } else if (number2 < 0) {
      console.log("Can only add positive numbers");
    } else {
      console.log(number1 + number2);
    }
  }
}

const arithmetic = new Arithmetics();
arithmetic.add(-5, 5);
arithmetic.add(5, -5);
arithmetic.add(5, 5);
```

