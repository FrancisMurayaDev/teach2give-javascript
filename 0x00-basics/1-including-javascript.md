# Including JavaScript to HTML

## There are 3 ways to include Javascript in a HTML file

- Internal JavaScript
<p>JavaScript is written inside a script tag within the html file. The script is placed before the closing tag of the HTML body tag.</p>

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Internal Javascript</title>

  <script>
    console.log('Hello World!');
    console.log('Teach2give is amaizing!')
  </script>
</head>
<body>

</body>
</html>
```

- External JavaScript

<p>Javascript is stored in a separate .js file and linked with the html file using the script tag with a src attribute.<p>

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>External Javascript</title>
</head>
<body>




  <script src="../main.js"></script>
</body>
</html>
```

- Inline JavaScript
<p>JavaScript code is embedded directly inside HTML elemets using even attributes such as onclick, onmouseover, e.t.c.</p>

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Inline JavaScript</title>


  <button onclick="
  console.log('Teach2Give is Fun');
  alert('Give Your best, you got this!');
  ">Click Me</button>


</head>
<body>

</body>
</html>
```

<p>Basically, it is a good practice to put the script tag before the body closing tag to optimize script loading.  </p>

## Optimizing Script Loading

1. Use defer keyword - scripts are loaded after the html is fully loaded.

```
<script src="main.js" defer></script>
```

2. Use async keyword - Loads scripts asynchronously and runs them as soon as they are downloaded. However, it may execute JavaScript out of order.

```
<script src="main.js" async></script>
```


