## Event Propagation 

- Refers to the way events flow through the DOM tree.

- It defines the element order when an event occurs. 

`_If you have a paragraph element inside a div element, both with click events attached, the user clicks on the paragraph element; which element's click event should be handled first?
`
There are 2 ways of event propagation in the HTML DOM. 

1. Bubbling
- The inner most event is handled first, then outer.

2. Capturing 

- Outermost even is handled first, then inner.

With the `addEventListener` method, you can specify the propagation type by passing a third parameter called `useCapture(true or false)'. 
- False - bubbling will be used.

- True - capturing will be used. 

- False is default. 