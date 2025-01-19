// synchrounous programming is executing sequentially means line by line and itll wait for each line to execute then itll go to next line 
console.log("it will run line by line ")

console.log('first')
console.log('second')
console.log('thrid')

// asynchronous programming Functions running in parallel with other functions are called asynchronous
//A good example is JavaScript setTimeout()

console.log('start')
setTimeout(() => {
    console.log('middle')
}, 1000);
console.log('end')
