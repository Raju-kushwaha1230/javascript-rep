//A callback is a function passed as an argument to another function, executed after the asynchronous task is complete.

function fetchData(callback){
    setTimeout(() => {
        console.log('data fetched ');
        callback();
    }, 2000);
}
console.log('start');
fetchData(()=> console.log('done'));
console.log('end')

//ex--- task queue 

function proceeOrder(orderId,callback){
    console.log(`processing id #${orderId}`);
    setTimeout(() => {
        console.log(`task completed #${orderId}`);
        callback();
    }, 2000);
}

console.log('start')
proceeOrder(1,()=>{ // calling another fucntion as argument of procesOrder
    proceeOrder(2,()=> {
        proceeOrder(3,()=>{
            console.log("order processed !")
        })
    })

})

console.log('end')