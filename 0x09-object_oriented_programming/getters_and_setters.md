# Getters and Setters

Getters and Setters are special methods that allow controlled access to an object's properties.

They enable data encapsulation by restricting direct access and enforcing validation.

- Getters (`get`): retrieve a property value.

- Setters (`set`): modifies a property value while allowing validation.

Example of a class without getters and setters:

```js
class User {
  constructor(name) {
    this.name = name; // Direct access
  }
}

const user = new User("Dennis");
console.log(user.name); // "Dennis"

user.name = 42; // No validation, allows invalid data
console.log(user.name); // 42 (Not ideal)
```

In this example, there is no control over setting the name, so invalid values like numbers can be assigned.

The solution is to use Getters and Setters:

```js
class User {
  constructor(name) {
    this._name = name; // Private property convention (_name)
  }

  // Getter (retrieves the value)
  get name() {
    return this._name;
  }

  // Setter (validates and updates the value)
  set name(newName) {
    if (typeof newName !== "string") {
      console.error("Name must be a string!");
      return;
    }
    this._name = newName;
  }
}

const user = new User("Dennis");

// Using the getter
console.log(user.name); // "Dennis"

// Using the setter
user.name = "John"; // Updates successfully
console.log(user.name); // "John"

user.name = 42; // Error: Name must be a string!
```


