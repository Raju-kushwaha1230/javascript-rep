//Problem: Write a function that simulates a pizza order process:
// Place the order (2 seconds delay).
// Prepare the pizza (3 seconds delay).
// Deliver the pizza (1-second delay).
// Use async/await to manage the process and log each step.

function placeOrder(){
    return new Promise((resolve)=>{
        setTimeout(() => {
            console.log('order placed successfully!')
            resolve()
        }, 2000);
    })
}

function prepareOrder(prepareId){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            if(prepareId===0){
                console.log('order prepared !');
                // resolve();
            }
            else{
                reject('order not prepared');
            }
           
        }, 3000);
    })
}

function deliverOrder(){
    return new Promise((resolve)=>{
        setTimeout(() => {
            console.log('order delivered sucessfully')
        }, 1000);
    })
}

async function procesManage() { //The async function ensures that we can write asynchronous code in a synchronous-like manner.
    console.log("order processing !")
    try {
        await placeOrder();
        await prepareOrder(1);
        await deliverOrder();
        console.log('pizza order process completed')
    }
    catch(err){
        console.log(err)
        console.log("order failed plz try again!")
    }
}

procesManage();