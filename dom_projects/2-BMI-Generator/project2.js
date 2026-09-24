// let form = document.querySelector("#bmiForm");
// const result = document.querySelector("#results");
// form.addEventListener("submit", function (e) {
//   e.preventDefault();

//   const height = Number(document.querySelector("#height").value);
//   const weight = Number(document.querySelector("#weight").value);
  

//   // 2. Output on UI using result.innerHTML
//   if (height <= 0 || isNaN(height)) {
//     result.innerHTML = "Please give a valid height";
//   } else if (weight <= 0 || isNaN(weight)) {
//     result.innerHTML = "Please give a valid height";
//   } else {
//     const bmi = (weight / ((height * height) / 10000)).toFixed(2);

//     // 3. Clean Else-If Chain without Extra Nesting
//     if (bmi < 18.6) {
//         result.innerHTML = `<p> Your BMI is ${bmi} (Underweight) in results </p>`;
//     } else if (bmi >= 18.6 && bmi <= 24.9) {
//         result.innerHTML = `<p> Your BMI is ${bmi} (Normal weight) in results</p>`;
//     } else {
//       if (bmi > 24.9) {
//         result.innerHTML = `<p> Your BMI is ${bmi} (Overweight) in results </p>`;
//       }
//     }
//   }
// });



// // LISTEN FOR "submit" ON form:
// PREVENT REFRESH

// // 1. Get values in 1 step
// SET h = GET NUMBER("#height")
// SET w = GET NUMBER("#weight")

// // 2. Short Validation
// IF h <= 0 OR w <= 0 OR h/w IS NaN THEN
//     DISPLAY "Please enter valid height & weight"
//     RETURN
// END IF

// // 3. One-line Calculation & Category
// SET bmi = w / ((h * h) / 10000)
// SET label = (bmi < 18.6) ? "Underweight" : (bmi <= 24.9) ? "Normal Range" : "Overweight"

// // 4. Output
// DISPLAY "Your BMI is " + bmi.toFixed(2) + " (" + label + ")"
// END LISTEN


let form = document.querySelector("#bmiForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // 1. Get values in 1 step
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#results");

  // 2. Short Validation
  if (!height || !weight || height <= 0 || weight <= 0) {
    result.innerHTML = `Please enter valid height and weight`;
  }

  // 3. One-line Calculation & Category
  const bmi = weight / ((height * height) / 10000);

  let label =
    bmi < 18.6 ? "Underweight" : bmi <= 24.9 ? "Normal weight" : "Overweight";

  result.innerHTML = `Your BMI is <strong>${bmi.toFixed(2)}</strong> ${label}`;
});