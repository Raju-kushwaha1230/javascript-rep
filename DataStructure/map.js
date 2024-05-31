/**
Map is a built-in data structure introduced in (ES6) that allow you to store
  key-value pairs where both the keys and values can be of any data type. It is
  similar to an object , but eith a few key differences:


--> Keys can be of any data type : Unlike objects, where keys are limited to strings and symbols , map allows you to use any data type as keys, including 
 numbers, booleans ,  objects, and even other map instances.


--> Maintains insertion order : Map preserves the order od key-value pairs as
 they were inserted , while object keys may not be guaranteed to be in a specific order.


--> Interation : Map provides built-in methods for easy iteration over its elements.

*/

const map = new Map();

const keyOne = 'string'
const keyTwo = {}

const key = function() {}

map.set(keyOne, "value of keyOne")
map.set(keyTwo,"value keytwo")
map.set(key,'value of the key')


console.log(map.keys())
console.log(map.values())

console.log(map.delete(keyTwo))
//  console.log(map)
console.log(map)

for (let [key , value] of map){
    console.log(key , value)

}


const obj = new Map()
const a = 'number'
const b = {}
const c = function () {}
obj.set(a,1)
obj.set(b,2)
obj.set(c,3)

console.log(obj.get(a))
console.log(obj.size) // size is not a function thats why there is no paranthesis in size 

console.log(obj.delete(b))
console.log(obj.values())
