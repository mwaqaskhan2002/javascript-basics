// let myName = "hitesh   "
// let myChannel = "chai    "

// console.log(myName.truelength);

let heros = ["thor", "spiderman"];

let heroPower = {
  thor: "hammer",
  spiderman: "sling",

  getSpiderPower: function () {
    console.log(`Spidy Power is ${this.spiderman}`);
  },
};

Object.prototype.hitesh = function () {
  console.log(`hitesh is present in all objects`);
};

Array.prototype.heyHitesh = function () {
  console.log(`Hitesh says hello`);
};

// heroPower.hitesh()
// heros.hitesh()
// heros.heyHitesh()
// heroPower.heyHitesh()

const User = {
  name: "chai",
  email: "chai@google.com",
};
const Teacher = {
  makeVideo: true,
};
const TeachingSupport = {
  isAvailable: false,
};

const TASupport = {
  makeAssignment: `JS Assignment`,
  fullTime: true,
  __proto__: TeachingSupport,
};

Teacher.__proto__ = User;

//modernsyntax

Object.setPrototypeOf(TeachingSupport, Teacher);

let anotherUserName = "ChaiAurCode    ";
String.prototype.trueLength = function () {
  console.log(`${this}`);
  // console.log(`${this.name}`);
  console.log(`True length is ${this.trim().length}`);
};

anotherUserName.trueLength();

"iceage1234567890".trueLength();

// Part A: .call() (Explicit Execution Context Pass)
// .call() function ko fauran execute karta hai aur pehla argument wo object leta hai jise aap this banana chahte hain.

function setUsername(username) {
  this.username = username;
}

function createUser(username, email, password) {
  // ✅ Explicitly passing 'createUser' ka 'this' to 'setUsername'
  setUsername.call(this, username);

  this.email = email;
  this.password = password;
}

// Part B: .apply() (Arguments as Array)
// .apply() bilkul .call() ki tarah fauran run hota hai, bas difference yeh hai ke extra arguments single list ki bajaye Array [] mein diye jate hain.

const userTwo = new createUser("waqas", "waqas@example.com", "123");
console.log(userTwo);
// Output: { username: 'waqas', email: 'waqas@example.com', password: '123' } ✅

function printInfo(city, country) {
  console.log(`${this.username} lives in ${city}, ${country}`);
}

const user1 = { username: "Waqas" };

// Direct comma values (.call)
printInfo.call(user1, "Karachi", "Pakistan");

// Array format values (.apply)
printInfo.apply(user1, ["Karachi", "Pakistan"]);


// Part C: .bind() (Returns a Copy for Later Execution)
// .bind() function ko fauran execute NAHI karta. Yeh ek naya function return karta hai jisme this permanently set ho chuka hota hai. Yeh React Event Handlers mein sab se zyada use hota tha.

const user2 = {
    username: "Waqas",
    getUserName: function() {
        console.log(this.username);
    }
};

// ❌ Delay/Event Listener mein 'this' loose ho jata hai
setTimeout(user2.getUserName, 1000); // undefined

// ✅ .bind() creates a bound function for later call
const boundFunc = user2.getUserName.bind(user2);
setTimeout(boundFunc, 1000); // "Waqas" (After 1 second)