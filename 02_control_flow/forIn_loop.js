/*
the "for...in" loop in javascript is used to iterate over the anumerable properties of an object .
It is a way to loop theough the keys (property names ) of an object .

for (let key in object ) {......}
*/

let person = {
    name :'mighty',
    age :21,
    gender :'male'
}

for (let key in person){
    console.log(key,person[key]);
}

let list = ['one','two', 'theree', 'four']
for (let keys in list){
    console.log(`${keys } : ${list[keys]}`)
}

const object = {
    a: 1,
    b: 2,
    c: 3,
};
for (let keys in object){
    console.log(`${keys} : ${object[keys]}`)
}