//


const fruits = [
    'aaples',
    'pomegranate',
    'mango',
    'strawberries',
    'pineaaple',
    'grapefruit'
];
console.log(fruits.length)
fruits.push('banana')
console.log(fruits)
console.log(fruits.length)

fruits.pop() //removes the last element from the array
console.log(fruits)

fruits.shift() //removes the first element
console.log(fruits)

fruits.unshift('apple') //insert element in array at the begine
console.log(fruits)

const fruit =['mango','pomo','apple']
const totalFruits = fruits.concat(fruit)
console.log(totalFruits)

console.log(fruit.join('-'))
 
console.log(fruit.reverse())
console.log(fruits.slice(0,2))
console.log(fruit.sort())




