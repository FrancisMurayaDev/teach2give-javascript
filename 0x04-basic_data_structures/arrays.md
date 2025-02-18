## Arrays 

An array is a special variable that can hold more than one value.

They hold many values under a single name.

A value can be accessed by referring to an index number.

### Creating an Array
- 2 ways to create arrays.

1. An Array Literal

```js
const arrayName = [item1, item2, item3, ...];
```
Ex. Code:

```js
const students = ["Francis", "Joe", "Sam", "Jane"];
```

You can also nest arrays within arrays (multidimensional arrays):

```js
const arr = [4,6,6, [4, 7, 8 [3, 7, 8], [5, 9, 0]]];
```


2. The <i>new Array</i> constructor.

```js
const students = ["John", "Ken", "June", "Jack"];
```

Code Ex.

```js
const students = new Array("John", "Ken", "June", "Jack");
```
It can also be nested.

```js
const arr = new Array(1, 2, new Array(5, 6, new Array(30, 40)));
```

NOTE: Use literal to create an array.


### Accessing Array Elements.

We can access an elements by referring to the index number.

The first element is index 0, the second index 1, the third index 2 and soo on ...

```js
const students = ["John", "Ken", "June", "Jack"];
console.log(students[0]); //John
console.log(students[1]); //Ken
console.log(students[2]); //June
```

### Basic Array Methods

1. .length 
returns the length/size of an array.

```js
const students = ["John", "Ken", "June", "Jack"];
console.log(students.length); // 4
```

2. .pop()
It removed the last item of an array.

```js
const students = ["John", "Ken", "June", "Jack"];
students.pop();
console.log(students); //[ 'John', 'Ken', 'June' ]
```

Pop elements returns the elements that was removed. 

3. .push()

It adds a new element at the end of an array.

```js
const students = ["John", "Ken", "June", "Jack"];
students.push("Nancy");
console.log(students); // ['John', 'Ken', 'June', 'Jack', 'Nancy']
```

You can add multiple elements using the <i>push</i> method. 


```js
const students = ["John", "Ken", "June", "Jack"];
students.push("Nancy", "Miriam", "Simon");
```

4. .shift()
It removes the first element of an array. 

```js
const students = ["John", "Ken", "June", "Jack"];
students.shift();
console.log(students); // ['Ken', 'June', 'Jack']
```
It will return the elements that was removed. 

5. .unshift()

Unshift adds an element to the start of an array.

```js
const students = ["John", "Ken", "June", "Jack"];
students.unshift("Nancy");
console.log(students); // ['Nancy', 'John', 'Ken', 'June', 'Jack']
```
 Unshift method can be used to add multiple elements. 

 ```js
 const students = ["John", "Ken", "June", "Jack"];
students.unshift("Nancy", "Miriam", "Simon");
```

6. .at()
Returns an element at the specified index. 


```js
const students = ["John", "Ken", "June", "Jack"];
console.log(students.at(2)); // June
console.log(students.at(0)); // John
```

7. .join()

Used to join all array elements into a string.

It behaves like .toString(), but additionally, you can specify the separator.

```js
const students = ["John", "Ken", "June", "Jack"];
console.log(students.join("++")); // John++Ken++June++Jack
```

8. .concat()

The concat() method creates a new array by merging (concatenating) existing arrays:


```js
const arr1 = ["jack", "franklin", "june"];
const arr2 = ["andrew", "alex", "ken"];
console.log(arr1.concat(arr2));
// [ 'jack', 'franklin', 'june', 'andrew', 'alex', 'ken' ]
```

9. .flat()

The flat method converts a multidimensional array to a one dimensional array. 

```js
const students = [
  ["jack", "franklin"],
  ["june", "andrew"],
  ["alex", "ken"],
];
console.log(students.flat());
// ['jack', 'franklin', 'june', 'andrew', 'alex', 'ken']
```

10. .indexOf()

The <i>indexOf()</i> is used to find the index of a number. 

It returns -1 if the element is not found. 

```js
const students = ["John", "Ken", "June", "Jack"];
console.log(students.indexOf("June")); // 2
```

11. .includes()

It checks if an element exists in an array.

It returns true if it exists and false if it does not.

```js
const students = ["John", "Ken", "June", "Jack"];
console.log(students.includes("Ken")); // true
console.log(students.includes("Elvis")); // false
```

12. .reverse()

It reverses the elements of an array.

```js
const students = ["John", "Ken", "June", "Jack"];
console.log(students.reverse());
```
