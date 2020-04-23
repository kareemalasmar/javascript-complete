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
// Lecture # 109  Destructuring
// **********************************************************

// // ES5
// var john = ['James', 27];
// // var name = john[0];
// // var age = john[0];

// // ES6
// // left side destructures the data object to the right
// const [name, age] = ['John', 26];
// console.log(name);
// console.log(age);

// const obj = {
//   firstName: 'Mark',
//   lastName: 'Frost',
// };

// // these variable names have t0 match obj keys
// const { firstName, lastName } = obj;
// console.log(firstName);
// console.log(lastName);

// // If you want different variable names
// const { firstName: a, lastName: b } = obj;
// console.log(a);
// console.log(b);

// // You can destructure calues returned from a function
// function calcAgeRetirement(year) {
//   const age = new Date().getFullYear() - year;
//   return [age, 65 - age];
// }

// const [age2, retirement] = calcAgeRetirement(1990);
// console.log(age2);
// console.log(retirement);

// ##########################################################
// Lecture # 110 ES6 Arrays
// **********************************************************

// const boxes = document.querySelectorAll('.box');

// // ES5
// // querySelectorAll returns a node not an array
// var boxesArr5 = Array.prototype.slice.call(boxes);
// // boxesArr5.forEach(function (cur) {
// //   cur.style.backgroundColor = 'dodgerblue';
// // });

// // ES6
// const boxesArr6 = Array.from(boxes);
// boxesArr6.forEach((cur) => (cur.style.backgroundColor = 'dodgerblue'));
// // const boxesArr6 = Array.from(boxes).forEach(
// //   (cur) => (cur.style.backgroundColor = 'dodgerblue')
// // );

// // Can't break or continue in forEach or map. Have to use for loop
// // ES5
// for (var i = 0; i < boxesArr5.length; i++) {
//   if (boxesArr5[i].className === 'box blue') {
//     continue;
//     // break;
//   }
//   boxesArr5[i].textContent = 'I changed to blue';
// }

// // ES6 For Of method combines loops' ability to continue or break with ease of map and forEach
// for (const cur of boxesArr6) {
//   if (cur.className.includes('blue')) {
//     continue;
//   }
//   cur.textContent = 'I changed to blue';
// }

// // New array methods

// // ES5
// var ages = [12, 17, 8, 21, 14, 11];

// var full = ages.map(function (cur) {
//   return cur >= 18;
// });
// console.log(full);
// console.log(full.indexOf(true));
// console.log(ages[full.indexOf(true)]);

// // ES6
// // findIndex returns where the index meets requirement;
// console.log(ages.findIndex((cur) => cur >= 18));
// // If you want to retireve the element
// console.log(ages.find((cur) => cur >= 18));

// ##########################################################
// Lecture # 111 Spread operator
// **********************************************************

// function addFourAges(a, b, c, d) {
//   return a + b + c + d;
// }

// var sum1 = addFourAges(18, 30, 12, 21);
// console.log(sum1);

// // ES5
// var ages = [18, 30, 12, 21];
// var sum2 = addFourAges.apply(null, ages);
// console.log(sum2);

// // ES6
// // Spread operator expands its components
// const sum3 = addFourAges(...ages);
// console.log(sum3);

// const familySmith = ['John', 'Jane', 'Mark'];
// const familyMiller = ['Mary', 'Bob', 'Ann'];
// const bigFamily = [...familySmith, 'Daniel', ...familyMiller];
// console.log(bigFamily);

// const h = document.querySelector('h1');

// const boxes = document.querySelectorAll('.box');

// const all = [h, ...boxes];

// Array.from(all).forEach((cur) => (cur.style.color = 'purple'));

// ##########################################################
// Lecture # 112 Rest Parameters
// **********************************************************
// // ES5
// // function isFullAge5() {
// //   console.log(arguments);
// //   var argsArr = Array.prototype.slice.call(arguments);
// //   argsArr.forEach(function (cur) {
// //     console.log(2020 - cur >= 18);
// //   });
// // }

// // // isFullAge5(1990, 1999, 1965);
// // // isFullAge5(1990, 1999, 1965, 2015, 2007);

// // // ES6

// // function isFullAge6(...years) {
// //   //   console.log(years);
// //   years.forEach((cur) => console.log(2016 - cur >= 18));
// // }

// // isFullAge6(1990, 1999, 1965, 2015, 2007);

// // Example set #2
// // With one mandatory parameter
// function isFullAge5(limit) {
//   console.log(arguments);
//   var argsArr = Array.prototype.slice.call(arguments, 1);
//   console.log(argsArr);

//   argsArr.forEach(function (cur) {
//     console.log(2020 - cur >= limit);
//   });
// }

// isFullAge5(25, 1990, 1999, 1965);
// // isFullAge5(1990, 1999, 1965, 2015, 2007);

// // ES6

// function isFullAge6(limit, ...years) {
//   //   console.log(years);
//   years.forEach((cur) => console.log(2016 - cur >= limit));
// }

// isFullAge6(5, 1990, 1999, 1965, 2015, 2007);

// ##########################################################
// Lecture # 113       Default Parameters
// **********************************************************
// Default Parameters: used when you want one or more parameters of a function to be pre-set

// ES5
// function SmithPerson(firstName, yearOfBirth, lastName, nationality) {
//   // Ternary to define it if it doesnt exist
//   lastName === undefined ? (lastName = 'Smith') : (lastName = lastName);
//   nationality === undefined
//     ? (nationality = 'american')
//     : (nationality = nationality);

//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.yearOfBirth = yearOfBirth;
//   this.nationality = nationality;
// }

// // Calling constructor without all parameters leaves them undefined

// var john = new SmithPerson('John', 1990);
// console.log(john);

// var emily = new SmithPerson('Emily', 1992, 'Diaz', 'Spanish');
// console.log(emily);

// ES6

// // You can set default values for parameters within the arguments ()
// function SmithPerson(
//   firstName,
//   yearOfBirth,
//   lastName = 'Smith',
//   nationality = 'American'
// ) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.yearOfBirth = yearOfBirth;
//   this.nationality = nationality;
// }

// var john = new SmithPerson('John', 1990);
// console.log(john);

// var emily = new SmithPerson('Emily', 1992, 'Diaz', 'Spanish');
// console.log(emily);

// ##########################################################
// Lecture # 114 Maps
// **********************************************************
// Maps can have anything for keys and values, are itterable, and you can easily get size, also because its easy to add and remove data from map

// const question = new Map();
// question.set(
//   'question',
//   'What is the official name of the latest major Javascript version?'
// );
// question.set(1, 'ES5');
// question.set(2, 'ES6');
// question.set(3, 'ES2015');
// question.set(4, 'ES7');
// question.set('correct', 3);
// question.set(true, 'Correct answer :D');
// question.set(false, 'Wrong, please try again.');

// // console.log(question.get('question'));
// // console.log(question.size);

// // if (question.has(4)) {
// //   question.delete(4);
// //   console.log('Answer 4 is here');
// // }

// // question.clear();

// // Looping through map
// // question.forEach((value, key) =>
// //   console.log(`This is ${key}, and it's set to ${value}`)
// // );

// for (let [key, value] of question.entries()) {
//   //   console.log(`This is ${key}, and it's set to ${value}`);
//   if (typeof key === 'number') {
//     console.log(`Answer ${key}: ${value}`);
//   }
// }

// const ans = parseInt(prompt('write the corect answer'));

// // ans === question.get('answer') // will either be true or false

// console.log(question.get(ans === question.get('correct')));

// ##########################################################
// Lecture # 115 ES6 Classes
// **********************************************************

// // ES5
// var Person5 = function (name, yearOfBirth, job) {
//   this.name = name;
//   this.yearOfBirth = yearOfBirth;
//   this.job = job;
// };

// Person5.prototype.calculateAge = function () {
//   var age = new Date().getFullYear() - this.yearOfBirth;
//   console.log(age);
// };

// var john5 = new Person5('John', 1990, 'teacher');

// // ES6

// // Class definitions are not hoisted
// class Person6 {
//   // no commas between items
//   constructor(name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
//   }
//   calculateAge() {
//     var age = new Date().getFullYear() - this.yearOfBirth;
//     console.log(age);
//   }
// }

// const john6 = new Person5('John', 1990, 'developer');

// ##########################################################
// Lecture # 116  Classes with SubClasses
// **********************************************************
// // ES5
// var Person5 = function (name, yearOfBirth, job) {
//   this.name = name;
//   this.yearOfBirth = yearOfBirth;
//   this.job = job;
// };

// Person5.prototype.calculateAge = function () {
//   var age = new Date().getFullYear() - this.yearOfBirth;
//   console.log(age);
// };

// var Athlete5 = function (name, yearOfBirth, job, games, medals) {
//   Person5.call(this, name, yearOfBirth, job);
//   this.games = games;
//   this.medals = medals;
// };

// // Connects prototype chain
// Athlete5.prototype = Object.create(Person5.prototype);

// Athlete5.prototype.wonMedal = function () {
//   this.medals++;
//   console.log(this.medals);
// };

// var johnAthlete5 = new Athlete5('John', 1990, 'swimmer', 3, 10);

// // Athlte still has access to Person proto
// johnAthlete5.calculateAge();
// johnAthlete5.wonMedal();

// // ES6

// class Person6 {
//   constructor(name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
//   }
//   calculateAge() {
//     var age = new Date().getFullYear() - this.yearOfBirth;
//     console.log(age);
//   }
// }

// class Athlete6 extends Person6 {
//   constructor(name, yearOfBirth, job, games, medals) {
//     super(name, yearOfBirth, job); // takes it out of Person6 and sets 'this'
//     this.games = games;
//     this.medals = medals;
//   }
//   wonMedals() {
//     this.medals++;
//     console.log(this.medals);
//   }
// }

// const johnAthlete6 = new Athlete6('John', 1990, 'swimmer', 3, 10);

// johnAthlete6.calculateAge();
// johnAthlete6.wonMedals();

// ##########################################################
// Lecture #
// **********************************************************

// ##########################################################
