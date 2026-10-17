
const itemInput = document.getElementById("itemInput");
const addBtn = document.getElementById("addBtn");
const itemList = document.getElementById("itemList");
const scoreDisplay = document.getElementById("score");
const resetBtn = document.getElementById("resetBtn");

let score = 0;

function updateScore() {
    scoreDisplay.textContent = score;
}

function addItem() {
    const itemName = itemInput.value.trim();

    if (itemName === "") {
        alert("Please enter an item!");
        return;
    }

    const listItem = document.createElement("li");
    const itemText = document.createElement("span");
    const removeBtn = document.createElement("button");

    itemText.textContent = itemName;
    removeBtn.textContent = "Remove";
    removeBtn.className = "remove-btn";

    removeBtn.addEventListener("click", function () {
        listItem.remove();
        score = Math.max(0, score - 1);
        updateScore();
    });

    listItem.appendChild(itemText);
    listItem.appendChild(removeBtn);
    itemList.appendChild(listItem);

    score++;
    updateScore();

    itemInput.value = "";
    itemInput.focus();
}

function resetGame() {
    itemList.replaceChildren();
    score = 0;
    updateScore();
    itemInput.value = "";
    itemInput.focus();
}

addBtn.addEventListener("click", addItem);
resetBtn.addEventListener("click", resetGame);

itemInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addItem();
    }
});
