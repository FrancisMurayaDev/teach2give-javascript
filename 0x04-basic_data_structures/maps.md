## Maps

- Similar to an Object.
- Allow storing of key value pairs.

### Creating a Map

use <i>new Map()</i>

```js
const myMap = new Map()
```

### Map Methods

1. set(key, value)

Add a key value pair to the map or updates if the key-value pair already exists.

```js
const myMap = new Map();
myMap.set("firstName", "Dennis");
myMap.set(1, "number");
myMap.set([1, 2, 3], "array");
myMap.set(true, "boolean value");
myMap.set({ username: "the_user" }, "object");
console.log(myMap);

// Map(5) {
//   'firstName' => 'Dennis',
//   1 => 'number',
//   [ 1, 2, 3 ] => 'array',
//   true => 'boolean value',
//   { username: 'the_user' } => 'object'
// }
```

2. get(key)

Returns the value associated with the specific key in the map or undefined if it doesn't exist.

```js
const myMap = new Map();
myMap.set("firstName", "Dennis");
myMap.set(1, "number");
myMap.set([1, 2, 3], "array");
myMap.set(true, "boolean value");
myMap.set({ username: "the_user" }, "object");

console.log(myMap.get(1)); // number
console.log(myMap.get("firstName")); // Dennis
console.log(myMap.get("something")); // undefined
```

3. has(key)

Returns true if the map contains the specified key, false if otherwise.

```js
const myMap = new Map();
myMap.set("firstName", "Dennis");
myMap.set(1, "number");
myMap.set([1, 2, 3], "array");
myMap.set(true, "boolean value");
myMap.set({ username: "the_user" }, "object");

console.log(myMap.has("firstName")); // true
console.log(myMap.has("middlename")); // false
```

4. delete(key)
Removes a specified key-value pair from the map.

```js
const myMap = new Map();
myMap.set("firstName", "Dennis");
myMap.set(1, "number");
myMap.set([1, 2, 3], "array");
myMap.set(true, "boolean value");
myMap.set({ username: "the_user" }, "object");

myMap.delete("firstName");
myMap.delete(1);
```
5. clear()

Removes all the key-value pairs from a map.

```js
const myMap = new Map();
myMap.set("firstName", "Dennis");
myMap.set(1, "number");
myMap.set([1, 2, 3], "array");
myMap.set(true, "boolean value");
myMap.set({ username: "the_user" }, "object");

myMap.clear();

console.log(myMap); // Map(0) {}
```
6. Size

Returns the number of key-value pairs in a map.

```js
const myMap = new Map();
myMap.set("firstName", "Dennis");
myMap.set(1, "number");
myMap.set([1, 2, 3], "array");
myMap.set(true, "boolean value");
myMap.set({ username: "the_user" }, "object");

console.log(myMap.size); // 5
```