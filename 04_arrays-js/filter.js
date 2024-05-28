/*
The filter() method is a built-in method in javascript that allowa
you to crerate a new array containing elements that pass a
certain condition .
It provides a clean and concise way to filter out element from an array based on a specified criteraia.

*/


const songs = [
    { name: "perfect", singer: 'james arthur', duration: 4.34 },
    { name: "say you won't let go", singer: 'james arthur', duration: 3.31 },
    { name: "cars outside", singer: 'james arthur', duration: 4.06 },
    { name: "empty space", singer: 'james arthur', duration: 3.42 },
]

console.log(songs.filter(song => song.duration > 4))
console.log('singer')
console.log(songs.filter(song => song.singer == 'james arthur'))




const computer = [
    { ram: 4, sdd: 250 },
    { ram: 8, sdd: 550 },
    { ram: 16, sdd: 400 },
    { ram: 32, sdd: 250 },

]
console.log(computer.filter(com => com.ram > 16))
console.log(computer.filter(com => com.ram < 16))



const ages = [
    { name: 'smith', age: 18 },
    { name: 'raju', age: 21 },
    { name: 'mighty', age: 21 },
    { name: 'john', age: 12 },
    { name: 'biraj', age: 10 },
]

console.log(ages.filter(ag => ag.age > 18))



const words = [
    'spray',
    'limit',
    'elite',
    'exuberant',
    'destruction',
    'present',
]

console.log(words.filter(wd => wd.length > 6))