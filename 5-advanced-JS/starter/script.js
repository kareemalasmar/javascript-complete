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
// Lecture #
// **********************************************************

// ##########################################################
