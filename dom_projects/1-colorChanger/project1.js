//====================================== Color Switcher=================================================

//Psudeo Code 

// // Step 1: DOM Elements Select Karo
SET colorButton = SELECT ALL elements with class ".button"
SET bodyColor = SELECT "body" element

// Step 2: Har Button Par Loop Chalao
FOR EACH button IN colorButton DO:

    // Step 3: Event Listener Attach Karo
    LISTEN FOR "click" EVENT ON button WITH event Object (e):
        
        // Step 4: Clicked Element Ki ID Extract Karo
        SET selectedColor = e.target.id
        
        // Step 5: ID Check Karke Matching Background Color Set Karo
        IF selectedColor EQUALS "grey" THEN
            SET bodyColor.style.backgroundColor = "grey"
        END IF
        
        IF selectedColor EQUALS "white" THEN
            SET bodyColor.style.backgroundColor = "white"
        END IF
        
        IF selectedColor EQUALS "blue" THEN
            SET bodyColor.style.backgroundColor = "blue"
        END IF
        
        IF selectedColor EQUALS "yellow" THEN
            SET bodyColor.style.backgroundColor = "yellow"
        END IF

    END LISTEN

END FOR



// Actual Code
let colorButton = document.querySelectorAll(".button")
let body = document.querySelector("body")


colorButton.forEach(function(button){

    button.addEventListener('click', function(e){

        selectedcolor = e.target.id 

        if (selectedcolor === 'grey') {
            body.style.backgroundColor = 'grey'
        }
        if (selectedcolor === 'white') {
            body.style.backgroundColor = 'white'
        }
        if (selectedcolor === 'blue') {
            body.style.backgroundColor = "blue";
        }
        if (selectedcolor === 'yellow') {
            body.style.backgroundColor = 'yellow'
        }
        if (selectedcolor === 'purple') {
            body.style.backgroundColor = 'purple'
        }
        if (selectedcolor === 'orange') {
            body.style.backgroundColor = 'orange'
        }

    })
    
})

// Optimized way Psuedo Code 
// Step 1: Elements Pick Karo
SET buttons = SELECT ALL elements with class ".button"
SET body = SELECT "body" element

// Step 2: Loop aur Direct Value Assign Karo
FOR EACH button IN buttons DO:
    LISTEN FOR "click" EVENT ON button WITH event Object (e):
//         SET body.style.backgroundColor = e.target.id
    END LISTEN
END FOR

Actual Code 

let colorButton = document.querySelectorAll(".button")
let bodyColor = document.querySelector("body")

colorButton.forEach(function(button){
    button.addEventListener('click', function(e){
        bodyColor.style.backgroundColor = e.target.id
    })
})




// Step 1: DOM Elements Select Karo
SET colorButton = SELECT ALL elements with class ".button"
SET body = SELECT "body" element

// Step 2: Loop aur Event Listener Attach Karo
FOR EACH button IN colorButton DO:
    LISTEN FOR "click" EVENT ON button WITH event Object (e):
        
        // Step 3: Clicked Element Ki ID Extract Karo
        SET selectedcolor = e.target.id
        
        // Step 4: Switch Case Se Matching Color Apply Karo
        SWITCH selectedcolor:
            CASE "grey":
                SET body.style.backgroundColor = "grey"
                BREAK
            CASE "white":
                SET body.style.backgroundColor = "white"
                BREAK
            CASE "blue":
                SET body.style.backgroundColor = "blue"
                BREAK
            CASE "yellow":
                SET body.style.backgroundColor = "yellow"
                BREAK
        END SWITCH

    END LISTEN
END FOR


let colorButton = document.querySelectorAll(".button")
let body = document.querySelector("body")


colorButton.forEach(function(button){

    button.addEventListener('click', function(e){

        selectedcolor = e.target.id 

        switch (selectedcolor) {
          case "grey":
            body.style.backgroundColor = "grey";
            break;
          case "white":
            body.style.backgroundColor = "white";
            break;
          case "blue":
            body.style.backgroundColor = "blue";
            break;
          case "yellow":
            body.style.backgroundColor = "yellow";
            break;
          case "purple":
            body.style.backgroundColor = "purple";
            break;
          case "orange":
            body.style.backgroundColor = "orange";
            break;
        }

    })
    
})


// Step 1: Elements Select Karo
SET buttons = SELECT ALL elements with class ".button"
SET body = SELECT "body" element

// Step 2: Color Mapping Object Banayein
SET colorMap = {
    "grey": "grey",
    "white": "white",
    "blue": "blue",
    "yellow": "yellow"
}

// Step 3: Loop aur Direct Mapping
FOR EACH button IN buttons DO:
    LISTEN FOR "click" EVENT ON button WITH event Object (e):
        SET clickedId = e.target.id
        
        // Object se direct check karke value apply karo
        IF colorMap HAS clickedId THEN
            SET body.style.backgroundColor = colorMap[clickedId]
        END IF
    END LISTEN
END FOR

let colorButton = document.querySelectorAll(".button");
let body = document.querySelector("body");

let colorMap = {
    "grey": "grey",
    "white": "white",
    "blue": "blue",
    "yellow": "yellow",
    "purple": "purple",
    "orange": "orange"
};

colorButton.forEach(function (button) {

    button.addEventListener('click', function(e){
        let clickedID = e.target.id;

        if (colorMap[clickedID]) {
            body.style.backgroundColor = colorMap[clickedID];
        }
    });
});
