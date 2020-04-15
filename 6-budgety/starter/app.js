// BUDGET CONTROLLER
var budgetController = (function () {
  // Some code
})();

// UI CONTROLLER
var UIController = (function () {
  var DOMstrings = {
    inputType: '.add__type',
    inputDescription: '.add__description',
    inputValue: '.add__value',
    inputBtn: '.add__btn',
  };

  return {
    // 1. Get input data
    getInput: function () {
      return {
        type: document.querySelector(DOMstrings.inputType).value, // Will be either inc or exp
        description: document.querySelector(DOMstrings.inputDescription).value,
        value: document.querySelector(DOMstrings.inputValue).value,
      };
    },
    // Expose private DOMstrings to public through a method
    getDomStrings: function () {
      return DOMstrings;
    },
  };
})();

// GLOBAL APP CONTROLLER
var controller = (function (budgetCtrl, UICtrl) {
  // Get private variable from UIController
  var DOM = UICtrl.getDomStrings();
  // Add item function
  var ctrlAddItem = function () {
    // 1. Get input Data
    var input = UICtrl.getInput();
    console.log(input);
    // 2. Add it to budget controller
    // 3. Display new item to UI
    // 4. Calculate new budget
    // 5. Display new budget
  };

  // Event Listener for add button
  document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

  // Event handler to handle if someone presses enter
  document.addEventListener('keypress', function (event) {
    if (event.keyCode === 13 || event.which === 13) {
      // Checks for either condition to account for browser capabilities
      ctrlAddItem();
    }
  });
})(budgetController, UIController);
