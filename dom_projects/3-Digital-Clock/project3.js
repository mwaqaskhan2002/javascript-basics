// // Step 1: Clock element ko DOM se select karo
// SET clock = SELECT element with id "clock"

// // Step 2: Continuous Timer Interval Start Karo (Har 1000ms / 1 second baad)
// START INTERVAL (EVERY 1000 MILLISECONDS):

//     // Step 2a: Current System Date & Time Object create karo
//     SET date = CREATE NEW Date()

//     // Step 2b: System Time ko Local Time String mein convert karke Clock DIV mein render karo
//     SET clock.innerHTML = CONVERT date TO LOCAL TIME STRING (date.toLocaleTimeString())

// END INTERVAL


// const clock = document.querySelector('#clock')

// setInterval(function(){
//     let date = new Date();
//     // console.log(date.toLocaleTimeString());

//     clock.innerHTML = date.toLocaleTimeString();
// }, 1000)


// Step 1: Clock aur Date dono DIVs select karo
// SET clock = SELECT element with id "clock"
// SET dateElement = SELECT element with id "date"

// // Step 2: Interval function banayein
// START INTERVAL (EVERY 1000 MILLISECONDS):

//     SET date = CREATE NEW Date()

//     // Time Component
//     SET timeString = date.toLocaleTimeString()

//     // Date Component (Custom format parameters ke saath)
//     SET dateString = date.toLocaleDateString('en-US', { 
//         weekday: 'long', 
//         year: 'numeric', 
//         month: 'short', 
//         day: 'numeric' 
//     })

//     // Both outputs rendering
//     SET clock.innerHTML = timeString
//     SET dateElement.innerHTML = dateString

// END INTERVAL

const clock = document.querySelector('#clock')
const dateElement = document.querySelector('#date')

setInterval(function(){
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
    dateElement.innerHTML = date.toLocaleDateString("en-US", {
      weekday: "long", // e.g., "Thursday"
      year: "numeric", // e.g., "2026"
      month: "short", // e.g., "Sep"
      day: "numeric", // e.g., "24"
    });

}, 1000);