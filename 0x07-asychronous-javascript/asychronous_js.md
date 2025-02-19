## Asynchronous JavaScript

- Its execution of JS without blocking the main thread.
- Allow other operations to continue while waiting for other tasks to complete.

This is important for tasks such as:

- Network requests.
- file reading.
- timers which can take an unknown amount of time.

JavaScript is inherently single threaded and synchronous.

- It processes one task at a time sequentially.

When a long-running task such as:

- fetching data from a server.
- reading a file

occurs, it can block the entire execution, making the application unresponsive, this is what asynchronous JavaScript solves.

With asynchronous programming, JavaScript programs can start long-running tasks, and continue running other tasks in parallel.

In JS, `asynchronous programming` is done using `promises.`

This is what asynchronous JavaScript looks like:

```js
setTimeout(() => {
  console.log("Asynchronous JavaScript");
}, 2000);

console.log("Hello World");
console.log("Goodbye World");

// Output:
// Hello World
// Goodbye World
// Asynchronous JavaScript
```
