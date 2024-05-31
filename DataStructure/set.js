/**
 Set is a built-in data structure introduced in (ES6) that represent a
 collection of unique values . Unlike arrays , set allows t=you to store only unique
 values, which means duplicate values are automatically removed .
 Each value can occur only once within a set .

 set object are useful when you need to store a list of unique elements
 and quickly check for the existence of a specific value.

 */

 const initialValue = [1,2,3,2,2,2,2]
const mySet = new Set(initialValue);
 //set works in unique value and if there is duplicate value then it will automatically remove it just like this code
mySet.add('mighty') // adding the new property using add method

console.log(mySet)
console.log(mySet.has('mighty')) //true
console.log(mySet.has('raju')) //false

mySet.delete(2) //it will only remove perticular property
// mySet.clear();//it will remove all the set property 
console.log(mySet)

for (let key of mySet){
    console.log(key)
}

const MyLetter = new Set()
MyLetter.add('a')
MyLetter.add('b')
MyLetter.add('c')

console.log(MyLetter)
for (let key of MyLetter){
    console.log(key)
}