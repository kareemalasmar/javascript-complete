// BUDGET CONTROLLER
var budgetController = (function () {
  // Data Models for expenses and values
  var Expense = function (id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  var Income = function (id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  var data = {
    allItems: {
      exp: [],
      inc: [],
    },
    totals: {
      exp: 0,
      inc: 0,
    },
  };

  return {
    addItem: function (type, des, val) {
      var newItem, ID;

      // Create new ID
      if (data.allItems[type].length > 0) {
        ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
      } else {
        ID = 0;
      }

      // Create new item based on type
      if (type === 'exp') {
        newItem = new Expense(ID, des, val);
      } else if (type === 'inc') {
        newItem = new Income(ID, des, val);
      }

      // Push to corresponding array
      data.allItems[type].push(newItem);

      // Return newItem for acces in global controller
      return newItem;
    },
    testing: function () {
      console.log(data);
    },
  };
})();

// UI CONTROLLER
var UIController = (function () {
  var DOMstrings = {
    inputType: '.add__type',
    inputDescription: '.add__description',
    inputValue: '.add__value',
    inputBtn: '.add__btn',
    incomeContainer: '.income__list',
    expensesContainer: '.expenses__list',
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

    addListItem: function (obj, type) {
      var html, element;
      // Create html string with placeholder text
      if (type === 'inc') {
        element = DOMstrings.incomeContainer;
        html =
          '<div class="item clearfix" id="income-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value"> + %value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
      } else if (type === 'exp') {
        element = DOMstrings.expensesContainer;
        html =
          '<div class="item clearfix" id="expense-%id%"><div class="item__description">%description%</div><div class="right clearfix"> <div class="item__value">- %value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
      }

      // Replace placeholder text with data
      newHtml = html.replace('%id%', obj.id);
      newHtml = newHtml.replace('%description%', obj.description);
      newHtml = newHtml.replace('%value%', obj.value);

      // Map to page
      document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
    },

    clearFields: function () {
      var fields, fieldsArr;
      fields = document.querySelectorAll(
        DOMstrings.inputDescription + ', ' + DOMstrings.inputValue
      );

      fieldsArr = Array.prototype.slice.call(fields);

      fieldsArr.forEach(function (current, index, array) {
        current.value = '';
      });
      fieldsArr[0].focus();
    },
    // Expose private DOMstrings to public through a method
    getDomStrings: function () {
      return DOMstrings;
    },
  };
})();

// GLOBAL APP CONTROLLER
var controller = (function (budgetCtrl, UICtrl) {
  var setUpEventListeners = function () {
    // Get private variable from UIController
    var DOM = UICtrl.getDomStrings();

    // Event Listener for add button
    document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

    // Event handler to handle if someone presses enter
    document.addEventListener('keypress', function (event) {
      if (event.keyCode === 13 || event.which === 13) {
        // Checks for either condition to account for browser capabilities
        ctrlAddItem();
      }
    });
  };

  // Add item function
  var ctrlAddItem = function () {
    var input, newItem;

    // 1. Get input Data
    input = UICtrl.getInput();

    // Destructure
    var { type, description, value } = input;

    // 2. Add it to budget controller
    newItem = budgetCtrl.addItem(type, description, value);

    // 3. Display new item to UI

    UICtrl.addListItem(newItem, type);

    // 4. Clear fields
    UICtrl.clearFields();
    // 5. Calculate new budget
    // 6. Display new budget
  };

  return {
    init: function () {
      console.log('Application has started...');
      setUpEventListeners();
    },
  };
})(budgetController, UIController);

controller.init();
