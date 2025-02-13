# Variables

- Variables are like a container that holds a piece of information. 
- You can retrieve the information later.
- Value is the piece of data stored inside a Variable.
- It can be a number, function, string, boolean, array or an object.

## There are 3 ways to declare Variables:

1. Var
2. Let
3. Const

```
//Variables declaration

let firstName = "Francis";
var age = 18;
const price = 500;
```
<p>With var and let, we can update the value of the variable, or change it. const cannot be changed once assigned. </p>

```
firstName = "John";
age = "65";
price = 600; //This will result to an error.
```
### Declaring VS. Initializing Variables.
#### Declaring Variables
<p>It is creating a variable without assigning it a value.</p>

```
let lastName; //declared but not defined.
console.log(lastName); //The output will be undefined.
```
#### Initializing Variables
<p>It means assigning the variable a value at the time of declaration.</p>

```
let year = 2019 //declared and initialized with a value.
console.log(year); // output will be 2019.
```

## Rules for Naming Variables
<p>Variables names can only start with a small letter, underscore or a dollar-sign.</p>

```
let age = 16;
let _name = "Francis";
let $score = 10;
```
<p>It is essential to note that variables names cannot use JavaScript reserved words such as function, let, var e.t.c. </p>
<p>Variables should not contain spaces or special characters.</p>

<p>JavaScript is also case sensitive. Even if the below names are the same, they are treated as separate variables.</p>

```
let name = 'John';
let Name = 'Joe';
console.log(name) // John
console.log(Name) // Joe
```

<p>It is a good practice to use descriptive names. We use camelCase verse for names that are more than one.</p>

```
let fisrtName = "Smith"
let secondName = "Doe"
let totalScore = 18;
```