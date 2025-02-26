let title = document.getElementById('title');
console.log (title);

let paragraphs = document.getElementsByTagName('p');
console.log(paragraphs);

let texts = document.getElementsByClassName('texts');
console.log(texts[0]);

let firstParagraph = document.querySelector('p');
console.log(firstParagraph);
 let P_texts = document.querySelectorAll('p.texts');
 console.log(P_texts[0]);

 let div = document.querySelector('.container-div');
 console.log(div.innerHTML);
 div.innerHTML = '<h1>Teach2Give is Awesome</h1>'
 console.log(div.innerHTML);

const textDiv =  document.querySelector('#texts');
console.log(textDiv.innerText);
textDiv.innerText = `Be aware of the difference between innerText and innerHTML`;
console.log(textDiv.innerText);

let div = document.querySelector(`.container-div`);
const heading2 = document.createElement('h2');
heading2.innerText = 'Programming is Fun';
div.appendChild(heading2);
console.log(div.innerText);

const heading = document.querySelector('#heading');
heading.id = 'title-class';
console.log(heading);

const button = document.querySelector('#btn');
button.onclick = function () {
  alert('I just got clicked!');
}
