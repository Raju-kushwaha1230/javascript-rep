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