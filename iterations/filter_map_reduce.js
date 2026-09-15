// ==========================================
// 1. FOR-EACH VS FILTER
// ==========================================

const coding = ["js", "ruby", "java", "python", "cpp"];

// forEach does NOT return any value (returns undefined)
const values = coding.forEach((item) => {
  // console.log(item);
  return item;
});

// console.log(values); // Output: undefined

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Explicit return using block scope {}
// const newNums = myNums.filter( (num) => {
//     return num > 5
// } )

// Doing the same filtering task using forEach manually:
const newNums = [];

myNums.forEach((num) => {
  if (num > 4) {
    newNums.push(num);
  }
});

// console.log(newNums);

// ==========================================
// 2. REAL-WORLD DATA FILTERING (BOOKS DATABASE)
// ==========================================

const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

// Single condition check
let userBooks = books.filter((bk) => bk.genre === "History");

// Multiple condition check (AND operator)
userBooks = books.filter((bk) => {
  return bk.publish >= 1995 && bk.genre === "History";
});

console.log(userBooks);




// ==========================================
// MAP & METHOD CHAINING
// ==========================================

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Basic transformation: Adding 10 to each number
// const newNums = myNumbers.map((num) => { return num + 10 })

// Method Chaining: Connecting multiple maps and filters
const newNums = myNumbers
                .map((num) => num * 10)       // Step 1: Multiply by 10
                .map((num) => num + 1)        // Step 2: Add 1 to each
                .filter((num) => num >= 40)   // Step 3: Keep numbers >= 40

console.log(newNums);



// ==========================================
// REDUCE METHOD
// ==========================================

const myreduceNums = [1, 2, 3]

// Detailed syntax showing accumulator and current value tracking:
// const myTotal = myreduceNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

// Clean Arrow function syntax:
const myTotal = myreduceNums.reduce((acc, curr) => acc + curr, 0);
// console.log(myTotal); // Output: 6


// Real-World Example: Shopping Cart Grand Total Calculation
const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    }
]

// Summing up item prices with initial accumulator = 0
const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay); // Output: 22996

