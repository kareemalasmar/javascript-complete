///////////////////////////////////////
// Lecture: Hoisting

// Function declaration is hoisted and will work
// calculateAge(1992);

// Function expression is a variable so it is not hoisted and won't work
// retirement(1992);

// function calculateAge(year) {
//   console.log(2020 - year);
// }

// var retirement = function (year) {
//   console.log(65 - (2020 - year));
// };

// Variables are not hoisted, remain undefined if called before defining
// console.log(age);
// var age = 23;
// console.log(age);

// function foo() {
//   var age = 65;
//   console.log(age);
// }

// foo();
// console.log(age);

///////////////////////////////////////
// Lecture: Scoping

// First scoping example

// var a = 'Hello!';
// first();

// function first() {
//   var b = 'Hi!';
//   second();

//   function second() {
//     var c = 'Hey!';
//     console.log(a + b + c);
//   }
// }

// Example to show the differece between execution stack and scope chain

// var a = 'Hello!';
// first();

// function first() {
//   var b = 'Hi!';
//   second();

//   function second() {
//     var c = 'Hey!';
//     third();
//   }
// }

// function third() {
//   var d = 'John';
//   console.log(a + d);
// }

///////////////////////////////////////
// Lecture: The this keyword

// console.log(this);

// calculateAge(1992);

// function calculateAge(year) {
//   console.log(2020 - year);
//   console.log(this);
// }

// var john = {
//   name: 'John',
//   birthYear: 1990,
//   calcAge: function () {
//     console.log(this);
//     console.log(2020 - this.birthYear);

//     function innerFunction() {
//       // Points to window object and not john object becuase it is an expression not a declaration
//       console.log(this);
//     }
//     innerFunction();
//   },
// };

// john.calcAge();

// This variable is assigned a value only after it is called

// var mike = {
//   name: 'Mike',
//   birthYear: 1986,
// };

// mike.calcAge = john.calcAge;
// mike.calcAge();
