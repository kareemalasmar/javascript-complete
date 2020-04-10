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
// Lecture # 23 Coding Challenge 3
// ********************************************

/*
John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.

To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).

(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)

GOOD LUCK 😀
*/

// var bills = [124, 48, 268];
// var totals = [];

// function calculateTotal(bill) {
//   var tip, total;
//   if (bill < 50) {
//     tip = 0.2;
//   } else if (bill >= 50 && bill < 200) {
//     tip = 0.15;
//   } else {
//     tip = 0.1;
//   }
//   total = bill + bill * tip;

//   totals.push(total);
// }

// calculateTotal(124);
// calculateTotal(48);
// calculateTotal(268);

// console.log(bills, totals);

// ############################################
// Lecture # 25 Objects and Properties
// ********************************************

// var john = {
//   firstName: 'John',
//   lastName: 'Smith',
//   birthYear: 1990,
//   family: ['Jane', 'Mark', 'Bob', 'Emily'],
//   job: 'teacher',
//   isMarried: false,
// };

// console.log(john);
// console.log(john['family']);
// console.log(john.family[1]);

// var jane = new Object();
// (jane.firstName = 'Jane'), (jane.birthYear = 1969);
// jane['lastName'] = 'Smith';

// console.log(jane);

// ############################################
// Lecture # 26      Methods and 'this'
// ********************************************

// var john = {
//   firstName: 'John',
//   lastName: 'Smith',
//   birthYear: 1992,
//   family: ['Jane', 'Mark', 'Bob', 'Emily'],
//   job: 'teacher',
//   isMarried: false,
//   calcAge: function () {
//     this.age = 2020 - this.birthYear;
//   },
// };

// john.calcAge();
// console.log(john);

// ############################################
// Lecture # 27     Coding Challenge 4
// ********************************************

/*
Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.

Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

GOOD LUCK 😀
*/

// var mark = {
//   fullName: 'Mark Frost',
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     this.BMI = this.mass / this.height ** 2;
//     return this.BMI;
//   },
// };

// var john = {
//   fullName: 'John Smith',
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     this.BMI = this.mass / this.height ** 2;
//     return this.BMI;
//   },
// };

// mark.calcBMI();
// john.calcBMI();
// console.log(mark);
// console.log(john);

// if (mark.BMI > john.BMI) {
//   console.log(mark.fullName + ' has the higher BMI.');
// } else if (mark.BMI < john.BMI) {
//   console.log(john.fullName + ' has the higher BMI.');
// } else {
//   console.log('Mark and John have the same BMI');
// }

// ############################################
// Lecture # 29     Loops and iterations
// ********************************************

// for (var i = 0; i <= 10; i++) {
//   console.log(i);
// }

// var john = ['John', 'Smith', 1990, 'designer', false];

// for (var i = 0; i < john.length; i++) {
//   console.log(john[i]);
// }

// var i = 0;
// while (i < john.length) {
//   console.log(john[i]);
//   i++;
// }

// Continue and Break statements
// Continue breaks current iteration ansd continue to next one

// var john = ['John', 'Smith', 1990, 'designer', false];

// for (var i = 0; i < john.length; i++) {
//   if (typeof john[i] !== 'string') continue;
//   console.log(john[i]);
// }

// Break ends loop and doesn't go to next iteration

// for (var i = 0; i < john.length; i++) {
//   if (typeof john[i] !== 'string') break;
//   console.log(john[i]);
// }

// for (var i = john.length - 1; i >= 0; i--) {
//   console.log(john[i]);
// }

// ############################################
// Lecture # 30 Coding Challenge 5
// ********************************************

/*
Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!

This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts (bill + tip). HINT: Start with two empty arrays [] as properties and then fill them up in the loop.


EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. The bills were $77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, and 25% if the bill is more than $300 (different than John).

5. Implement the same functionality as before, this time using Mark's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips. HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0). After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average

GOOD LUCK 😀
*/

// var john = {
//   bills: [124, 48, 268, 180, 42],
//   tips: [],
//   totals: [],
//   calculateTips: function () {
//     for (var i = 0; i < this.bills.length; i++) {
//       var bill, percent, tip, total;
//       bill = this.bills[i];
//       if (bill < 50) {
//         percent = 0.2;
//       } else if (bill >= 50 && bill < 200) {
//         percent = 0.15;
//       } else {
//         percent = 0.1;
//       }

//       tip = bill * percent;

//       total = bill + tip;

//       this.tips.push(tip);
//       this.totals.push(total);
//     }
//   },
// };

// john.calculateTips();

// var mark = {
//   bills: [77, 375, 110, 45],
//   tips: [],
//   totals: [],
//   calculateTips: function () {
//     for (var i = 0; i < this.bills.length; i++) {
//       var bill, percent, tip, total;
//       bill = this.bills[i];
//       if (bill < 100) {
//         percent = 0.1;
//       } else if (bill >= 100 && bill < 300) {
//         percent = 0.15;
//       } else {
//         percent = 0.25;
//       }

//       tip = bill * percent;

//       total = bill + tip;

//       this.tips.push(tip);
//       this.totals.push(total);
//     }
//   },
// };

// mark.calculateTips();

// function calculateAverage(name) {
//   var sum = 0;
//   var average = 0;
//   for (var i = 0; i < name.tips.length; i++) {
//     sum += name.tips[i];
//   }

//   average = sum / name.tips.length;

//   name.average = average;
// }

// calculateAverage(john);
// calculateAverage(mark);

// console.log(john);
// console.log(mark);

// if (john.average > mark.average) {
//   console.log('John paid more on average.');
// } else if (john.average < mark.average) {
//   console.log('Mark paid more on average.');
// } else {
//   console.log('John and Mark paid the same on average');
// }
