// relational operator
console.log(12<9) // false
console.log(12>9) // true
console.log(23>=23) //true
console.log(23<=23) //false

// ---------------------------------------------------------------------------------
/* equality operator
=== strict equality (type + value )
!== strict not  equality  (type + value)
== lose equality operator  (value)
!== lose not equal operator (value)
*/

console.log(10===10); //true
console.log(10==='10'); //false cause ==== operator check the type and value both
console.log(10!=='10'); // true cause the both type is not equal one is number and another one is string 
console.log(29=='29'); //true cause == operator just check the value only not type
console.log(29!=='29');//false 
console.log(29!==34); //true

//logical operator 
/*
logical And (&&)-----
true if the both of the operands / boolean values are true else evaluates to false 


logical or (||)
true if either   of the operands / boolean values are true else evaluates to false 


logical Not (!)
true if the operands is false and vice-versa 
*/

const a=true
const b=false , c=4

console.log(a && b) //false 
console.log(c>2 && c!=4) // false 

console.log(a || b) //true
console.log(c>10 || c==4) ///true
console.log(c>10 || c==20) //false

console.log(!a)
console.log(a !=b) //true
console.log(c!=4) // false
console.log(c!=20) // true


let password = "mighty@123"

if (password.length>=8 && password.includes('@','mighty',1,'raju')){
    console.log('valide pasword')
}else{
    console.log('Invalid password')
}


