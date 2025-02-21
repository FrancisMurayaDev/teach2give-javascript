# High Order Array Methods.
- JS powerful tool for working with arrays, and High order methods are among the most versatile and expressive.

These methods simplify expressions on arrays by allowing us to apply functions to elements directly, improving both readability and maintainability. 

## 1. forEach

- Executes a function on each array element but does not return anything.

- Best used when you want to perform an action on each item.
- It does not create a new array.

```js
const numbers = [1, 2, 3, 4, 5];

numbers.forEach((num) => {
  console.log(num * 2);
});
// Output: 2, 4, 6, 8, 10
```
 ## 2. map()
 The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

 - Best for transforming array elements without modifying the original array.

 - It returns a new array.

 ## 3. filter()
 - The filter() method creates a new array with all elements that pass the test implemented by the provided function.
  - Best for selecting specific elements from an array.

  - It returns a new array

  ```js
  const numbers = [1, 2, 3, 4, 5];

const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers);
// Output: [2, 4]
```

## 4. reduce()

- The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

- Best for calculating totals, aggregations, or combining values.

- It does not return a new array, but it returns the value that the original array has been reduced to.

```js
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum);
// Output: 15
```

## 5.find()

- The find() method returns the value of the first element in the array that satisfies the provided testing function. Otherwise, it returns undefined.

- Does not return new but returns the found number instead:

```js
const numbers = [1, 2, 3, 4];
const found = numbers.find((num) => num === 3);
console.log(found); // Output: 3
```
## 6. findIndex
- Returns the index of the first element that matches a condition.

```js
const numbers = [10, 20, 30, 40, 50];

const index = numbers.findIndex((num) => num > 25);
console.log(index);
// 2
```

## 7. some
- Checks if at least one element passes a condition.
- If so, it returns true, otherwise, it returns false.

```js
const numbers = [1, 3, 5, 7];

const hasEven = numbers.some((num) => num % 2 === 0);
console.log(hasEven);
// false
```

## 8. every
- Checks if all elements in an array pass a condition.
- If so, it returns true, otherwise it returns false.

```js
const numbers = [2, 4, 6, 8];

const allEven = numbers.every((num) => num % 2 === 0);
console.log(allEven);
// true
```

