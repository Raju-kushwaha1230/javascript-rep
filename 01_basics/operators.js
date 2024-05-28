// relational operator
console.log(12 < 9); // false
console.log(12 > 9); // true
console.log(23 >= 23); //true
console.log(23 <= 23); //false

// ---------------------------------------------------------------------------------
/* equality operator
=== strict equality (type + value )
!== strict not  equality  (type + value)
== lose equality operator  (value)
!== lose not equal operator (value)
*/

console.log(10 === 10); //true
console.log(10 === "10"); //false cause ==== operator check the type and value both
console.log(10 !== "10"); // true cause the both type is not equal one is number and another one is string
console.log(29 == "29"); //true cause == operator just check the value only not type
console.log(29 !== "29"); //false
console.log(29 !== 34); //true

//logical operator
/*
logical And (&&)-----
true if the both of the operands / boolean values are true else evaluates to false 


logical or (||)
true if either   of the operands / boolean values are true else evaluates to false 


logical Not (!)
true if the operands is false and vice-versa 
*/

const a = true;
const b = false,
  c = 4;

console.log(a && b); //false
console.log(c > 2 && c != 4); // false

console.log(a || b); //true
console.log(c > 10 || c == 4); ///true
console.log(c > 10 || c == 20); //false

console.log(!a);
console.log(a != b); //true
console.log(c != 4); // false
console.log(c != 20); // true

let password = "mighty@123";

if (password.length >= 8 && password.includes("@", "mighty", 1, "raju")) {
  console.log("valide pasword");
} else {
  console.log("Invalid password");
}

// the spread operator is an new addition to the set of operstor in javascript ES6
//it takes in an iterable (e.g. an array) and expands it into indivisual element
//the spread operator is commonly used to make shallow copies of js object
//using this operator makes the code concise its readability

function giveMe(a, b, c, d) {
  console.log("a", a);
  console.log("b", b);
  console.log("c", c);
  console.log("d", d);
}

const colors = ["red", "green", "blue", "yellow"];

giveMe(1, 2, 3, 4);
giveMe(...colors); // spreed operator is helping to spread indivually

//... spread syntax

const strNUm = ["one", "two", "three", "four"];
const morestr = ["five", "six"];
const concat = [...strNUm, ...morestr];
console.log(concat);

const obj1 = { x: 1, y: 2 };
const obj2 = { z: 3 };
const boj = { ...obj1, ...obj2 };
console.log(boj);



//The rest operator syntax(...) allows a function to accept an identification number of argument
//as an array , providing a way to represent variadic function in javascript 
function user(...user){
    console.log(user);
}
user('mighty','raju',23);


function user2(x,...user){
    console.log(x)
    console.log(user)
}
user2('mighty','raku',23); 


function person (firstName,lastName,...hobies){
    console.log(firstName)
    console.log(lastName)
    console.log(hobies)
}
person('raju','kushwaha','playing guitar','singing', 'coding ', 'camping')




/*
The ternary operator in javascript is a concise way of writing conditional expression.
it is the only javascript operator that tales three oprands : a condition followed by a question mark (?)
an expression to execute of the condition is true , follwed by a cplpo (:)
and an expression to execute if the condition is false .
condition ? exprIfTrue : exprIfFalse ;
*/

let pasword = 2;

function passwordChecker (ps){
  // if (ps === 8){
  //   return 'strong password';
  // }
  // else{
  //   return "password should be 8 character ";

  // }
  return (ps ===8) ? "strong password " : "password should be 8 character"
  }
console.log(passwordChecker(password))



const age =34;
const isAdult = age >= 18 ? "Adult" : "teanager";
console.log(isAdult)

const isAdul = (age) => age <=18 ? "Teanager " : "Adult" ;
console.log(isAdul(12))

let money = true
const Havemoney = money ==true ? "Buy product" : "Ther should bring money"
console.log(Havemoney)

