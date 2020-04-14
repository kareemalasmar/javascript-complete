// ##########################################################
// Lecture # 60 Objects, Inheritance and Prototype Chain Theory
// **********************************************************

// Primitives: numbers, strings, booleans, undefined, null
// Everything else is an object: arrays, functions, objects, dates, wrappers

// Object-oriented Programming: heavy use of objects properties and methods

// Constructors: blueprint to create objects instances

// Inheritance: One object can inherit properties and methods from another object
// Prototype: every object has a prototype property which allows inheritance, put desired inheritable items here

// Prototype Chain: when a preoperty is called it looks in current object and goes up chain towards the "object" object to find it.

// The Constructor's prototype property is not the prototype for that constructor itself, it is the prototype property for all other instances created from it.

// ##########################################################
// Lecture # 61    Function Constructors
// **********************************************************

// // var john = {
// //   name: 'John',
// //   yearOfBirth: 1990,
// //   job: 'teacher',
// // };

// var Person = function (name, yearOfBirth, job) {
//   this.name = name; // this.name (naming values of Person to set) = name(the value assigned when called)
//   this.yearOfBirth = yearOfBirth;
//   this.job = job;
//   //   this.calculateAge = function () {
//   //     console.log(2020 - this.yearOfBirth);
//   //   };
// };

// Person.prototype.calculateAge = function () {
//   console.log(2020 - this.yearOfBirth);
// };

// Person.prototype.lastName = 'Smith';

// var john = new Person('john', 1990, 'teacher');
// var jane = new Person('Jane', 1969, 'designer');
// var mark = new Person('Mark', 1948, 'retired');

// john.calculateAge();
// jane.calculateAge();
// mark.calculateAge();

// console.log(john.lastName);
// console.log(jane.lastName);
// console.log(mark.lastName);

// ##########################################################
// Lecture # 63         Object.create method
// **********************************************************

// var personProto = {
//   // variable isnt capitalized because it is not a function constructor
//   calculateAge: function () {
//     console.log(2020 - this.yearOfBirth);
//   },
// };

// var john = Object.create(personProto);

// john.name = 'John';
// john.yearOfBirth = 1990;
// john.job = 'teacher';

// console.log(john);

// var jane = Object.create(personProto, {
//   name: { value: 'Jane' },
//   yearOfBirth: { value: 1969 },
//   job: { value: 'designer' },
// });

// console.log(jane);

// ##########################################################
// Lecture # 64         Primitives and Objects
// **********************************************************

// // Primitives
// var a = 23;
// var b = a;
// a = 46;
// console.log(a);
// console.log(b);

// // Objects
// var obj1 = {
//   name: 'John',
//   age: 30,
// };

// var obj2 = obj1;

// obj1.age = 34;
// console.log(obj1.age);
// console.log(obj2.age);

// Functions
// var age = 27;
// var obj = {
//   name: 'Jonas',
//   city: 'Libson',
// };

// function change(a, b) {
//   a = 30;
//   b.city = 'San Francisco';
//   console.log(a);
// }

// change(age, obj);

// console.log(age);
// console.log(obj.city);

// ##########################################################
// Lecture #
// **********************************************************

// ##########################################################
// Lecture #
// **********************************************************

// ##########################################################
// Extra Work
// **********************************************************

// function simplest(string) {
//   var characters = string.split('');
//   for (var i = 0; i < characters.length; i++) {
//     if (characters.indexOf(characters[i]) !== i) {
//       console.log(characters[i]);
//       break;
//     } else if (i === characters.length - 1) {
//       console.log('none');
//     }
//   }
// }

// simplest('abcd');

// 1

// var myArray = ['a', 'b', 'c', 'd'];

// // ES5
// // myArray.push('end');
// // myArray.unshift('start');
// // console.log(myArray);

// // ES6
// // myArray = ['start', ...myArray];
// // console.log(myArray);
// // myArray = [...myArray, 'end'];
// // console.log(myArray);
// myArray = ['start', ...myArray, 'end'];
// console.log(myArray);

// Private variab;e in js

// function secretVar() {
//   var private = 'top-secret-code';
//   return function () {
//     return private;
//   };
// }

// var getPrivateVar = secretVar();

// console.log(getPrivateVar());

// var x = true;
// var y = 4;
// var z = 'string';

// console.log(typeof x);
// console.log(typeof y);
// console.log(typeof z);
// console.log(z);

// ##########################################################
