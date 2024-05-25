// when provide function as an (argument) to other function that function is known as callback function

// showCallFunc(function () {})

function showCallFunc (fn) {
    const value = 10;
    fn(value)
}

showCallFunc(function(value){
    console.log(value);
})

function greet (name , cb) {
    console.log(`Hello ${name}`)
    cb()
}

function cb(){
    console.log('I am callback function ')
}
greet('mighty',cb)
















