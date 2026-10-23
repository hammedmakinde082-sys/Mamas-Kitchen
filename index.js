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

function greet(name, age) {  
    return `hello, ${name} ${age}`
};

console.log(greet('john', 30))

// const USD = 1200;
// const AUD = USD * 1.5;

// console.log(AUD)

const hasMembership = true;

const answer = hasMembership ? 'Show video' : 'hide video'

console.log(answer)

const ages = 18;

const result = age >= 18 ? 'you may enter' : 'too young'

console.log(result)

for (let i = 1; i <= 15; i++){
    if(i % 5 === 0){
        console.log(`${i} - ASAP Frontend`)
    } else if(i % 2 === 0){
        console.log(`${i} - Frontend`)
    } else{
        console.log(`${i} - ASAP`)
    }
}

const str = 'Asap Frontend';
    for(let i = 0; i < str.length; i++){
        console.log(str[i])
    }

// REGULAR FUNCTION DECLARATION
// function convertUsdToAud (USD){
//         return USD * 1.5
//}

// console.log(convertUsdToAud(1000))
// console.log(convertUsdToAud(500))
// console.log(convertUsdToAud(200))

// ARROW FUNCTION DECLARATION
const convertUsdToAud = (dollar) => {
    return dollar * 1.5
} 

console.log(convertUsdToAud(1000))
console.log(convertUsdToAud(500))
console.log(convertUsdToAud(200))

// LONGER FILTER METHOD - REMOVING ELEMENT
// const number = [15, 11, 14, 23, 30];

// const newNumber = number.filter((element) => {
//     console.log(element);
//     if(element <= 15){
//         return true
//     }
// })

// console.log(newNumber)

// SHORTER FILTER METHOD
const number = [12, 13, 15, 18, 20];

const newNumber = number.filter(element => element <= 15)

console.log(newNumber)

let array = [18, 20, 16, 15, 21];

let newArray = array.filter(element => element >= 18)

console.log(newArray)

// FILTER USING LOOP
let people = [12, 13, 18, 20, 30];

let newPoeple = [];
for(let i = 0; i < people.length; i++){
    if(people[i] >= 18){
        newPoeple.push(people[i])
    }
}

console.log(newPoeple)

// .MAP METHOD - CHANGING VALUES
let arrays = [1, 2, 3, 4, 5];

let newArrays = arrays.map((element) => {
    return 'hamz'
});

console.log(newArrays)

// SHORT MAPPING METHOD
let USDT = [10, 20, 30, 40];

let AUDT = USDT.map(element => element * 1.5)

console.log(AUDT)

// LONG MAPPING METHOD
let usDollars = [100, 150, 200, 35];

let newUsDollar = usDollars.map((element) => {
    return element * 1.5
});

console.log(newUsDollar)


let usDollarz = [10, 20, 30, 40];

let auDollarz = [];

for(let i = 0; i < usDollarz.length; i++){
    auDollarz.push(usDollarz[i] * 1.5);
};

console.log(auDollarz)

function signUp(
    email, 
    password, 
    name, 
    discord, 
    subscription, 
    lessonsCompleted
) {
    let user = {
        email: email,
        password: password,
        name: name,
        discord: discord,
        subscription: subscription,
        lessonsCompleted: lessonsCompleted 
    }

    console.log(user)
}

signUp('hamz@gmail.com', 'test123', 'john smith', 'hamzkollection', 'vip', [1, 2])

function changeButtonToGreen(){
    document.querySelector('button').style.backgroundColor ='green'
}

// function calculateTotal (a, b, c){
//     return a + b + c
// }

// console.log(calculateTotal(80, 70, 90))

// function calculateAverage(total, numberOfSubjects) {
//     return total / numberOfSubjects
// }

// console.log(calculateAverage(195, 3))

function calculateTotal(a, b, c){
    return a + b + c
}

function calculateAverage(total, numberOfSubjects){
    return total / numberOfSubjects
}

function getGrade(average){
    if(average >= 80){
        return "A"
    } else if(average >= 60){
        return "B"
    } else if(average >= 50){
        return "C"
    } else {
        return "D"
    }
}

let total = calculateTotal(80, 70, 90)
let average = calculateAverage(total, 3)
let grade = getGrade(average)

console.log(total)
console.log(average)
console.log(grade)

function displayReport(total, average, grade){
    console.log("==== STUDENT GRADE REPORT ====");
    console.log(`Total score: ${total}`);
    console.log(`Average score: ${average}`);
    console.log(`Grade: ${grade}`);
}

displayReport(240, 80, "A")

function isValidScore(score){
    return score >= 0 && score <=100;
}

console.log(isValidScore(80))
console.log(isValidScore(120))
console.log(isValidScore(-5))