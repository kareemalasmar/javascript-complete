var budgetController = (function () {
  // Code for budget
  var x = 23;

  var add = function (a) {
    return x + a;
  };

  return {
    publicTest: function (b) {
      return add(b);
    },
  };
})();

var UIController = (function () {
  // code for UI
})();

var controller = (function (budgetCtrl, UICtrl) {
  // Code for the other two to interact
  var z = budgetCtrl.publicTest(5);

  return {
    anotherPublic: function () {
      console.log(z);
    },
  };
})(budgetController, UIController);
