/*
The "for...of" loop in javascript is a modern iteration statement introduce in
ECMAScript 6 that provides a concise and easy way to over element in iterable objects like arrays ,
strings, maps, sets, and more . 
It allows you to iterate directly over the values of the elements, rather than dealing with their
indices or keys, which makes the code more readable and less error-prone

for (variable of iterable ) {.......}
*/


let peoples= ['mighty','raju','john']

for (let people of peoples){
    console.log(people)
}

const text = "hello"

for (const char of text){
    console.log(char)
}


const array1 = ['a', 'b', 'c'];

for (let values of array1){
    console.log(values)
}


