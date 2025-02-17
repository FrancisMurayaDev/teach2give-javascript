## 1. Conditionals

<p>Conditionals allow execution of diffrent blocks of code based on specific conditions</p>

#### Conditional Statements in JavaScript are:

- if statement
- if else statement
- if else ladder
- switch statement

### if statement

<p>A block of code is executed if a block of code condition is true</p>
<p>If statements syntax is written as follows:</p>

```
if (condition) {
  //a block of code to be executed is a condition is true.
}
```

<p>Here is an example Code</p>

```
let legalAge = 18;
if (age > 18) {
  console.log ('You can drive!');
}
```

### else statement

<p>It executes a code in the if block, when the condition is false, the code inside else gets executed instead.</p>

```
if (condition) {
  //code to be executed if a condition is true.
} else {
  //code to be executed if the condition is false
}
```

<p>Example Code:</p>

```
let legalAge = 16;
if (age > 18) {
  console.log ("You can drive!")
} else {
  console.log("You cant drive, wait until 18!")
}
```

### if else ladder

<p>It is used when multiple conditions need to be checked in a sequential manner.</p>

<p>The syntax is as follows:</p>

```
if (condition1) {
  //a block of code to be executed if condition1 is true.
} else if (condition2) {
  //block of code to be executed of condition2 is true.
} else {
  //code to be executed if both conditions are false.
}
```

<p>Code Example:</p>

```
let score = 70;
if (score >= 70) {
  console.log ("Grade: A");
} else if (score >= 60 && score < 70) {
  console.log("Grade: B");
} else if (score >= 50 && score < 60) {
  console.log("Grade: C");
} else if (score >= 40 && score < 50) {
  console.log ("Grade: D");
}
else {
  console.log("Fail");
}
```

### Switch Statement

<p>It is used when a variable has multiple possible values. It is cleaner than using multiple ``if else`` if conditions</p>

The syntax is as follows:

```
switch (expression) {
  case value1:
    // block of code to be executed if expression === value1
    break;
  case value2:
    // block of code to be executed if expression === value2
    break;
  default:
  // block of code to be executed if expression doesn't match any case
}
```

<p>Example in Code:</p>

```
let day = "Monday";
switch (day) {
  case "Monday":
    console.log("Start of the work week.");
    break;
  case "Friday":
    console.log("Weekend is near!");
    break;
  case "Sunday":
    console.log("It's a rest day.");
    break;
  default:
    console.log("It's a regular day.");
}
```

### Ternary Operator

<p> The operator provides a concise way of writing if-else statements in a single line.</p>

<p>The syntax is:</p>

```
condition ? expression if condition is true : expression if condition is false
```

<p>Example Code:</p>

```
const age = 25;

age > 18 ? console.log("You are an adult") : console.log("You are a child");
```
