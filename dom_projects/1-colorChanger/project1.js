// Color Switcher

//Psudeo Code 

// // Step 1: DOM Elements Select Karo
// SET colorButton = SELECT ALL elements with class ".button"
// SET bodyColor = SELECT "body" element

// // Step 2: Har Button Par Loop Chalao
// FOR EACH button IN colorButton DO:

//     // Step 3: Event Listener Attach Karo
//     LISTEN FOR "click" EVENT ON button WITH event Object (e):
        
//         // Step 4: Clicked Element Ki ID Extract Karo
//         SET selectedColor = e.target.id
        
//         // Step 5: ID Check Karke Matching Background Color Set Karo
//         IF selectedColor EQUALS "grey" THEN
//             SET bodyColor.style.backgroundColor = "grey"
//         END IF
        
//         IF selectedColor EQUALS "white" THEN
//             SET bodyColor.style.backgroundColor = "white"
//         END IF
        
//         IF selectedColor EQUALS "blue" THEN
//             SET bodyColor.style.backgroundColor = "blue"
//         END IF
        
//         IF selectedColor EQUALS "yellow" THEN
//             SET bodyColor.style.backgroundColor = "yellow"
//         END IF

//     END LISTEN

// END FOR



// Actual Code
let colorButton = document.querySelectorAll(".button")
let bodyColor = document.querySelector("body")


colorButton.forEach(function(button){

    button.addEventListener('click', function(e){
        
        let selectedColor = e.target.id;

        // Comparison ke liye === use karein
        if (selectedColor === "grey") {
          bodyColor.style.backgroundColor = "grey";
        }
        if (selectedColor === "white") {
          bodyColor.style.backgroundColor = "white";
        }
        if (selectedColor === "blue") {
          bodyColor.style.backgroundColor = "blue";
        }
        if (selectedColor === "yellow") {
          bodyColor.style.backgroundColor = "yellow";
        }

    })
})

// Optimized way Psuedo Code 
// // Step 1: Elements Pick Karo
// SET buttons = SELECT ALL elements with class ".button"
// SET body = SELECT "body" element

// // Step 2: Loop aur Direct Value Assign Karo
// FOR EACH button IN buttons DO:
//     LISTEN FOR "click" EVENT ON button WITH event Object (e):
////         SET body.style.backgroundColor = e.target.id
//     END LISTEN
// END FOR

// Actual Code 

let colorButton = document.querySelectorAll(".button")
let bodyColor = document.querySelector("body")

colorButton.forEach(function(button){
    button.addEventListener('click', function(color){
        bodyColor.style.backgroundColor = color.target.id
    })
})