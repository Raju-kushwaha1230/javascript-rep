/*
scope in javascript refer to the current context of code , which determines the accessinbility of variable to javascript .

there are two types of scopes in js

global scope variable are those decalred outside of a block

local scope variable are those declarred inside of block.

*/

let textMessage = 'Hii'  //global scope variable
console.log(textMessage) 
{
    let textMe = 'HEllo ' //local variable
    console.log(textMe)
}
// console.log(textMe) //not working cause local variable only accessible inside the block

let messegeUs = 'He there ' //access from anywhere in code 

function showMe(){
    let message = "hello mighty" //local variable
    console.log(message)
    console.log(messegeUs) //accessible cause it is global variable
}
showMe()
// console.log(message) // not accessible cause it is local variable 



