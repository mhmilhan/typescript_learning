const calorieCounter = document.getElementById("calorie-counter");
const budgetNumberInput = document.getElementById("budget");
const entryDropdown = document.getElementById("entry-dropdown") as HTMLSelectElement;
const addEntryButton = document.getElementById("add-entry");
const clearButton = document.getElementById("clear");
const output = document.getElementById("output");
let isError = false;


function cleanInputString(str: string): string {
    console.log("original string:", str)
    const regex = /[+-\s]/g; // without g output only the first match
    return str.replace(regex, "");
}

function isInvalidInput(str: string) {
    const regex = /\d+e\d+/i; //i for insensitive \d for [0-9]
    return str.match(regex);
}

function addEntry() {
    const targetInputContainer = document.querySelector(`#${entryDropdown.value} .input-container`);
    const entryNumber = targetInputContainer.querySelectorAll('input[type="text"]').length+1;
    const HTMLString = `<label for="${entryDropdown.value}-${entryNumber}-name">Entry ${entryNumber} Name </label>
    <input type="text" placeholder="Name" id="${entryDropdown.value}-${entryNumber}-name">
    <label for="${entryDropdown.value}-${entryNumber}-calories">Entry ${entryNumber} Calories </label>
    <input type="number" min="0" placeholder="Calories" id="${entryDropdown.value}-${entryNumber}-calories">
    `;
    targetInputContainer?.insertAdjacentHTML('beforeend', HTMLString);
}



function getCaloriesFromInputs(list) {
    let calories = 0;
    for(const item of list) {
        const currVal = cleanInputString(item.value);
        const invalidInputMatch = isInvalidInput(currVal);
        if (invalidInputMatch) {
            alert(`Invalid Input: ${invalidInputMatch[0]}`);
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
    const breakfastNumberInputs = document.querySelectorAll("#breakfast input[type=number]");
    const lunchNumberInputs = document.querySelectorAll("#lunch input[type=number]");
    const dinnerNumberInputs = document.querySelectorAll("#dinner input[type=number]");
    const snacksNumberInputs = document.querySelectorAll("#snacks input[type=number]");
    const exerciseNumberInputs = document.querySelectorAll("#exercise input[type=number]");
    const breakfastCalories = getCaloriesFromInputs(breakfastNumberInputs);
    const lunchCalories = getCaloriesFromInputs(lunchNumberInputs);
    const dinnerCalories = getCaloriesFromInputs(dinnerNumberInputs);
    const snacksCalories = getCaloriesFromInputs(dinnerNumberInputs);
    const exerciseCalories = getCaloriesFromInputs(exerciseNumberInputs);
    const budgetCalories = getCaloriesFromInputs([budgetNumberInput]);

    if(isError) return;

    const consumedCalories = breakfastCalories + lunchCalories + dinnerCalories + snacksCalories;

    const remainingCalories = budgetCalories - consumedCalories + exerciseCalories;
    const surplusOrDeficit = remainingCalories < 0 ? "Surplus" : "Deficit";
    output?.innerHTML = `<span class="${surplusOrDeficit.toLowerCase()}">
    ${Math.abs(remainingCalories)} Calorie ${surplusOrDeficit}</span>
    <hr>
    <p>${budgetCalories }Calories Budgeted</p>
    <p>${consumedCalories }Calories Consumed</p>
    <p>${exerciseCalories }Calories Exercise</p>
    `;
    output?.classList.remove("hide");
}

function clearForm() {
    const inputContainers = Array.from(document.querySelectorAll(".input-container"));
    for(const container of inputContainers) {
        container.innerHTML = '';
    }
    budgetNumberInput.value = '';
    output?.innerText = '';
    output?.classList.add("hide");
}


addEntryButton.addEventListener("click", addEntry);
calorieCounter?.addEventListener("submit", calculateCalories);
clearButton?.addEventListener("click", clearForm);
//33 minutes 55 second done