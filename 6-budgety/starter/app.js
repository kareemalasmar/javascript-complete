// BUDGET CONTROLLER
var budgetController = (function () {
  // Some code
})();

// UI CONTROLLER
var UIController = (function () {
  // some code
})();

// GLOBAL APP CONTROLLER
var controller = (function (budgetCtrl, UICtrl) {
  // Add item function
  var ctrlAddItem = function () {
    // 1. Get input Data
    // 2. Add it to budget controller
    // 3. Display new item to UI
    // 4. Calculate new budget
    // 5. Display new budget
    console.log('it worked');
  };

  // Event Listener for add button
  document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

  // Event handler to handle if someone presses enter
  document.addEventListener('keypress', function (event) {
    if (event.keyCode === 13 || event.which === 13) {
      // Checks for either condition to account for browser capabilities
      ctrlAddItem();
    }
  });
})(budgetController, UIController);
