## ES6 Modules

A modular system introduced in ES6.

- Allows JS code to be split into multiple files.
- Makes it easy to manage and reuse code.

- The system is built on exporting and importing functions, variables, or classes between files.

#### Note on ES6 Modules:

If you are using ES6 Modules in a browser, you need to add'

type="module" in the <script> tag, for example:

```js
<script type="module" src="main.js"></script>
```

Here is how we use ES6 Modules in Node.js:

- Add `"type"`: `"module"` in `package.json`.

- Use `.mjs` file extensions.

###Importing and Exporting in ES6 Modules.

In ES6, you can export code from a module using either `named exports` or `default export`.

1.  Named Exports

- Exporting multiple values from a module using `export` keyword.

`File: mathUtils.mjs`

```js
export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

export function multiply(a, b) {
  return a * b;
}
```

Now, you can import them in another module using the `import` keyword.

`File:index.mjs`

```js
import { add, subtract, multiply } from "./mathUtils.mjs";
console.log(add(5, 4));
console.log(subtract(5, 4));
console.log(multiply(5, 4));
```

NOTE: It is a must to precede the file name with `./` when importing.

2. Using aliases for imports.

You can rename the imports using the `as` keyword.

```js
import { add as sum, subtract as difference, multiply } from "./mathUtils.mjs";
console.log(sum(5, 4));
console.log(difference(5, 4));
console.log(multiply(5, 4));
```

3. Importing Everything (`*` as an objet)

You can import all named exports as a single object:

```js
import * as MathUtils from "./mathUtils.mjs";
console.log(MathUtils.add(5, 4));
console.log(MathUtils.subtract(5, 4));
console.log(MathUtils.multiply(5, 4));
```

4. Default Exports

Each Module can have one default export, which can be imported with any name.

`File:logger.mjs`

```js
export default function log(message) {
  console.log(`Log: ${message}`);
}
```

Default exports don't need curly braces `{}` when importing.

You can import a default export with any name.

`File:index.mjs`

```js
import log from "./logger.mjs";

log("Hello, World");
```
