## 2. Loops

#### Loops allow execution of a code multiple times.

### The Loops in JavaScript are:

- for Loop
- while loop
- do while loop

### 1. for loop

<p>It us used when the number of times a block of code should be run is known.</p>

<p> It follows this syntax:</p>

```
for (initialization; condition;update) {//code
}
```

- Initialization - initialize the varible used in the loop.

- Condition - evaluate a condition in the initial variable, if a condition is true, the loop starts once again, if a condition returns false, the loop stops.
- Update - used to update the initialization variable.

#### Example Code:

```
for (let i = 1; i <= 5; i++) {
    console.log("Iteration:", i);
}
```

### 2. while loop

While loop runs as long as a specified condition remains to be true.

Syntax:

```
while (condition) {
  // code block to be executed if condition is true
}
```

Example code:

```
let num = 1;

while (num <= 5) {
  console.log("Number ", num);
  num++;
}
```

### 3. do while loop

It executes the loop at least once, even if the condition is false from the start.

Syntax:

```
do {
  /* code of block that will be
     executed at least once even if
     condition is false */
} while (condition);
```

Example Code:

```
let x = 1;

do {
  console.log("x ", x);
  x++;
} while (x <= 5);
```

### 4. break and ontinue statements

break and continue statements are keywords that are always used within a loop.

#### break statement

The break statment is used when we want to terminate or stop a running loop whenever any particular condition occurs.

Whenever a break occurs, the loop breaks and stops executing.

- The break statement exits the loop completely.

Example code:

```
for (let i = 0; i < 10; i++) {
  if (i == 5) {
    break;
  }
  console.log(i);
}
```

#### Continue Statement

- used when we want to skip a particular iteration.

- when we write a continue statement, the whole code after the statement is skipped and the loop goes for the next iteration.

- Basically it skips the current iteration and moves to the next iteration.

Example code:

```
for (let i = 0; i < 10; i++) {
  if (i == 5) {
    continue;
  }
  console.log(i);
}
```
