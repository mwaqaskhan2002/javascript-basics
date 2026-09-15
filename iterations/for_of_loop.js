// for of 

// ["", "", ""]
// [{}, {}, {}]

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// for (const num of arr) {
//     console.log(num);
// }

// const greetings = "Hello World!"
// for (const greet of greetings) {
//     console.log(`Each char is ${greet}`);
// }

// Maps
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FR', "France")

// console.log(map);

// Maps are known for the unique value they do not have duplicated enteries

for (const [key, value] of map) {
    console.log(key, ':-', value);
}

const myObject = {
    'Game1': 'NFS',
    'Game2': 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
// }

