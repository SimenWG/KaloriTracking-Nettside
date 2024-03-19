
const foodCalories = {
    kylling: 165,
    kjøttdeig: 240,
    egg: 155,
    melk: 42,
    burn: 63,
    havregryn: 389,
    redbull250: 46,
    monster: 42,
    sjokolademelk: 83,
    ris: 130
};

let totalCalories = 0;

function addFood() {
    const foodItem = document.getElementById("foodItem").value;
    const amount = parseFloat(document.getElementById("amount").value);

    if (isNaN(amount) || amount <= 0) {
        alert("Ugyldig mengde. Vennligst skriv inn en gyldig verdi.");
        return;
    }

    const calories = foodCalories[foodItem] * (amount / 100); 
    totalCalories += calories;

    const listItem = document.createElement("li");
    listItem.textContent = `${amount} g/ml ${foodItem}: ${calories.toFixed(2)} kalorier`;
    listItem.setAttribute("data-calories", calories);
    listItem.setAttribute("data-amount", amount);
    listItem.setAttribute("data-foodItem", foodItem);

    const removeButton = document.createElement("button");
    removeButton.textContent = "Fjern";
    removeButton.onclick = function() {
        removeFood(listItem);
    };
    listItem.appendChild(removeButton);

    const doubleButton = document.createElement("button");
    doubleButton.textContent = "Doble";
    doubleButton.onclick = function() {
        doubleAmount(listItem);
    };
    listItem.appendChild(doubleButton);

    document.getElementById("list").appendChild(listItem);

    updateCaloriesDisplay();
}

function removeFood(item) {
    const amount = parseFloat(item.getAttribute("data-amount"));
    const calories = parseFloat(item.getAttribute("data-calories"));
    totalCalories -= calories;
    item.remove();
    updateCaloriesDisplay();
}

function doubleAmount(item) {
    const amount = parseFloat(item.getAttribute("data-amount"));
    const foodItem = item.getAttribute("data-foodItem");
    const calories = foodCalories[foodItem] * ((amount * 2) / 100); 
    totalCalories += calories;
    item.textContent = `${(amount * 2).toFixed(2)} g/ml ${foodItem}: ${calories.toFixed(2)} kalorier`;

    item.setAttribute("data-amount", amount * 2);

    updateCaloriesDisplay();
}

function updateCaloriesDisplay() {
    const caloriesDisplay = document.getElementById("calories");
    caloriesDisplay.textContent = `Totalt kalorier spist i dag: ${totalCalories.toFixed(2)}`;
}
