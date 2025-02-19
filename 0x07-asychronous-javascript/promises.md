## Promises

When working with asynchronous code, we never know before hand when we will get the results.

Also, we don't know if the results will be a success or a failure.

When working with asynchronous JS, there is a concent of:

1.  <b>Producing Code:</b> - code that will take some time to complete. EG: Fetching information from a database.

2.  <b>Consuming code</b>: - code that must wait for results from producing code.

<b>A Promise</b> is the object that links producing and consuming code.

It is an object that also represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

- It is a readable way to handle asynchronous operations compared to callbacks.

A promise has 3 states:

- <b>Pending</b> - initial state; neither fulfilled nor rejected.

- <b>Fulfilled</b> - the operation is completed successfully.

- Rejection: the operation has failed.

### Creating a Promise

A promise is created using:

`new Promise()` constructor.

- The constructor accepts a single argument, which is a function called `executor.`

The promise executes the <b>executor function</b> immediately.

<b>Executor Function</b> takes two parameters:

1.  A function to call with a value when the promise was fulfilled (mostly referred to as resolve).

2.  Function to call when the promise fails (mostly referred to as reject.)

```js
let myPromise = new Promise(function (resolve, reject) {
  let x = 1;
  if (x === 1) {
    resolve("x is 1");
  } else {
    reject("x is not 1");
  }
});
```

### Consuming a Promise

We can then use `.then()` to handle resolved value and `.catch()` to handle errors (rejected value).

`.then()` takes a callback function, which receives the resolved value of the Promise as its argument.

`.catch` also takes a callback function, which receives the error (rejected value) as its argument when the Promise is rejected.

```js
let myPromise = new Promise(function (resolve, reject) {
  let x = 5;
  if (x === 1) {
    resolve("x is 1");
  } else {
    reject("x is not 1");
  }
});

myPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
```

There is also `.finally()` which gets executed regardless of whether the promise was a success or failure:

```js
let myPromise = new Promise(function (resolve, reject) {
  let x = 1;
  if (x === 1) {
    resolve("x is 1");
  } else {
    reject("x is not 1");
  }
});

myPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("It was nice working with this promise");
  });
```

### Running a Promise from a Function

We can return a promise from a function.

```js
function fetchUser() {
  return new Promise(function (resolve, reject) {
    let error = false;
    if (error === true) {
      reject("There was an error");
    } else {
      resolve({ username: "_john", role: "Admin" });
    }
  });
}

fetchUser()
  .then((user) => {
    console.log(`Username: ${user.username}, Role: ${user.role}`);
  })
  .catch((error) => {
    console.log(error);
  });
```
