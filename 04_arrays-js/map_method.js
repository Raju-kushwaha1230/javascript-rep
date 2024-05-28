/*
The map() method creates a new array populated with the results 
of calling a provided function on every element in the calling array


*/


let numbers = [1, 2, 3, 4, 5]

let double = numbers.map(num => num * 2) ;
//it doesn't modify the exising array instead of this it creates a new array but foreach method modify the existing array

console.log(double);
console.log(numbers)

let peoples =[
    {firstName : 'raju' , lastNAme: 'kushwaha'},
    {firstName : 'wenju' , lastNAme: 'kushwaha'},
    {firstName : 'Aku' , lastNAme: 'kushwaha'},
]

const results = peoples.map(person => {
    return [person.firstName, person.lastNAme ];
})
console.log(results)
console.log(peoples)





const randomNum = [2,4,6,2,3,4]
 const randomResult = randomNum.map(elem => elem *10)
 console.log(randomResult)

 