const image = document.querySelector('img');
const body = document.querySelector('body');
const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const a = document.querySelector('a');
let isWhite = false;

image.addEventListener('click', () => {
  if (!isWhite) {
    body.style.backgroundColor = 'white';
    h1.style.color = 'black';
    a.style.color = 'black';
    isWhite = true;
  } else {
    body.style.backgroundColor = 'black';
    h1.style.color = 'white';
    a.style.color = 'white';
    isWhite = false;
  }
});
