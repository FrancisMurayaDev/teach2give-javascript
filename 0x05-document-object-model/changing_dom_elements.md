## Changing DOM Elements

- Changing the content, attributes and styling of DOM elements.

### Changing HTML elements content 

#### innerHTML

Gets html content of an element.

```js
<div id="my-div">
    <h1>Hello, world</h1>
    <p>JavaScript is awesome</p>
</div>
```

```js
const div = document.getElementById("my-div");
console.log(div.innerHTML);
div.innerHTML = `<h1>New content</h1>`;
console.log(div.innerHTML);
```

#### innerText

Sets or get the text content of an element not preserving the HTML TAGS.

```js
<div id="my-div">
    <h1>Hello, world</h1>
    <p>JavaScript is awesome</p>
</div>
```

```js
const div = document.getElementById("my-div");
console.log(div.innerText);
div.innerText = "New content";
console.log(div.innerText);
```

#### textContent

Sets or gets the text content of an element and its descendants without preserving the HTML tags.

- More consistent across browser compared to <i>innerText </i>


### Changing the attribute of HTML elements.

We use <em> element.attribute = value .</em>

```js
<h1 class="title" id="title">Hello, world</h1>
```

```js
const title = document.getElementById("title");
console.log(title); // <h1 class="title" id="title">Hello, world</h1>
title.id = "awesome-title";
console.log(title); // <h1 class="title" id="awesome-title">Hello, world</h1>
```