// let div = document.querySelector("div");
// console.log(div);

// let id = div.getAttribute("id");
// console.log(id);

// let para = document.querySelector("p");
// console.log(para.getAttribute("class"));

// let para = document.querySelector("p");
// console.log(para.setAttribute("class", "newclass"));

// div.style.backgroundColor = "green"
// div.style.fontSize = "30px"
// div.innerText = "Hello World"

// div.style.visibility = "hidden"


// let newButton = document.createElement('button');
// newButton.innerText = "Click Me"
// console.log(newButton);

// let div = document.querySelector('ul');
// div.append(newButton)
// div.prepend(newButton)
// div.before(newButton)
// div.after(newButton)


// let newHeading = document.createElement('h1');
// newHeading.innerHTML = "<h4>This is h1 Heading</h4>";
// document.querySelector("div").before(newHeading)

// let para = document.querySelector("p");
// para.remove();

// let newlist = document.createElement('li');
// newlist.innerText = "item4";

// // console.log(newlist);
// let list = document.querySelector('ul');
// list.appendChild(newlist)
// // list.removeChild(newlist)

// let newpara = document.createElement('p');
// newpara.innerText = "this is a new paragraph";

// let newdiv = document.querySelector('#box');
// newdiv.appendChild(newpara)
// newdiv.removeChild(newpara)


// Q Create a new button element. Give it a text "click me" backgroudng color of red and text color of white 
// Insert the button as the first element inside the body tag 


let newButton = document.createElement("button");
newButton.innerText = "Click Me";
newButton.style.backgroundColor = "red";
newButton.style.paddingBlock = "8px";
newButton.style.marginBottom = "8px";
newButton.style.paddingInline = "50px";
newButton.style.color = "white";

let body = document.querySelector("body");
body.prepend(newButton);


// Q create a <p> tag in html and give it a class and some styling. Now create a new class in CSS and try to append this class to the <p> element. Did you notice how you overwrite the class name when you add a new one? Solve this problem using classList. 

let para = document.querySelector("p");
para.classList.add("newClass")