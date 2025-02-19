## Arrow Functions ( => )

- Introduced in ES6 to provide a more concise syntax for writing functions in JS.

- They remove need for the `function` keyword and have a shorter syntax.

Before:

```js
function add(a, b) {
  return a + b;
}

console.log(add(4, 12));
```

After:

```js
const add = (a, b) => a + b;

console.log(add(4, 12));
```

Arrow functions lack their own `this` keyword. It means they cannot be used as object methods.

However, arrow functions excel in scenarios such as:

- call back for array methods.
- event listeners.
- situations where we want to simplify our code (function).
