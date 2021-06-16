const sayHello = name => console.log(`hello ${name}`)

sayHello("Ariel")


//Learning eslint to catch any mutation to const variables
const person = { 
    name: 'John Doe',
    age: 27,
};

person.name = "Bob";

// Functions as Data
const double = x => x * 2
const sub2 = x => x - 2
const triple = x => x * 3
const add5 = x => x + 5

const funcList = [
    double,
    sub2,
    triple,
    add5,
    Math.sqrt
]

let number = 42

funcList.forEach( func => number = func(number))

console.log(number)