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

//===============================================================================
//Handling Multiple Async Tasks
//====================================================================================
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

Promise.all([promis1,promis2]).then((result) =>{
    console.log(result);
})
//-------------------------------------------------------------------------------
//b. Promise.race
//Returns the result of the first Promise that resolves or rejects.

Promise.race([promis1, promis2]).then((result) => {
    console.log(result);
})

const prom1= new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("data 1");
    }, 1000);
})
const prom2 = new Promise((resolve,reject)=> {
    setTimeout(() => {
        resolve('data 2');
    }, 2000);
})

Promise.race([prom1, prom2]).then((result)=>{
    console.log(result);
})

//Handling Multiple Async Tasks Using Promise.all

function fetchData(id){
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve(`user id is ${id}`)
        }, 2000);
    });
}

Promise.all([fetchData(1),fetchData(2),fetchData(3)]).then((result)=>{
    console.log(result)
})

//using Promise.race

function fetchFasterAPI(){
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve("fastest api response")
        }, 1000);
    })
}

function fetchSlowAPI(){
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve("slowest api")
        }, 3000);
    })
}

Promise.race([fetchSlowAPI(),fetchFasterAPI()]).then((result)=>{
    console.log('race result :',result);
});