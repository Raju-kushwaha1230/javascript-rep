/* 
The find() method is another built-in array helper in javascript 
that allows you to find the first element in an array that matches a 
specific condition .
It returns the value of the first element that satidfies the given 
testing function , or undefined if no element is found 

*/

const peoples = [
    {name : 'mighty' , age : 21,},
    {name : 'john' , age : 30,},
    {name : 'alex' , age : 11,},
    {name : 'harry' , age : 31,},
    {name : 'mighty' , age : 18,},

]

const res = peoples.find( person => person.name ==='mighty');
console.log(res)


const posts =[
    {id:1, content : "Good Post"},
    {id:2, content : "funny Post"},
    {id:3, content : "sad Post"},
    {id:1, content : "funny Post"},

]

const postres = posts.find(post => post.content === 'funny Post')
console.log(postres)

