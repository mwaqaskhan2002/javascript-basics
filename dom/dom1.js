// Selecting elements
const title = document.getElementById("title");

// Modifying properties
title.style.backgroundColor = "green";
title.style.padding = "15px";

// Reading text content variations
console.log(title.innerText); // Visible text only
console.log(title.textContent); // All text including hidden
console.log(title.innerHTML); // Includes nested HTML tags

// Query Selector usage
const myUl = document.querySelector('ul');
const turnGreen = myUl.querySelector('li');
turnGreen.style.backgroundColor = "green";
turnGreen.innerText = "five";

// Working with NodeList
const tempLiList = document.querySelectorAll('li');
tempLiList.forEach( (li) => {
    li.style.backgroundColor = 'orange';
});