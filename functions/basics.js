// function is a block of code which performs a specific task 
// it followa DRY means don't repeat yourself
// function name(parameterIfAny){....}

function greet() {   // decalaring the function with nme greet()
    console.log('hello there ');  // the cpde to be executed
}

greet();  // calling the function

function sayHello(userName){ //taking perameter name userName
    console.log(`Hello ${userName}`);
}

sayHello('mighty'); //passing arguments 

console.log(add(90,20)) //i can use the function anywhere in the code using the declation method 
//return in function
function add(a,b){
    return a + b;
}
console.log(add(20,30)) //

// greetings('raju') //can't work before initializing   if using the function expression
//function Expression 
const greetings = function (user){
    console.log(`Hello ${user}`);
};

greetings('mighty');

