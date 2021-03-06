// BUDGET CONTROLLER
var budgetController = (function () {
  // Data Models for expenses and values
  var Expense = function (id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
    this.percentage = -1;
  };

  Expense.prototype.calcPercentage = function (totalIncome) {
    if (totalIncome > 0) {
      this.percentage = Math.round((this.value / totalIncome) * 100);
    } else {
      this.percentage = -1;
    }
  };

  Expense.prototype.getPercentage = function () {
    return this.percentage;
  };

  var Income = function (id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  var calculateTotal = function (type) {
    var sum = 0;
    data.allItems[type].forEach(function (curr) {
      sum += curr.value;
    });
    data.totals[type] = sum;
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
    budget: 0,
    percentage: -1,
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

    // Delete item from data structure
    deleteItem: function (type, id) {
      var ids, index;

      ids = data.allItems[type].map(function (current) {
        // Map can also take in 3 parameters (current, index, array)
        // Will always return a new array;
        return current.id; // Will return an array of each index's id
      });

      // Get the index of our id parameter
      index = ids.indexOf(id);

      // Check if exists and remove it
      if (index !== -1) {
        data.allItems[type].splice(index, 1);
      }
    },

    calculateBudget: function () {
      // calculate total income and expenses
      calculateTotal('exp');
      calculateTotal('inc');

      // calculate budget (income - expenses)
      data.budget = data.totals.inc - data.totals.exp;

      // calculate the percentage of income we have spent
      if (data.totals.inc > 0) {
        data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
      } else {
        data.percentage = -1;
      }
    },

    calculatePercentages: function () {
      data.allItems.exp.forEach(function (current) {
        current.calcPercentage(data.totals.inc);
      });
    },

    getPercentages: function () {
      var allPercentages = data.allItems.exp.map(function (current) {
        return current.getPercentage();
      });
      return allPercentages;
    },

    getBudget() {
      return {
        budget: data.budget,
        totalInc: data.totals.inc,
        totalExp: data.totals.exp,
        percentage: data.percentage,
      };
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
    budgetLabel: '.budget__value',
    incomeLabel: '.budget__income--value',
    expensesLabel: '.budget__expenses--value',
    percentage: '.budget__expenses--percentage',
    container: '.container',
    expensesPercLabel: '.item__percentage',
    dateLabel: '.budget__title--month',
  };

  var formatNumber = function (num, type) {
    var numSplit, int, dec, type;
    /*
        + or - before number
        exactly 2 decimal points
        comma separating the thousands

        2310.4567 -> + 2,310.46
        2000 -> + 2,000.00
        */

    num = Math.abs(num);
    num = num.toFixed(2);

    numSplit = num.split('.');

    int = numSplit[0];
    if (int.length > 3) {
      int = int.substr(0, int.length - 3) + ',' + int.substr(int.length - 3, 3); //input 23510, output 23,510
    }

    dec = numSplit[1];

    return (type === 'exp' ? '-' : '+') + ' ' + int + '.' + dec;
  };

  // For loop that will call out function on each index
  var nodeListForEach = function (list, callback) {
    for (var i = 0; i < list.length; i++) {
      // Pass in parameters
      callback(list[i], i);
    }
  };

  return {
    // 1. Get input data
    getInput: function () {
      return {
        type: document.querySelector(DOMstrings.inputType).value, // Will be either inc or exp
        description: document.querySelector(DOMstrings.inputDescription).value,
        value: parseFloat(document.querySelector(DOMstrings.inputValue).value),
      };
    },

    addListItem: function (obj, type) {
      var html, element;
      // Create html string with placeholder text
      if (type === 'inc') {
        element = DOMstrings.incomeContainer;
        html =
          '<div class="item clearfix" id="inc-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
      } else if (type === 'exp') {
        element = DOMstrings.expensesContainer;
        html =
          '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"> <div class="item__value">%value%</div><div class="item__percentage">--%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
      }

      // Replace placeholder text with data
      newHtml = html.replace('%id%', obj.id);
      newHtml = newHtml.replace('%description%', obj.description);
      newHtml = newHtml.replace('%value%', formatNumber(obj.value, type));

      // Map to page
      document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
    },

    deleteListItem: function (selectItemID) {
      var element = document.getElementById(selectItemID);
      element.parentNode.removeChild(element);
    },

    clearFields: function () {
      var fields, fieldsArr;

      // Store selected html elements in variable
      fields = document.querySelectorAll(
        DOMstrings.inputDescription + ', ' + DOMstrings.inputValue
      );

      // Make an array from fields
      fieldsArr = Array.prototype.slice.call(fields);

      // Set the value for each input to blank
      fieldsArr.forEach(function (current) {
        // forEach can take up to 3 paraneter (current, index, array)
        current.value = '';
      });

      // Focus cursor back to description input
      fieldsArr[0].focus();
    },

    displayBudget: function (obj) {
      obj.budget > 0 ? (type = 'inc') : (type = 'exp');

      (document.querySelector(
        DOMstrings.budgetLabel
      ).textContent = formatNumber(obj.budget, type)),
        (document.querySelector(
          DOMstrings.incomeLabel
        ).textContent = formatNumber(obj.totalInc, 'inc')),
        (document.querySelector(
          DOMstrings.expensesLabel
        ).textContent = formatNumber(obj.totalExp, 'exp'));

      if (obj.percentage > 0) {
        document.querySelector(DOMstrings.percentage).textContent =
          obj.percentage + '%';
      } else {
        document.querySelector(DOMstrings.percentage).textContent = '---';
      }
    },

    displayPercentages: function (percentages) {
      var fields = document.querySelectorAll(DOMstrings.expensesPercLabel);

      // // For loop that will call out function on each index
      // var nodeListForEach = function (list, callback) {
      //   for (var i = 0; i < list.length; i++) {
      //     // Pass in parameters
      //     callback(list[i], i);
      //   }
      // };

      // Will run our anonymous callback function on each item of fields
      nodeListForEach(fields, function (current, index) {
        // Change the html %
        if (percentages[index] > 0) {
          current.textContent = percentages[index] + '%';
        } else {
          current.textContent = '---';
        }
      });
    },

    displayDate: function () {
      var now, year, month, months;

      now = new Date();
      months = [
        'Janurary',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ];
      month = months[now.getMonth()];
      year = now.getFullYear();

      document.querySelector(DOMstrings.dateLabel).textContent =
        month + ' ' + year;
    },

    changedType: function () {
      var fields = document.querySelectorAll(
        DOMstrings.inputType +
          ',' +
          DOMstrings.inputDescription +
          ',' +
          DOMstrings.inputValue
      );

      nodeListForEach(fields, function (cur) {
        cur.classList.toggle('red-focus');
      });

      document.querySelector(DOMstrings.inputBtn).classList.toggle('red');
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

    // Add event listener to delete budget items, using delegation
    document
      .querySelector(DOM.container)
      .addEventListener('click', ctrlDeleteItem);

    document
      .querySelector(DOM.inputType)
      .addEventListener('change', UICtrl.changedType);
  };

  var updateBudget = function () {
    // 1. Calculate new budget
    budgetCtrl.calculateBudget();

    // 2. return the budget
    var budget = budgetCtrl.getBudget();

    // 3. Display new budget
    UICtrl.displayBudget(budget);
  };

  // Update expense item percentage
  var updatePercentages = function () {
    // 1. Calculate the percentages
    budgetCtrl.calculatePercentages();

    // 2. Read percentages from the budgetController
    var percentages = budgetCtrl.getPercentages();

    // 3. Update the UI with new percentages
    UICtrl.displayPercentages(percentages);
  };

  // Add item function
  var ctrlAddItem = function () {
    var input, newItem;

    // 1. Get input Data
    input = UICtrl.getInput();

    // Destructure
    var { type, description, value } = input;

    // check if input fields are filled
    if (description !== '' && !isNaN(value) && value > 0) {
      // 2. Add it to budget controller
      newItem = budgetCtrl.addItem(type, description, value);

      // 3. Display new item to UI

      UICtrl.addListItem(newItem, type);

      // 4. Clear fields
      UICtrl.clearFields();

      // 5. Calculate and update budget on UI
      updateBudget();

      // 6. Calculate and update percentages on UI
      updatePercentages();
    } else {
      alert('Please enter a description and value');
    }
  };

  var ctrlDeleteItem = function (event) {
    var itemID, splitID, type, ID;

    // Traversing DOM elements to target ID property of specific budget item
    itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;
    // Check if element clicked has ID property
    if (itemID) {
      //inc-1
      splitID = itemID.split('-');
      type = splitID[0];
      ID = parseInt(splitID[1]);
    }

    // 1. Delete item from data structure
    budgetCtrl.deleteItem(type, ID);

    // 2. Delete the item from the UI
    UICtrl.deleteListItem(itemID);

    // 3. Update and show the new bduget
    updateBudget();

    // 4. Calculate and update percentages on UI
    updatePercentages();
  };

  return {
    init: function () {
      console.log('Application has started...');
      UICtrl.displayDate();
      UICtrl.displayBudget({
        budget: 0,
        totalInc: 0,
        totalExp: 0,
        percentage: -1,
      });
      setUpEventListeners();
    },
  };
})(budgetController, UIController);

controller.init();
