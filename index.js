const age = 30;
const name = 'hamz';

console.log(`My name is ${name} and I am ${age}`)

const s = 'hello world';
console.log(s.toUpperCase())

const fruit = ['Mango', 'Banana', 'Oranges', 'Apples']

console.log(fruit)
fruit.push = ('Pears')
fruit.unshift = ('Berry')
fruit.pop()

const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    adress: {
        street: 'benson',
        number: 20,
        city: 'MA'
    },
    hobbies: ['football', 'eating', 'traveling']
}

console.log(person)

for(let i = 0; i < person.lenght; i++){
    console.log(i)
}

const x = 10;
// if(x < 11){
//     console.log("I'm leaving")
// } else{
//     console.log("I'm not leaving")
// }
const color = x >  11 ? 'red' : 'blue'

console.log(color) 

// function addNums (num1, num2){
//     console.log(num1 + num2)
// }

// addNums(5,3)

const addNums = (num1, num2) => {
    return num1 + num2
}

console.log(addNums(5,6))

// const addNums = num1 => num1 + 61

// console.log(addNums(5))


