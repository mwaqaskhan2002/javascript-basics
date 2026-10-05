// fetch('https://something.com').then().catch().finally()

const promiseOne  = new Promise(function(resolve, reject){
    //Do an asynchronous task
    // DB calls, cryptography, network calls
    
    setTimeout(function(){
        console.log("Async task is complete");
        resolve() 
    }, 1000)

})

// resolve ka connection then kay saath hai 
promiseOne.then(function(){
    console.log("Promise Consumed");
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2 is complete");
        resolve()
    }, 1000)

}).then(function(){
    console.log("Promise 2 Resolved");
})    

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai",
                email: "chai@example.com"
        })
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({
                username: "hitesh",
                password: "123"
            })
        } else {
            reject("ERROR: Something went wrong")
        }
    }, 1000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.username;
})
.then((username) => {
    console.log(username);
})
.catch((error) => {
    console.log(error);
})
.finally(() => {
    console.log("Promise is either resolved or rejected");
})



const PromiseFive = new Promise(function(resolve, reject){

    setTimeout(function () {
      let error = false;
      if (!error) {
        resolve({username: "javascript", password: "123",});
        } 
      else {
        reject("ERROR: JS went wrong");
        }
    }, 1000);
})

async function consumePromiseFive() {
    try {
        const response = await PromiseFive;
        console.log(response);
    }
    catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

// async function getAllUsers(){
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     }
//     catch (error) {
//         console.log("E: ", error);
//     }
// }
// getAllUsers()

fetch("https://api.github.com/users/mwaqaskhan2002")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally();
