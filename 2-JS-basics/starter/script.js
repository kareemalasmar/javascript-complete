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
// Lecture # 18 Coding Challenge 2
// ********************************************

/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

GOOD LUCK 😀
*/

// var averageJohn, averageMike, averageMary;

// averageJohn = (60 + 120 + 103) / 3;
// averageMike = (89 + 120 + 103) / 3;
// averageMary = (89 + 120 + 103) / 3;

// console.log(
//   'John: ' +
//     averageJohn +
//     '. Mike: ' +
//     averageMike +
//     '. Mary: ' +
//     averageMary +
//     '.'
// );

// if (averageJohn > averageMike && averageJohn > averageMary) {
//   console.log('John wins on average');
// } else if (averageMike > averageJohn && averageMike > averageMary) {
//   console.log('Mike wins on average');
// } else if (averageMary > averageJohn && averageMary > averageMike) {
//   console.log('Mary wins on average');
// } else {
//   console.log('There is a draw');
// }

// ############################################
// Lecture # 20 Functions, Expressions and statements
// ********************************************

// function calculateAge(birthYear) {
//   return 2020 - birthYear;
// }

// console.log(calculateAge(1992));
// console.log(calculateAge(1996));

// function yearsUntilRetirement(birthYear, firstName) {
//   var age = calculateAge(birthYear);
//   var retirement = 65 - age;
//   if (retirement > 0) {
//     console.log(firstName + ' retires in ' + retirement + ' years.');
//   } else {
//     console.log(firstName + ' is already retired.');
//   }
// }

// yearsUntilRetirement(1990, 'John');
// yearsUntilRetirement(1994, 'Mike');
// yearsUntilRetirement(1948, 'Mary');

// // Function Expression
// var whatDoYouDo = function (job, firstName) {
//   return firstName + ' is a professional ' + job;
// };

// console.log(whatDoYouDo('teacher', 'John'));

// // Expressions always return a value
// // Anytime a value is expected we use an expression
// // Statements dont produce immediate values by themselves

// ############################################
// Lecture # 22      Arrays
// ********************************************

// var names = ['John', 'Mark', 'Jane'];
// var years = new Array(1990, 1969, 1948);

// console.log(names[0]);
// console.log(names);
// console.log(names.length);

// names[1] = 'Ben';
// console.log(names[1]);

// names[5] = 'Mary';
// console.log(names[4]);
// console.log(names);

// // Different data types
// var john = ['John', 'Smith', 1990, 'teacher', false];

// john.push('blue');
// console.log(john);

// john.unshift('Mr.');
// console.log(john);

// john.pop();
// console.log(john);

// console.log(john.lastIndexOf(1990));

// console.log(john.indexOf('designer'));
// // negative value shows that it doesn't exist in array

// john[3] = 'designer';

// var isDesigner =
//   john.indexOf('designer') === -1
//     ? 'John is not a designer'
//     : 'John is a designer';

// console.log(isDesigner);

// ############################################
// Lecture #
// ********************************************

// ############################################
