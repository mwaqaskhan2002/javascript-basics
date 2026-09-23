let h2 = document.querySelector("h2");
console.dir(h2.innerText);


h2.innerText = h2.innerText + " From Apna College";



let divs = document.querySelectorAll(".box");
console.log(divs);


let indx = 1;
for(div of divs) {
    div.innerText = `The new value ${indx}`;
    indx++;
}
// divs[0].innerText = "new value 1"
// divs[1].innerText = "new value 2"
// divs[2].innerText = "new value 3";

