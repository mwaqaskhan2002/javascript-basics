// ==========================================
// VIDEO #28: WHILE AND DO-WHILE LOOPS
// ==========================================

// --- Basic while loop ---
let index = 0;
while (index <= 10) {
  // console.log(`Value of index is ${index}`);
  index = index + 2;
}

// --- while loop on array ---
let myArray = ["flash", "batman", "superman"];
let arr = 0;
while (arr < myArray.length) {
  // console.log(`Value is ${myArray[arr]}`);
  arr = arr + 1;
}

// --- do-while loop ---
let score = 11;

do {
  console.log(`Score is ${score}`);
  score++;
} while (score <= 10);


// while: Jab aapko pata na ho ke loop kitni baar chalega, aur execution sirf condition match hone par chahiye.

// do-while: Jab aap chahte hain ke task kam se kam ek baar laazmi run ho, chahe condition baad mein check ho.