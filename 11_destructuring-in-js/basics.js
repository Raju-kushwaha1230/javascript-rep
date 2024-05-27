//Destructuring allows us to "unpack" values from data-structure (Array, objects) into separate distinct variables 

const foo = ['one', 'two', 'three'];

// console.log(foo[0])
// console.log(foo[1])

// instead of doing this 
// -------------------------array destructuring---------------------------------------
//array destruturing in javascript : name doeshn't matter but order does
const [one,two,three] = foo;
console.log(one)
console.log(two)

const [mighty,raju] = foo // can define own value while destructuring 
console.log(mighty) 
console.log(raju)

let a,b

[a = 5,b = 8] =["mighty"] // default value while destructuring and there also can define new value 
console.log(a)











// ---------------object destructuring--------------------------------------

//in object destructuring order doesn't matter but the name does matter


const student = { name:'mighty', position:'First',rollNo:23}
// const {color} = student // not working cause name matter in object destruturing
const {name , position,rollNo} = student
console.log(name)
console.log(position)
console.log(rollNo)

//declaring new name for order
const num = {x1:100,y1:200}
const {x1:new1 , y1 : new2} = num //can change the name while object destructuring 
console.log(new1) //can acces the element using new name
console.log(new2)
// console.log(x1) // not working cause x1 is not defined cause chnaging the name into new1


// object destructuring and rest operator 
let {g, h, ...rest}  ={g:100, h:200, c:300, f:5000}
console.log(g)
console.log(h)
console.log(rest)


const person3 = {name:'mighty', age:21, country :'nepal'}
const {name:personName, age:personAge, country:personCountry} = person3
console.log(personName)
console.log(personAge)
console.log(personCountry)



// -------------------------function distructuring-----------------------------------
//destruturig from function
function f(){
    return [1,2]  //returning array of 1 and 2 value
}
let x,y // declaring the varable x and y 

[x,y] = f()  // storing the value into x and y using destructuring  method 
console.log(x)  //loging there x variable
console.log(y)  // loging here y variable


//ignoring the return value
function fm(){
    return [1,3,5] 
}

const [q, ,w] =fm() //here ignoring the second value while destruturing the value
console.log(q)
console.log(w)


//assigning the rest of an array to a variable using spread operator 

const [s, ...n] = ['mighty', 'raju', 'wenju', 'raku']

console.log(a)
console.log(n)



const array2 = ['red', 'yellow', 'blue']
const [color1,color2,color3] = array2 
console.log(color1)
console.log(color2)
console.log(color3)

const person ={
    name :'mighty',
    age : 21,
    country : 'US'
}
function printPerson(person){
    console.log(`Name: ${person.name}`)
    console.log(`Age: ${person.age}`)
    console.log(`Country: ${person.country}`)

}
printPerson(person)

//instead of doing this 

function printinfo({name,age,country}){  //function destructuring 
    console.log(`Name: ${name}`)
    console.log(`Age: ${age}`)
    console.log(`Country: ${country}`)

}
printinfo(person)



//rename the function destructuring

let options = {
    tittle : 'my menu',
    items : ['burger', 'pizza']
}
function showOption({tittle ='untittle',width:w=100,height:h=200,items:[item1,item2]}){
    console.log(tittle)
    console.log(item1)
    console.log(item2)
    console.log(w)
    console.log(h)

}
showOption(options)


//nested destructuring

const songs =[
    {name:'payphone', singer: 'smith' ,duration: 3.45},
    {name:'fame of god ', singer: 'mighty' ,duration: 4.45},
    {name1:'blank space', singer: 'james aurther' ,duration: 4},
    {name:'train wreck', singer: 'james' ,duration: 3.45},
    {name:'empty space', singer: 'james aurthor' ,duration: 3.45},
    
]
const [, ,{ name1:m,singer: sh,duration}] = songs
console.log(m)
console.log(sh)