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
//         console.log(`${id}: ${recipe.title}`);
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
// Lecture # 123  Promises, then and catch
// **********************************************************

// // A promise is an object that keeps track about whether a certain event has happened already or not. If it did happen the promise determines what happens next
// // Before the event the promise is pending. After the event the promise is settled or resolved. If the result is available the promise is fulfilled if not it is rejected.

// // Executor is a functin that is immediatley called when the promise is created. executor takes two arguments for if promise was succesful or not
// const getIDs = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve([523, 883, 432, 974]);
//   }, 1500);
// });

// const getRecipe = (recID) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(
//       (ID) => {
//         const recipe = {
//           title: 'Fresh tomato pasta',
//           publisher: 'Jonas',
//         };
//         resolve(`${ID}: ${recipe.title}`);
//       },
//       1500,
//       recID
//     );
//   });
// };
// // since setTimeout never fails there is no need for the reject here. the resolve will return the arr
// // Then and catch methods are attached to all promise objects
// // Then allows us to have an event handler for the case the promise is fulfilled

// const getRelated = (publisher) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(
//       (pub) => {
//         const recipe = { title: 'Italian pizza', publisher: 'Jonas' };
//         resolve(`${pub}: ${recipe.title}`);
//       },
//       1500,
//       publisher
//     );
//   });
// };

// getIDs
//   .then((IDs) => {
//     // IDs will be the result of a succesful promise aka the arr
//     console.log(IDs);
//     return getRecipe(IDs[2]);
//   })
//   .then((recipe) => {
//     console.log(recipe);
//     return getRelated('Jonas');
//   })
//   .then((recipe) => {
//     console.log(recipe);
//   })
//   // Catch allows us to have an event handler for the case the promise is rejected
//   .catch((error) => {
//     console.log('Error');
//   });

// ##########################################################
// Lecture # 124 Async Await
// **********************************************************

// const getIDs = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve([523, 883, 432, 974]);
//   }, 1500);
// });

// const getRecipe = (recID) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(
//       (ID) => {
//         const recipe = {
//           title: 'Fresh tomato pasta',
//           publisher: 'Jonas',
//         };
//         resolve(`${ID}: ${recipe.title}`);
//       },
//       1500,
//       recID
//     );
//   });
// };

// const getRelated = (publisher) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(
//       (pub) => {
//         const recipe = {
//           title: 'Italian pizza',
//           publisher: 'Jonas Schmedtmann',
//         };
//         resolve(`${pub}: ${recipe.title}`);
//       },
//       1500,
//       publisher
//     );
//   });
// };

// // Async/Await is a type of function that happens asyncronously. inside this function you cant more than one await expressions
// async function getRecipesAW() {
//   const IDs = await getIDs;
//   console.log(IDs);
//   const recipe = await getRecipe(IDs[2]);
//   console.log(recipe);
//   const related = await getRelated('Jonas Schmedtmann');
//   console.log(related);

//   return recipe;
// }
// // getRecipesAW(); // synchronously calls function to be ran in the background
// getRecipesAW().then((
//   result // can use the .then on async function to perform something only when it has finished
// ) => console.log(`${result} is the best ever`));

// ##########################################################
// Lecture # 125    AJAX and API
// **********************************************************

// AJAX: Asynchronous Javascript And XML
// is used to make and post to your database through the API

// API: Application Programming Interface
// A piece of software that is used by another piece of software.

// You can use personal APIs and 3rd-party APIs

// ##########################################################
// Lecture # 126  AJAX calls with Fetch and Promises
// **********************************************************

// // fetch('https://www.metaweather.com/api/location/2487956/'); This would create a "same source origin error" You can use https://cors-anywhere.herokuapp.com/ prefix to workaround
// function getWeather(woeid) {
//   fetch(
//     // Example of consuming promise. Fetch automatically returns a promise without us having to write it.
//     `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}/`
//   )
//     .then((result) => {
//       console.log(result);
//       return result.json();
//       // Will return a 'Readable JSON stream in the body which still needs to be parsed into javascript
//     })
//     .then((data) => {
//       //   console.log(data)
//       const today = data.consolidated_weather[0];
//       console.log(
//         `Temperatures in ${data.title} stay between ${today.min_temp} and ${today.max_temp}`
//       );
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// }

// getWeather(2487956);
// getWeather(44418420);

// ##########################################################
// Lecture # 127  AJAX calls with Fetch and Async/Await
// **********************************************************

// ##########################################################
