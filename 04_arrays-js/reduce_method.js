/**
 The reduce() method applies the reducer function to each element of an array ,
 accumulating the results into a single value. It s often used to persorm
 calculations or aggregation an array elemenets and simplify the array into a 
 single value
 */


const numer = [1,2,3,4]
const sum = numer.reduce((p,c) => { //p is previous value and c is current value of array  
    return p+c
},0);  //0 is the previous value as a first index
console.log(sum)


const peoples = [
    {name:'mighty', age:21},
    {name:'alex', age:31},
    {name:'umesh', age:41},
    {name:'nancy', age:19},

]

const oldest = peoples.reduce((p,c) =>( c.age > p ? c.age : p),0)
console.log(oldest)

const words = [
    'apple',
    'banana',
    'orange',
    'apple',
    'banana',
]

const wordFre = words.reduce((freq, word) => {
    freq[word] =freq[word] || 0+1 ;
    return freq

},{})

console.log(wordFre)

const numbers = [2,3,4,5]

const product = numbers.reduce((p,c) => (p * c),1);
console.log(product)