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
// Lecture # 68         Closures
// **********************************************************

// Keeps scope chain variables in memory even after function finished running

// function retirement(retirementAge) {
//   var a = ' years until retirement';
//   return function (yearOfBirth) {
//     var age = 2020 - yearOfBirth;
//     console.log(retirementAge - age + a);
//   };
// }

// var retirementUS = retirement(66);
// // retirement(66)(1990);

// var retirementGermany = retirement(65);
// var retirementIceland = retirement(67);

// retirementUS(1990);
// retirementGermany(1990);
// retirementIceland(1990);

// function interviewQuestion(job) {
//   return function (name) {
//     if (job === 'designer') {
//       console.log(name + ', can you please explain what UX design is?');
//     } else if (job === 'teacher') {
//       console.log('What subject do you teach, ' + name + '?');
//     } else {
//       console.log('Hello ' + name + ', what do you do?');
//     }
//   };
// }

// var teacherQuestion = interviewQuestion('teacher');

// var designerQuestion = interviewQuestion('designer');

// teacherQuestion('John');
// designerQuestion('John');

// interviewQuestion('teacher')('Mark');

// ##########################################################
// Lecture # 69 Bind this
// **********************************************************

// var john = {
//   name: 'John',
//   age: 30,
//   job: 'teacher',
//   presentation: function (style, timeOfDay) {
//     if (style === 'formal') {
//       console.log(
//         'Good ' +
//           timeOfDay +
//           ", Ladies and Gentlemen! I'm " +
//           this.name +
//           ", I'm a " +
//           this.job +
//           ' and I am ' +
//           this.age +
//           ' years old.'
//       );
//     }
//     if (style === 'friendly') {
//       console.log(
//         "Hey! What's up? I'm " +
//           this.name +
//           '. I am a ' +
//           this.job +
//           ' and I am ' +
//           this.age +
//           ' years old. Have a nice ' +
//           timeOfDay +
//           '!'
//       );
//     }
//   },
// };

// var emily = {
//   name: 'Emily',
//   age: 35,
//   job: 'designer',
// };

// john.presentation('friendly', 'night');

// // Method Borrowing with Call Method
// // First argument sets the this variable for the method
// john.presentation.call(emily, 'formal', 'morning');

// // This wont work because method doesn't expect array as argument.
// // john.presentation.apply(emily, ['friendly', 'evening'])

// var johnFriendly = john.presentation.bind(john, 'friendly');

// johnFriendly('mid morning');
// johnFriendly('afternoon');

// var emilyFormal = john.presentation.bind(emily, 'formal');

// emilyFormal('night');

// console.log('-------------------------------------------------');

// // // Functions as arguments
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

// function maxHeartRate(el) {
//   if (el >= 18 && el <= 81) {
//     return Math.round(206.9 - 0.67 * el);
//   } else {
//     return -1;
//   }
// }

// function isFullAge(limit, el) {
//   return el >= limit;
// }

// var ages = arrayCalc(years, calculateAge);

// var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));

// console.log(ages);
// console.log(fullJapan);

// ##########################################################
// Lecture # Coding Challenge #7
// **********************************************************

/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/

var Question = function (question, answers, correct) {
  this.question = question;
  this.answers = answers;
  this.correct = correct;
};

Question.prototype.displayQuestion = function () {
  console.log('Question: ' + this.question);
  console.log('----------------------------------');
  for (var i = 0; i < this.answers.length; i++) {
    console.log(i + ') ' + this.answers[i]);
    console.log('----------------------------------');
  }
};

Question.prototype.checkAnswer = function (ans) {
  if (ans === this.correct) {
    alert('You win!');
  } else {
    alert('Wrong!');
  }
};

var q1, q2, q3;

q1 = new Question(
  'What is Bojack?',
  ['sad horse', 'angsty zebra', 'smoking camel'],
  0
);
q2 = new Question(
  'What is Cabracadabra?',
  ['pasta brand', 'magician school', 'ride service app'],
  2
);
q3 = new Question(
  'What are you doing here?',
  ['ugh', 'Errriiiiccaaaaa', 'Sarah Lynn?'],
  1
);

var questions = [];

questions.push(q1, q2, q3);

var n = Math.floor(Math.random() * questions.length);

questions[n].displayQuestion();

var answer = parseInt(
  prompt('Please enter the number besides the correct answer.')
);

questions[n].checkAnswer(answer);

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
