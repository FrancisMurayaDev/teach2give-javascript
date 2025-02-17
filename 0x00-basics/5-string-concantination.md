# String Concantination 
String concatenation is the process of joining two or more strings together.
### Ways of Concantinating Strings.

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

```
let firstName = "Francis";
let lastName = "Muraya";
console.log(`My name is ${firstName} ${lastName}`);
```




