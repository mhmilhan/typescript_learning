var calorieCounter = document.getElementById("calorie-counter");
var budgetNumberInput = document.getElementById("budget");
var entryDropdown = document.getElementById("entry-dropdown");
var addEntryButton = document.getElementById("add-entry");
var clearButton = document.getElementById("clear");
var output = document.getElementById("output");
var isError = false;
function cleanInputString(str) {
    console.log("original string:", str);
    var regex = /[+-\s]/g; // without g output only the first match
    return str.replace(regex, "");
}
function isInvalidInput(str) {
    var regex = /\d+e\d+/i; //i for insensitive \d for [0-9]
    return str.match(regex);
}
function addEntry() {
    var targetInputContainer = document.querySelector("#".concat(entryDropdown.value, " .input-container"));
    var entryNumber = targetInputContainer.querySelectorAll('input[type="text"]').length + 1;
    var HTMLString = "<label for=\"".concat(entryDropdown.value, "-").concat(entryNumber, "-name\">Entry ").concat(entryNumber, " Name </label>\n    <input type=\"text\" placeholder=\"Name\" id=\"").concat(entryDropdown.value, "-").concat(entryNumber, "-name\">\n    <label for=\"").concat(entryDropdown.value, "-").concat(entryNumber, "-calories\">Entry ").concat(entryNumber, " Calories </label>\n    <input type=\"number\" min=\"0\" placeholder=\"Calories\" id=\"").concat(entryDropdown.value, "-").concat(entryNumber, "-calories\">\n    ");
    targetInputContainer === null || targetInputContainer === void 0 ? void 0 : targetInputContainer.insertAdjacentHTML('beforeend', HTMLString);
}
function getCaloriesFromInputs(list) {
    var calories = 0;
    for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
        var item = list_1[_i];
        var currVal = cleanInputString(item.value);
        var invalidInputMatch = isInvalidInput(currVal);
        if (invalidInputMatch) {
            alert("Invalid Input: ".concat(invalidInputMatch[0]));
            isError = true;
            return null;
        }
        calories += Number(currVal);
    }
    return calories;
}
function calculateCalories(e) {
    e.preventDefault();
    isError = false;
    var breakfastNumberInputs = document.querySelectorAll("#breakfast input[type=number]");
    var lunchNumberInputs = document.querySelectorAll("#lunch input[type=number]");
    var dinnerNumberInputs = document.querySelectorAll("#dinner input[type=number]");
    var snacksNumberInputs = document.querySelectorAll("#snacks input[type=number]");
    var exerciseNumberInputs = document.querySelectorAll("#exercise input[type=number]");
    var breakfastCalories = getCaloriesFromInputs(breakfastNumberInputs);
    var lunchCalories = getCaloriesFromInputs(lunchNumberInputs);
    var dinnerCalories = getCaloriesFromInputs(dinnerNumberInputs);
    var snacksCalories = getCaloriesFromInputs(dinnerNumberInputs);
    var exerciseCalories = getCaloriesFromInputs(exerciseNumberInputs);
    var budgetCalories = getCaloriesFromInputs([budgetNumberInput]);
    if (isError)
        return;
    var consumedCalories = breakfastCalories + lunchCalories + dinnerCalories + snacksCalories;
    var remainingCalories = budgetCalories - consumedCalories + exerciseCalories;
    var surplusOrDeficit = remainingCalories < 0 ? "Surplus" : "Deficit";
    output === null || output === void 0 ? void 0 : output.innerHTML = "<span class=\"".concat(surplusOrDeficit.toLowerCase(), "\">\n    ").concat(Math.abs(remainingCalories), " Calorie ").concat(surplusOrDeficit, "</span>\n    <hr>\n    <p>").concat(budgetCalories, "Calories Budgeted</p>\n    <p>").concat(consumedCalories, "Calories Consumed</p>\n    <p>").concat(exerciseCalories, "Calories Exercise</p>\n    ");
    output === null || output === void 0 ? void 0 : output.classList.remove("hide");
}
function clearForm() {
    var inputContainers = Array.from(document.querySelectorAll(".input-container"));
    for (var _i = 0, inputContainers_1 = inputContainers; _i < inputContainers_1.length; _i++) {
        var container = inputContainers_1[_i];
        container.innerHTML = '';
    }
    budgetNumberInput.value = '';
    output === null || output === void 0 ? void 0 : output.innerText = '';
    output === null || output === void 0 ? void 0 : output.classList.add("hide");
}
addEntryButton.addEventListener("click", addEntry);
calorieCounter === null || calorieCounter === void 0 ? void 0 : calorieCounter.addEventListener("submit", calculateCalories);
clearButton === null || clearButton === void 0 ? void 0 : clearButton.addEventListener("click", clearForm);
//33 minutes 55 second done
