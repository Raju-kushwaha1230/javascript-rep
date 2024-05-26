function greet() {
    return `Hello, my name is ${person.name} and I'm ${person.age} years old`

}
const person = {
    name : 'Raju',
    age : 21,
    greet,
}
console.log(person.greet())


//another methods

const man = {
    name : 'Mighty',
    age :21,
    greetMe:function () {
        return `hello i am ${this.name} and i am ${this.age}`;
    },
};
console.log(man.greetMe());
