/* 
When we call the foreach helper we pass in anonymous callback function,
This function gets called one time for every element in the array
Whatever is inside the function that logic happens

*/

const colors = ['red ', 'blue', 'red ', 'green']

// for (var i = 0; i< colors.length; i++){
//     console.log(colors[i])
// }

//doing instead of this follow the foreach of callback function to access the element inside the array 
colors.forEach(element => {
    console.log(element)
});

const words = ['gimi', 'hello', 'stuff', 'fuck', 'geni']
words.forEach( elem => console.log(elem));

const capWords = words.forEach((word , index, arr) =>{
    arr[index] = word[0].toUpperCase() + word.substring(1)
})
console.log(words)




const number = [23,34,12,49,23]
let sum =0 ;
const adder = number => sum += number

number.forEach( adder)
console.log(sum)







