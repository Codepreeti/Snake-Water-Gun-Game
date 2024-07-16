function startGame() {
    const userChoice = prompt("Enter S for Snake, W for Water, or G for Gun: ").toUpperCase();
    if (!["S", "W", "G"].includes(userChoice)) {
        alert("Invalid choice! Please enter S, W, or G.");
        return;
    }

    const choices = ["S", "W", "G"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    const result = getResult(userChoice, computerChoice);

    displayResult(userChoice, computerChoice, result);
}

function getResult(user, computer) {
    if (user === computer) {
        return "It's a tie!";
    } else if (
        (user === "S" && computer === "W") ||
        (user === "W" && computer === "G") ||
        (user === "G" && computer === "S")
    ) {
        return "You win!";
    } else {
        return "You lose!";
    }
}

function displayResult(userChoice, computerChoice, result) {
    const resultDiv = document.getElementById("gameResult");
    resultDiv.innerHTML = `
    <p> You chose: <strong>${userChoice}</strong></p>
    <p>Computer chose: <strong>${computerChoice}</strong></p>
    <p>Result: <strong>${result}</strong></p>
    `;
}