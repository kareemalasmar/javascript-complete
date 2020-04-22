// ##########################################################
// Lecture # 104 Variable Declarations with let and const
// **********************************************************

// // ES5
// var name5 = 'Jane Smith';
// var age5 = 23;
// name5 = 'Jane Miller';

// console.log(name5);

// // ES6
// const name6 = 'Jane Smith';
// let age6 = 23; // Can be changed
// // name6 = 'Jane Miller'; // Cant change the value of a constant

// console.log(name6);

// // ES5
// // Scope reaches out of block
// function driversLicense5(passedTest) {
//   if (passedTest) {
//     var firstName = 'John';
//     var yearOfBirth = 1990;
//   }
//   console.log(
//     firstName +
//       ', born in ' +
//       yearOfBirth +
//       ', is now officually allowed to drive  car.'
//   );
// }

// driversLicense5(true);

// // ES6
// // Variables declared by let and const are only accessible inside that block. Block Scope
// // let and const variables cant be used before its been declared and defined
// function driversLicense6(passedTest) {
//   // If let is declared outside then they can be seen outside of block (not const)
//   let firstName;

//   if (passedTest) {
//     let firstName = 'John';
//     // const yearOfBirth = 1990;
//   }
//   console.log(
//     firstName +
//       ', born in ' +
//       //   yearOfBirth +
//       ', is now officually allowed to drive  car.'
//   );
// }

// driversLicense6(true);

// let i = 23;
// console.log(i);
// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }

// console.log(i);

// ##########################################################
// Lecture # 105 Blocks and IIFE
// **********************************************************

// {
//   const a = 1;
//   let b = 2;
//   var c = 4;
// }

// console.log(c);
// console.log(a + b);
// // variables are private within the {} block aka block scope

// // ES5 Using an IIFE to hide a var from outside scope

// (function () {
//   var c = 3;
// })();

// // console.log(c);

// ##########################################################
// Lecture # 106 Strings and template literals
// **********************************************************

// let firstName = 'John';
// let lastName = 'Smith';
// const yearOfBirth = 1990;
// function calcAge(year) {
//   return 2020 - year;
// }

// // ES5

// console.log(
//   'This is ' +
//     firstName +
//     ' ' +
//     lastName +
//     '. He was born in ' +
//     yearOfBirth +
//     '. So today he is ' +
//     calcAge(yearOfBirth) +
//     ' years old.'
// );

// // ES6
// console.log(
//   `This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. So today he is ${calcAge(
//     yearOfBirth
//   )} years old.`
// );

// const n = `${firstName} ${lastName}`;
// console.log(n.startsWith('J')); // case sensitive
// console.log(n.endsWith('th')); // can be multiple characters
// console.log(n.includes(' ')); // can be multiple characters
// console.log(`${firstName} `.repeat(5));

// ##########################################################
// Lecture # 107 Arrow function
// **********************************************************

// const years = [1990, 1965, 1982, 1937];

// // ES5
// var ages5 = years.map(function (cur) {
//   return 2020 - cur;
// });

// console.log(ages5);

// // ES6
// const ages6 = years.map((el) => 2020 - el);
// console.log(ages6);

// // With more than 1 argument you must put them in ()
// const ages6b = years.map(
//   (el, index) => `Age element ${index + 1}: ${2020 - el}.`
// );
// console.log(ages6b);

// // With more than one line in return you need to include 'return' and curly braces
// const ages6c = years.map((el, index) => {
//   const now = new Date().getFullYear();
//   const age = now - el;
//   return `Age element ${index + 1}: ${age}.`;
// });

// console.log(ages6c);

// ##########################################################
// Lecture # 108 Arrow Functions and lexical 'this'
// **********************************************************

// // ES5
// var box5 = {
//   color: 'green',
//   position: 1,
//   clickMe: function () {
//     // bind this to object by setting variable equl to this and calling self instead
//     var self = this;
//     document.querySelector('.green').addEventListener('click', function () {
//       var str =
//         'This is box number ' + self.position + ' and it is ' + self.color;
//       alert(str);
//     });
//   },
// };

// // Comes back undefined because only methods' this points back to object. The eventhandler function is not a method of the object so 'this' does not point to the object.
// box5.clickMe();

// // ES6
// const box6 = {
//   color: 'blue',
//   position: 2,
//   clickMe: function () {
//     document.querySelector('.blue').addEventListener('click', () => {
//       let str =
//         'This is box number ' + this.position + ' and it is ' + this.color;
//       alert(str);
//     });
//   },
// };

// // Using arrow function allows this to be bound to parent
// box6.clickMe();

// // If the method is made into an arrow function then the this points to its parent which is the global context. Will come back undefined again
// const box66 = {
//   color: 'blue',
//   position: 2,
//   // No longer has its own 'this' but points to the 'this of box66 which is the global scope
//   clickMe: () => {
//     document.querySelector('.blue').addEventListener('click', () => {
//       let str =
//         'This is box number ' + this.position + ' and it is ' + this.color;
//       alert(str);
//     });
//   },
// };
// // box66.clickMe();

// // ES5
// // Function constructor
// function Person(name) {
//   this.name = name;
// }

// // Can also use call apply and bind to bind this
// Person.prototype.myFriends5 = function (friends) {
//   var arr = friends.map(
//     function (el) {
//       return this.name + ' is friends with ' + el;
//     }.bind(this)
//   );
//   console.log(arr);
// };

// var friends = ['Bob', 'Jane', 'Mark'];

// new Person('John').myFriends5(friends);

// // ES6
// // Function constructor
// function Person(name) {
//   this.name = name;
// }

// Person.prototype.myFriends6 = function (friends) {
//   var arr = friends.map((el) => `${this.name} is friends with ${el}.`);
//   console.log(arr);
// };

// var friends = ['Bob', 'Jane', 'Mark'];

// new Person('John').myFriends6(friends);
// // arrow functions do not have their own this and take parents

// ##########################################################
// Lecture #
// **********************************************************

// ##########################################################
// Lecture #
// **********************************************************

// ##########################################################
// Lecture #
// **********************************************************

// ##########################################################
