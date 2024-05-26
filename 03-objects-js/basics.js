const person = {
    firstName : "mighty",   //firstName is a property or key  and mighty is a value 
    lastName : "Raju",
    age : 21,
    location : ['Planet', 'Earth'],
    isProgrmmer : true
}

console.log(person)
console.log(typeof(person))

//accesing item from objects
person.FullName = person.firstName.concat(person.lastName)

console.log(person.firstName)
console.log(person['lastName'])
console.log(person.FullName)