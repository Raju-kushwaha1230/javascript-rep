/**
 Symbol is a unique and immutable primitive data type introduced 
 in ECMAScript 6 (ES6) . A symbol is often used as an identifier for
 object properties to avoid potential naming conflicts.

 Unlike stirngd or number . symbols are guaranteed to be unique.
 When you  create a symbol , it is unique and cannot n=be recreates or changed . This uniqueness ensure that symbols will not collide with 
 other property names, even if they have the same string representstion.


 */
const mySymbol = Symbol('my cusotm symbo');
console.log(mySymbol); //immutable means the value cannot be changed 

console.log(typeof mySymbol);


const symbol1 = Symbol('name')
const symbol2 = Symbol('name')

const mighty ={}
mighty.age=21;
mighty['gender']='male'
mighty[symbol1] = 'raju'
mighty[symbol2] = 'mighty'

console.log(mighty)



const fav = Symbol('foo')
console.log(typeof fav)

const obj = {}
obj[Symbol] = 'Some values '
console.log(obj)