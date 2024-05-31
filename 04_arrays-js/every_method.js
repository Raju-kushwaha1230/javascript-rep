

//---------------------------------------------------
/*
The every() and some() are two built-in array methods in javascript
that allow you to check the elements of an array based on a
given condition .Both methods take a callback funtion as an argument, 
which is applied to each element of the array

The every() method tests wether all elements in the array pass
the condtion specified by the provided callback function.
It returns true if the callback function returns true for every 
element , and false if any element fails the condititon.

The some() method tests wether at least one element in the array
passes the condition specified by the provided callback function.
It returns true if the callback function returns true forn at least one 
element , and false if no element passes the conditon.

*/

const people = [ 'migh', 'raju', 'wenj']

const res = people.every(people => people.length ===4)
//if the condtion is true for all of the item inside the array then it throw true if condition is not satisfied then it will throw false
const rest2 = people.some(poeple1 => poeple1.length < 5); 
//if the condition is true for the one of the item inside the array then it will trow true 
console.log(res)
console.log(rest2)

const songs = [
    {name:'Can i be him' , singer: 'James arthur', duration : 4.43},
    {name:'empty space' , singer: 'James arthur', duration : 4.03},
    {name:'what was you made for' , singer: 'billie eillis', duration : 3.43},
    {name:'someone called you' , singer: 'James arthur', duration : 4.43},
]

const everyRes = songs.every(song => song.duration > 3) //true
const someRes = songs.some(song => song.duration <4)
console.log(everyRes)
console.log(someRes)



 const prodeucts =[
    {name:'Checkers', category:'Toys'},
    {name:'Harry Potter', category:'Books'},
    {name:'iphone', category:'Electronics'},
    {name:'learn PHP', category:'Books'},
 ]

const allprodeuct = prodeucts.every(pro => pro.category ==='Books')
console.log('allproducts ',allprodeuct)
const someProduct = prodeucts.some(pro => pro.category ==='Books')
console.log('someprodct ',someProduct)