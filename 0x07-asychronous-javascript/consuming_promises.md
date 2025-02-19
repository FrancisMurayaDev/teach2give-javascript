## Consuming Promises With Async/Await

`async/await` is the modern way to handle asynchronous operations in JavaScript.

- It is built on top of Promises but allows you to write asynchronous code that looks like synchronous code.

`async/await` is mostly used to consume promises.

```js
function fetchUser() {
  return new Promise(function (resolve, reject) {
    let error = true;
    if (error === true) {
      reject("There was an error");
    } else {
      resolve({ username: "_john", role: "Admin" });
    }
  });
}

async function processUser() {
  const user = await fetchUser();
  console.log(user);
}

processUser();
```

### Handling Errors in async/await

One of the strengths of `async/await` is its ability to handle errors in a synchronous way, using `try...catch`.

```js
function fetchUser() {
  return new Promise(function (resolve, reject) {
    let error = true;
    if (error === true) {
      reject("There was an error");
    } else {
      resolve({ username: "_john", role: "Admin" });
    }
  });
}

async function processUser() {
  try {
    const user = await fetchUser();
    console.log(user);
  } catch {
    console.log("Err");
  }
}

processUser();
```

The catch block can also receive the error thrown from the promise as shown:

```js
function fetchUser() {
  return new Promise(function (resolve, reject) {
    let error = true;
    if (error === true) {
      reject("There was an error");
    } else {
      resolve({ username: "_john", role: "Admin" });
    }
  });
}

async function processUser() {
  try {
    const user = await fetchUser();
    console.log(user);
  } catch (error) {
    console.log(error);
  }
}

processUser();
```

try..catch also has a `finally` block:\

```js
function fetchUser() {
  return new Promise(function (resolve, reject) {
    let error = true;
    if (error === true) {
      reject("There was an error");
    } else {
      resolve({ username: "_john", role: "Admin" });
    }
  });
}

async function processUser() {
  try {
    const user = await fetchUser();
    console.log(user);
  } catch (error) {
    console.log(error);
  } finally {
    console.log(`Process completed`);
  }
}

processUser();
```
