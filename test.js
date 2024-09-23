let btn = document.querySelector('button');
let div = document.querySelector("div");
let headings = document.querySelector('h1');

btn.addEventListener('click', function() {
    let red = Math.floor(Math.random() * 256); 
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
  div.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  headings.style.color = `rgb(${255 - red}, ${255 - green}, ${255 - blue})`;
  headings.textContent =  `rgb(${255 - red}, ${255 - green}, ${255 - blue})`

});