// ********************************************
// Lecture # 7 & 8    Variable and Data Types
// ********************************************

// var firstName = 'John';

// console.log(firstName);

// var lastName = 'Smith';

// var age = 28;
// console.log(firstName + ' ' + lastName + ' is ' + age + ' years old.');

// var fullAge = true;
// console.log(fullAge);

// var job;

// console.log(job);

// ############################################
// Lecture # 9      Basic Operators
// ********************************************

// var year, yearJohn, yearMark, ageJohn, ageMark;
// now = 2020;
// ageJohn = 28;
// ageMark = 33;

// // Math Operators
// yearJohn = now - ageJohn;
// yearMark = now - ageMark;

// console.log(yearJohn);
// console.log(now + 2);
// console.log(now - 2);
// console.log(now * 2);
// console.log(now / 2);

// // Logical Operator

// var johnOlder = ageJohn > ageMark;
// console.log(johnOlder);

// // Type of Operator
// var friend = 'Sam';
// var address;

// console.log(typeof address);

// ############################################
// Lecture # 11 Operator Precedence and Associativity
// ********************************************

// var now = 2018;
// var yearJohn = 1989;
// var fullAge = 18;

// var isFullAge = now - yearJohn >= fullAge;

// console.log(isFullAge);

// var ageJohn = now - yearJohn;
// var ageMark = 35;

// var average = (ageJohn + ageMark) / 2;
// console.log(average);

// var x, y;
// x = y = (3 + 5) * 4 - 6; // 8 * 4 -6 // 32 - 6// 26
// console.log(x, y);

// // More operators
// x = x * 2
// X *= 2 // both of these show the same and works with other basic operators

// y++; // y + 1

// ############################################
// Lecture # 12 Coding challenge
// ********************************************

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). 

GOOD LUCK 😀
*/

// var massMark = 60; // kg
// var heightMark = 1.69; // meters

// var massJohn = 92;
// var heightJohn = 1.95;

// var BMIMark, BMIJohn;

// BMIMark = massMark / heightMark ** 2;
// BMIJohn = massJohn / heightJohn ** 2;

// var BMIMarkHigher = BMIMark > BMIJohn;

// console.log(BMIMark, BMIJohn);

// console.log("Is Mark's higher than John's? " + BMIMarkHigher);

// if (BMIMark > BMIJohn) {
//   console.log("Mark's BMI is higher than Mark's");
// } else if (BMIJohn > BMIMark) {
//   console.log("John's BMI is higher than Mark's");
// }

// ############################################
// Lecture # 14 If / Else Statements and Boolean Logic
// ********************************************

// var firstName = 'John';
// var civilStatus = 'single';

// if (civilStatus === 'married') {
//   console.log(firstName + ' is married!');
// } else {
//   console.log(firstName + ' is not married!');
// }

// var isMarried = true;
// if (isMarried) {
//   console.log(firstName + ' is married!');
// } else {
//   console.log(firstName + ' is not married!');
// }

// var firstName = 'John';
// var age = 29;

// if (age < 13) {
//   console.log(firstName + ' is a boy.');
// } else if (age >= 13 && age < 20) {
//   console.log(firstName + ' is a teenager.');
// } else if (age >= 20 && age <= 30) {
//   console.log(firstName + ' is a young man.');
// } else {
//   console.log(firstName + ' is a man.');
// }

// ############################################
// Lecture # 16     Ternary Operator and Switch statements
// ********************************************

// // Ternary
// var firstName = 'John';
// var age = 16;

// age >= 18
//   ? console.log(firstName + ' drinks beer.')
//   : console.log(firstName + ' drinks juice.');

// var drink = age >= 18 ? 'beer' : 'juice';
// console.log(drink);

// // Switch
// var job = 'instructor';

// switch (job) {
//   case 'teacher':
//   case 'instructor':
//     console.log(firstName + ' teaches kids how to code.');
//     break;
//   case 'driver':
//     console.log(firstName + ' drivers an Uber.');
//     break;
//   case 'designer':
//     console.log(firstName + ' designs websites.');
//     break;
//   default:
//     console.log(firstName + ' does something else.');
//     break;
// }

// ############################################
// Lecture # 17 Truthy and Falesy values
// ********************************************

// Falsey values: undefines, null, 0, '', NaN
// Truthy values: Not falsey values

// var height;
// height = 0;

// if (height || height === 0) {
//   console.log('The variable is defined');
// } else {
//   console.log('The variable is not defined');
// }

// = value assignment
// == does type coercion ("23" will equal 23)
// === no type coercion

// ############################################
// Lecture #
// ********************************************

// ############################################
