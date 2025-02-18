# Operators

<p>Operators are used to perform operations on values. They are also called operands.</p>

## Types of Operators

- ### Arithmetic operators

<p>Used to perform arithmetic operatons.</p>

1. Addition (+) -adding two values.

```
//Adding numbers.
let x = 34;
let y = 26;
console.log(x + y); // 60

//Adding Strings
let firstName = "Joe";
let lastName = "Smith";
console.log(firstName + lastName); // JoeSmith
```

2. Subtraction (-)

```
//Subtracting numbers.
let x = 36;
let y = 24;
console.log(x - y); // 12
```

3. Multiplication (\*)

```
//Multiplying numbers.
let x = 3;
let y = 2;
console.log(x * y); // 6
```

4. Division

```
//Dividing numbers.
let x = 6;
let y = 2;
console.log(6 / 2); // 3
```

5. Modulus/Remainder (%)
<p>Returns the remainder of a division between right and left operands.</p>

```
//Modulus
let x = 6;
let y = 2;
console.log(6 % 2); // 0
```

6. Exponentiation (\*\*)
<p>The operation of raising one quantity to the power of another.</p>

```
//Exponentiation
let x = 10;
let y = 4;
console.log(10 ** 4); // 10000
```

7. Increment Operators
<p>Increases the value of a variable by 1.

It can be used in various ways.</p>

1. Post-Increment (a++) - returns the original value and then increments it.
2. Pre-Increment (++a) - Increments first and then returns the updated value.

```
let x = 10;
console.log(x++); // 10 (returns first, then increments)
console.log(x); // 11

let y = 10;
console.log(++y); // 11 (increments first, then returns)
```

8. Decrement Operator
<p>Decreases a variable value by 1.

It can be used in 2 ways.</p>

1. Post-Increment (a++) - returns the original value and then increments it.
2. Pre-Increment (++a) - Increments first and then returns the updated value.

```
let x = 10;
console.log(x--); // 10 (returns first, then increments)
console.log(x); // 9

let y = 10;
console.log(--y); // 9 (increments first, then returns)
```

- ### Assignment operators
<p>Used to assign values to variables.</p>

1. Simple Assignment Operator (=) - used to assign value to a variable.

```
let age = 34;
```

2. Addition assignment Operator (+=) - used to add a value to a variable.

```
let age = 5;
age += 4 // age = 5 = 4;
```

3. Subtraction assignment operator (-=)
   used to subtract a value from a variable.

```
let age = 15;
age -=5; // age = 15 -5 = 10
```

4. Multiplication Assignment operator (\*=) - multiply a variable.

```
let x = 5;
x *= 2; // x = x * 2 → 10
```

5. Divsion Assignment Operator (/=) - dividing a variable.

```
let x = 15;
x /= 3; // x = x / 3 → 5
```

- ### Comparision operators

<p>They are used to compare values and they return true or false.</p>

1. Equality Operator (==)
<p>Returns true if the operand on the left is equal to the operand on the right and false otherwise.</p>

```
let a = 10;
let b = 5;
console.log(a == b); // false
console.log(a == 10); // true
```

<p>However, it ignores the data type of the operands, it only compares the value.</p>

```
console.log(7 == "7"); // true
```

2. Strict Equality Operator
<p>Returns true if the operand on the left is equal to the operand on the right and false otherwise.<p>

```
let a = 10;
let b = 5;
console.log(a === b); // false
console.log(a === 10); // true
```

<P>The strict equality operator checks the data type as well, not just the values.</p>

```
console.log(7 === "7"); // false
```

3. Not equal/Inequality operator (!=)
<p>Returns true if the value on the left is not equal to the value on the right and false otherwise. It does not consider the data type of the operands.</p>

```
let a = 7;
let b = 3;
console.log(a != b); // true
console.log(a != 7); // false

console.log(7 != "7"); // false
```

4. Strict not equal to/Strict inequality operator (!==)
<p>Returns true if the value on the left is not equal to the value on the right and false otherwise. It compares the data types of the operands.</p>

```
let a = 10;
let b = 5;
console.log(a !== b); // true
console.log(a !== 10); // false

console.log(10 !== "10"); // true
```

5. Greater than (>).
<p>Returns true if the operand on the left is greater than the operand on the right and false otherwise.</p>

```
let a = 6;
let b = 2;
console.log(a > b); // true
console.log(b > a); // false
```

6. Less than (<)
<p>Returns true if the operand on the left is less than the operand on the right and false otherwise.</p>

```
let a = 7;
let b = 5;
console.log(a < b); // false
console.log(b < a); // true
```

7. Greater than or equal to (>=)

 <p>Returns true if the operand on the left is greater than or equal to the operand on the right.</p>

```
let a = 10;
let b = 5;
console.log(a >= b); // true
console.log(b >= a); // false
console.log(10 >= 10); // true
```

8.  Less than or equal to (<=)
<p>Returns true if the operand on the left is less than or equal to the operand on the right.</p>

```
let a = 6;
let b = 3;
console.log(a <= b); // false
console.log(b <= a); // true
console.log(7 <= 7); // true
```

- ### Logical operators

Used for boolean logic.

1.  Logical AND Operator (&&)

The AND operator returns true only if both operands are true; otherwise, it returns false.

```
console.log(true && true); // true
console.log(true && false); // false
```

2.  Logical OR Operator (||)

The OR operator returns true if at least one of the operands is true; otherwise it returns false.

```
console.log(true || true); // true
console.log(true || false); // true
console.log(false || false); // false
```

3.  Logical NOT operator (!)

Used to negate boolean value of an expression, it returns true if the expression is false and returns false if the expression is true.

```
console.log(!true); // false
console.log(!false); // true
```

- Bitwise operators
- Ternary operators
- Type operators
