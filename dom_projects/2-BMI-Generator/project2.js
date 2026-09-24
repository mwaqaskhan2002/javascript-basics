// ==========================PSUEDO CODE =============================

// // Step 1: DOM Elements Select Karo
// SET form = SELECT "#bmiForm"
// SET result = SELECT "#results" 

// // Step 2: Form Submit Event Listener
// LISTEN FOR "submit" ON form WITH event (e):
//     PREVENT DEFAULT REFRESH

//     // Step 3: Input Values Target Karo
//     SET height = CONVERT TO NUMBER(INPUT "#height".value)
//     SET weight = CONVERT TO NUMBER(INPUT "#weight".value)

//     // Step 4: Validation
//     IF height <= 0 OR height IS NaN THEN
//         SET result.innerHTML = "Please give a valid height"
//         RETURN
//     END IF

//     IF weight <= 0 OR weight IS NaN THEN
//         SET result.innerHTML = "Please give a valid weight" <-- [TEXT TYPO FIX: height -> weight]
//         RETURN
//     END IF

//     // Step 5: Calculation
//     SET bmi = (weight / ((height * height) / 10000)).toFixed(2)

//     // Step 6: Clean Else-If Structure (Nested IF bilkul mat use karo)
//     IF bmi < 18.6 THEN
//         SET result.innerHTML = "Your BMI is " + bmi + " (Underweight)"
//     ELSE IF bmi >= 18.6 AND bmi <= 24.9 THEN
//         SET result.innerHTML = "Your BMI is " + bmi + " (Normal Range)" <-- [LABEL TYPO FIX]
//     ELSE
//         SET result.innerHTML = "Your BMI is " + bmi + " (Overweight)"
//     END IF

// END LISTEN

// ==========================ACTUAL CODE   =============================
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

// ==========================PSUEDO CODE =============================

// SET form = SELECT "#bmiForm"
// SET result = SELECT "#results"

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

// ==========================ACTUAL CODE   =============================
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

    let label = bmi < 18.6 ? "Underweight" : bmi <= 24.9 ? "Normal weight" : "Overweight";

    result.innerHTML = `Your BMI is <strong>${bmi.toFixed(2)}</strong> ${label}`;
});
