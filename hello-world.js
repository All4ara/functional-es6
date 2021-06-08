const sayHello = name => console.log(`hello ${name}`)

sayHello("ariel")


//Learning eslint to catch any mutation to const variables
const person = { 
    name: 'John Doe',
    age: 27,
};

person.name = "bob";