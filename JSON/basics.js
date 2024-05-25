//JSON

const person = {
    "name": "Raju",
    "age":21 ,
    "email" :"mighty@gmail.com",
    "hobbies" : ["reading ", "coding", "cooking"],
    "address":"hyderabad"
}

//JSON.stringify
add=JSON.stringify(person)

//JSON.parse

const parseob = JSON.parse(add)
console.log(parseob)

