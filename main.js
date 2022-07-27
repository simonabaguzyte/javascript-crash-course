console.log('Hello!');
console.error('This is an error');
console.warn('This is a warning');

let age = 30;
age = 31;
console.log(age);

// const age2 = 30;
// age2 = 31;
// console.log(age2); //error

const name = 'Simona';
const age3 = 24;
const rating = 4.5;
const isCool = true;
const emptyVariable = null; //empty variable
const undefinedVariable = undefined;
let undefinedVariable2; //initialized but also undefined

console.log(typeof name);
console.log(typeof age3);
console.log(typeof rating); //no floats or decimals, etc.
console.log(typeof isCool);
console.log(typeof undefinedVariable); //-> object (bogus(netikras) typeof return value). 
console.log(typeof undefinedVariable);
console.log(typeof undefinedVariable2);

//Concatenation:
console.log('My name is '+ name + ' and I am ' + age3 + ' years old.');
//Template string:
const hello = `My name is ${name} and I am ${age3}.`;
console.log(hello);


const s = 'Hello, World!';
console.log(s.length);
console.log(s.toUpperCase());
console.log(s.substring(0, 5));
console.log(s.substring(7, 12).toUpperCase());
console.log(s.split(''));
const a = 'technology, computers, it, code';
console.log(a.split(', '));

const  numbers = new Array(1,2,3,4,5);
console.log(numbers);

const fruits = ['apple', 'orange', 'banana'];
console.log(fruits);
console.log(fruits[1]); //-> orange
fruits[3] = 'grapes'; //if the place is occupied, fruit is going to be changed.
console.log(fruits);

//inserting into array's end (Not changing the occupant!):
fruits.push('pineapple');
console.log(fruits);
//inserting into array's beginning (Not changing the occupant!):
fruits.unshift('strawberries');
console.log(fruits);
//deleting the last one:
fruits.pop();
console.log(fruits);
//checking if something is an array:
console.log(Array.isArray(fruits));
// console.log(Array.isArray(vegetables)); //-> error (there is no such array)
//getting index:
console.log(fruits.indexOf('orange')); //-> 2
console.log(fruits.indexOf('milk')); //-> -1 (there is no such element in the array)


const array_of_multiple_data_types = ['apple', 10, 'orange', true, 'banana', 0.5];
console.log(array_of_multiple_data_types);

// Object literals - key & value pairs:
const person = {
    firstName: 'John',
    lastName: 'Doe',
    shoeSize: 44.5,
    hobbies: ['movies', 'cooking'],
    address: {
        street: '50 main st.',
        city: 'Boston',
        state: 'MA'
    }
}

console.log(person);
console.log(person.firstName, person.lastName);
console.log(person.hobbies[0]);
console.log(person.address.city);

//Destructuring - creating var. of object literals:
const {firstName, lastName} = person;
console.log(firstName);
//Destructuring embedded objects:
const {address: {city}} = person;
console.log(city); //-> Boston

//Adding properties 'person':
person.email = 'john.doe@email.com';
console.log(person);

const toDoList = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    }, {
        id: 2,
        text: 'Meeting with Lauren',
        isCompleted: true
    }, {
        id: 3,
        text: 'Dentist appointment',
        isCompleted: false
    }
]

console.log(toDoList[1].text);

//Converting code into JSON within scrip (so the data could be sent to server):
const toDoListJSON = JSON.stringify(toDoList);
console.log(toDoListJSON);

//Loops:
for(let i = 1; i <= 10; i++) {
    console.log(`FOR loop number: ${i}`);
}

console.log('\n');

let i = 1;
while(i <= 10) {
    console.log(`WHILE loop number: ${i}`);
    i++;
}

//Looping through arrays:
for(let i = 0; i < toDoList.length; i++) {
    console.log(toDoList[i].text);
}

//'For of' loop:
for (let toDo of toDoList) {
    console.log(toDo);
}
for (let toDo of toDoList) {
    console.log(toDo.isCompleted);
}

//'forEach', 'map', 'filter':
toDoList.forEach(function(todo) {
    console.log(todo.text);
});

const toDoText = toDoList.map(function(todo) {
    return todo.text;
});
console.log(toDoText); //returns an array of 'text' elements.

const toDoCompleted = toDoList.filter(function(todo) {
    return todo.isCompleted === true;
});
console.log(toDoCompleted); //returns completed (true) elements.

const toDoCompleted2 = toDoList.filter(function(todo) {
    return todo.isCompleted === true;
}).map(function(toDo) {
    return toDo.text;
});
console.log(toDoCompleted2); //returns completed (true) elements' text.


Conditionals:
e = '10';

/* With double equal (==), this '10' is equal to 10 (string to int); 
   3rd equal sign compares if the data types matches, so '10' is NOT equal to 10.
   RECOMMENDATION: always use triple. */
if (e == 10) {
    console.log('e = 10');
}
if (e === 10) {
    console.log('e = 10');
}

//AND (&&) and OR (||) operators:
const q = 9;
const w = 4;

if (q < 10 || w < 10) {
    console.log('q is less than 10 or w is less than 10');
} else if (q === 10 && w === 10) {
    console.log('q is equal to 10 or w is equal to 10');
} else {
    console.log('q is more than 10 or w is more than 10');
}


//The conditional (ternary) operator (condition ? if true : if false)
const var1 = 11;
const color = var1 > 10 ? 'red' : 'blue';
console.log(color); //-> red

//SWITCHES:
const var2 = 8;
const color2 = var2 > 10 ? 'red' : 'blue';
switch(color2) {
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('the color is neither red nor blue'); //if const color = 'green'
        break;
}


//Functions:
function addNumbers(num1, num2) {
    return num1 + num2;
}

console.log(addNumbers(9,4));


//Arrow function with default parameters' values:
const addNumbers2 = (num1 = 4, num2 = 1) => num1 + num2;

console.log(addNumbers2()); //->5


//Arrow function with one parameter:
const addNumbers3 = num1 => num1 + 4;

console.log(addNumbers3(9)); //->13


//'Lexical this'!

/*OOP. Constructive function: 1)constructive functions (named
starting with capital letter) with prototypes; 2)ES6 (also called ES2015) classes */
function Person(firstName, lastName, dateOfBirth) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfBirth = new Date(dateOfBirth);
}

//Adding methods to the prototype:
Person.prototype.getBirthYear = function() {
    return this.dateOfBirth.getFullYear();
}

Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
}

//Instantiating the object (ivedamas objektas):
const person1 = new Person('John', 'Doe', '1958-04-05');
const person2 = new Person('Anne', 'Smith', '1994-11-27');

console.log(person1);
console.log(person2.firstName);
console.log(person2.dateOfBirth.getFullYear());
console.log(person1.getBirthYear());
console.log(person2.getFullName());



//Same with ES6 ('syntactic sugar') classes:
//*a method is a function inside of a class called constructor* 
class Person2 {
    constructor(firstName, lastName, dateOfBirth) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dateOfBirth = new Date(dateOfBirth);
    }
    getBirthYear() {
        return this.dateOfBirth.getFullYear();
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

//Instantiating the object (ivedamas objektas):
const person3 = new Person2('John', 'Doe', '1958-04-05');
const person4 = new Person2('Anne', 'Smith', '1994-11-27');

console.log(person3);
console.log(person4.firstName);
console.log(person4.dateOfBirth.getFullYear());
console.log(person3.getBirthYear());
console.log(person4.getFullName());



 








































