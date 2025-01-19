//A Promise represents a value that may be available now, in the future, or never.
//  Promises make it easier to handle asynchronous tasks and avoid callback hell.
//  States of a Promise:

// Pending: Initial state, not fulfilled or rejected.
// Fulfilled: Operation completed successfully.
// Rejected: Operation failed.


const promise = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve('data fetched successfully');

    }, 2000);
});
console.log('start')
promise
.then((data) => console.log(data)) //for handle success 
.catch((error)=> console.error(error)); //for handle errors 

console.log('end')


//Handling Multiple Async Tasks

//a. Promise.all
//Waits for all Promises to resolve or rejects if any Promise fails.

const promis1= new Promise((resolve)=> setTimeout(() => {
    resolve("data fetched one")
}, 1000));

const promis2 = new Promise((resolve)=>{
    setTimeout(() => {
        resolve("data fetched two")
    }, 2000);
})

// Promise.all([promis1,promis2]).then((result) =>{
//     console.log(result);
// })

//b. Promise.race
//Returns the result of the first Promise that resolves or rejects.

Promise.race([promis1, promis2]).then((result) => {
    console.log(result);
})
