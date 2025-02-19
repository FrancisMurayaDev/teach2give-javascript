## Default Parameters.

Default parameters allows you to set a default value for function parameters if no argument is passed or if the argument is undefined.

It makes the functions more flexible.

```js
function greet(name = "Guest") {
  console.log(`Hello ${name}`);
}

greet(); // Hello Guest
greet("John Doe"); // Hello John doe
```

- If no argument is provided, name defaults to 'Guest'.
- If an argument is provided, it overrides the default value.
