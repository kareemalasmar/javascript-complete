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
// Lecture # 65     First Class Functions
// **********************************************************

// // Functions as arguments
// var years = [1990, 1965, 1973, 1989, 2006];

// function arrayCalc(arr, fn) {
//   var arrRes = [];
//   for (var i = 0; i < arr.length; i++) {
//     arrRes.push(fn(arr[i]));
//   }
//   return arrRes;
// }

// function calculateAge(el) {
//   return 2020 - el;
// }

// function isFullAge(el) {
//   return el >= 18;
// }

// function maxHeartRate(el) {
//   if (el >= 18 && el <= 81) {
//     return Math.round(206.9 - 0.67 * el);
//   } else {
//     return -1;
//   }
// }

// var ages = arrayCalc(years, calculateAge);
// var fullAges = arrayCalc(ages, isFullAge);
// var heartRates = arrayCalc(ages, maxHeartRate);
// console.log(ages);
// console.log(fullAges);
// console.log(heartRates);

// ##########################################################
// Lecture # 66 First Class Functions
// **********************************************************

// // Functions returning functions
// function interviewQuestion(job) {
//   if (job === 'designer') {
//     return function (name) {
//       console.log(name + ', can you please explain what UX design is?');
//     };
//   } else if (job === 'teacher') {
//     return function (name) {
//       console.log('What subject do you teach, ' + name + '?');
//     };
//   } else {
//     return function (name) {
//       console.log('Hello ' + name + ', what do you do?');
//     };
//   }
// }

// var teacherQuestion = interviewQuestion('teacher');

// var designerQuestion = interviewQuestion('designer');

// teacherQuestion('John');
// designerQuestion('John');

// interviewQuestion('teacher')('Mark');

// ##########################################################
// Lecture # 67   Immediatley Invoked Function Expression (IIFE)
// **********************************************************

// function game() {
//   var score = Math.random() * 10;
//   console.log(score >= 5);
// }

// game();

// // IIFE can only be called once
// (function () {
//   var score = Math.random() * 10;
//   console.log(score >= 5);
// })();

// // With argument
// (function (goodLuck) {
//   var score = Math.random() * 10;
//   console.log(score >= 5 - goodLuck);
// })(5);

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
