/*
Enhaces object literals , introduced in ECMAScript 6(ES6)
are a set of enhancement to the syntax for defining objects in javascript . these enhancement make 
it more convenient and concise to define objects property and methods

*/

function user(name,age,work){
    return {
        name,
        age,
        work,
        intro : () =>{
            console.log(`My name is ${name} and i'm just ${age} year old and i'm a ${work}`)
        }
    };
}
const mighty = user('raju',21,'programmer')
console.log(mighty.intro())
