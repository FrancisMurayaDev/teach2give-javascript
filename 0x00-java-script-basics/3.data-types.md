# Data Types

<p>JavaScript has the following data types.</p>

- String

<p>Sequence of characters enclosed with single or double quotes.</p>

```
let firstName = "Francis";
let lastName = "Muraya";
```
- Number
<p>In JavaScript there are two types of numbers, integers and decimlas </p>

```
 age = 16; //Integer]
let price = 45.67; //Decial;
let notANumber = NaN; /NotANumber;/
```

- Boolean

<p>Boolean can either be true or false.</p>

```
let onTime = true;
let inTime = false;
```

- Null

<p>Null is an intentional absence of a value. It may also mean empty on purpose.</p>

```
let age = null; //no age
```

- Undefined

<p>A variable that has been delcared but not initialized.</p>

```
let state;
console.log(state) // output will be undefined.
```
- Bigint

<p>BigInt values represent integer values which are too high or too low to be represented by the number primitive.</p>

```
const alsoHuge = BigInt(9007199254740991);
// 9007199254740991n
```
- Symbol

#### Checking the type of a data type we use typeof () method.

```
let age = 25;
let firstName = "Jane";
let bigNumber = 987589798784832934898348792;

console.log(age); //number
console.log(firstName); // string
console.log(bigNumber); //bigInt
```