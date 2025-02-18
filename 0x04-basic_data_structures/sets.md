## Sets

Its a JS data structure that represents a collection of unique values.

Properties of a Set

- Unique
- No indexing
- No order

#### Creating a Set 

Use <i>new Set() .

```js
const mySet = new Set([1, 2, "a", "John"]);
console.log(mySet);
```

#### Set Methods

1. add(value)

Adds a new element with the specified value to the set.

```js
const mySet = new Set();
mySet.add("John");
mySet.add(44);
mySet.add(44);
mySet.add("Doe");
mySet.add(true);
mySet.add(true);
mySet.add(false);
console.log(mySet); // Set(5) { 'John', 44, 'Doe', true, false }
```

2. delete(value)

Removes a specified element from the set.

```js
const mySet = new Set(["John", 44, "Doe", true, false]);
mySet.delete("John");
mySet.delete(true);
mySet.delete(44);
console.log(mySet); // Set(2) { 'Doe', false }
```

3. has (value)

Returns true is a specified value exists in a set, false otherwise.

```js
const mySet = new Set(["John", 44, "Doe", true, false]);
console.log(mySet.has("John")); // true
console.log(mySet.has("June")); // false
```

4. size
Return number of elements in a set.

```js
const mySet = new Set(["John", 44, "Doe", true, false]);
console.log(mySet.size); // 5
```