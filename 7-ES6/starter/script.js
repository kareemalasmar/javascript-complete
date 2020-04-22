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
// Lecture #
// **********************************************************

// ##########################################################
// Lecture #
// **********************************************************

// ##########################################################
