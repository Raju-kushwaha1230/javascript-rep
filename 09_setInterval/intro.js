// SETinTERVAL ALLOWS to run a block of code in a loop 


// setInterval(
//     () => console.log(`this function will be executed every 2 seconds`),
//     2000
// );

//setTimeout - how much take time to execute the program
// setTimeout (function () {
//     console.log(`this function will executed in 3 seconds`)

// },3000);

//clearInterval

const intervalId = setInterval(function(){
    console.log(`this function is being ececuted at the interval`)

},1000);
//
setTimeout(function () {
    clearInterval(intervalId)
    console.log(`interval stopped`)
},10000 );
