// ##########################################################
// Lecture # 120 Async JS
// **********************************************************

// const second = () => {
//   setTimeout(() => {
//     console.log('async hey there');
//   }, 2000);
// };

// const first = () => {
//   console.log('first');
//   second();
//   console.log('last');
// };

// first();

// ##########################################################
// Lecture # 122  async js with callbacks
// **********************************************************

// function getRecipe() {
//   setTimeout(() => {
//     const recipeID = [523, 883, 432, 974];
//     console.log(recipeID);

//     setTimeout(
//       (id) => {
//         const recipe = {
//           title: 'Fresh tomato pasta',
//           publisher: 'Jonas',
//         };
//         console.log(`${id}: ${recipe.title}. Published by ${recipe.publisher}`);
//         setTimeout(
//           (publisher) => {
//             const recipe2 = { title: 'Italian pizza', publisher: 'Jonas' };
//             console.log(recipe2);
//           },
//           1500,
//           recipe.publisher
//         );
//       },
//       1500,
//       recipeID[2]
//     ); // 3rd parameter in setTimeout is a argument for the callback function. eg: id = recipeID[2]
//   }, 1500);
// }

// getRecipe();

// Putting callbacks within callbacks quickly gets messy
// ES6 provides promises to help with this

// ##########################################################
// Lecture #
// **********************************************************

// ##########################################################
// ##########################################################
// Lecture #
// **********************************************************

// ##########################################################
