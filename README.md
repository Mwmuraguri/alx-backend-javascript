# ES6 Basics Project
This project aims to explore and implement various features introduced in ECMAScript 2015 (ES6), the sixth edition of the ECMAScript standard. The code examples provided in this project illustrate the usage of ES6 features, such as constants, block-scoped variables, arrow functions, rest and spread parameters, string templating, object creation and properties, iterators, and for-of loops.

Table of Contents
ES6 Basics Project
Table of Contents
1. What is ES6?
2. New Features Introduced in ES6
3. Constants vs Variables
4. Block-Scoped Variables
5. Arrow Functions and Function Parameters Defaulting to Them
6. Rest and Spread Function Parameters
7. String Templating in ES6
8. Object Creation and Properties in ES6
9. Iterators and For-of Loops
1. What is ES6?
ECMAScript 2015, also known as ES6, is the sixth edition of the ECMAScript standard. It brought significant enhancements to the JavaScript language, introducing new features, syntax improvements, and better ways of writing complex code. ES6 laid the foundation for modern JavaScript development, making code more readable, maintainable, and expressive.

2. New Features Introduced in ES6
ES6 introduced various features, including:

Arrow functions
Template literals
Destructuring assignment
Classes
Promises
Modules
Rest and spread operators
Let and const for variable declarations
Block-scoped variables
Iterators and for-of loops
This project focuses on exploring and demonstrating some of these features.

3. Constants vs Variables
In ES6, const and let were introduced for variable declarations. The primary difference between them lies in their mutability:

const: Declares a constant variable. Its value cannot be reassigned after initialization.
let: Declares a block-scoped variable. Its value can be reassigned within the same block.
4. Block-Scoped Variables
Block-scoped variables, introduced with let and const, have a scope limited to the block, statement, or expression they are declared in. This prevents unintended variable hoisting and enhances code maintainability.

5. Arrow Functions and Function Parameters Defaulting to Them
Arrow functions provide a concise syntax for writing function expressions. They have a more straightforward syntax and automatically capture the this value from the surrounding context.

javascript
Copy code
// Example of an arrow function
const add = (a, b) => a + b;
6. Rest and Spread Function Parameters
ES6 introduced the rest and spread operators (...). The rest parameter allows functions to accept an indefinite number of arguments, while the spread operator allows iterable elements to be expanded.

javascript
Copy code
// Example of rest parameter
const sum = (...numbers) => numbers.reduce((acc, num) => acc + num, 0);

// Example of spread operator
const array1 = [1, 2, 3];
const array2 = [...array1, 4, 5];
7. String Templating in ES6
Template literals provide a more readable way to concatenate strings and embed expressions within them.

javascript
Copy code
// Example of string templating
const name = 'John';
const greeting = `Hello, ${name}!`;
8. Object Creation and Properties in ES6
ES6 introduced concise object literals and improved ways of creating and working with objects.

javascript
Copy code
// Example of concise object literal
const key = 'value';
const myObject = { key };

// Example of computed property names
const dynamicKey = 'dynamicKey';
const anotherObject = { [dynamicKey]: 'Dynamic Value' };
9. Iterators and For-of Loops
ES6 supports the iteration protocol, allowing objects to define or customize their iteration behavior. The for-of loop simplifies the process of iterating over iterable objects.

javascript
Copy code
// Example of iterator and for-of loop
const iterableObject = {
  [Symbol.iterator]: function* () {
    yield 1;
    yield 2;
    yield 3;
  },
};

for (const value of iterableObject) {
  console.log(value);
}
