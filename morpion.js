let joueur = "X";

// Tableau pour savoir les cases remplies
const currentGame = ["","","","","","","","",""];

// Tableau des combinaisons gagnantes
const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

const info = document.querySelector(".info");
info.textContent = `Au tour de ${joueur}`;

// On appelle la foncntion handleClick en fonction de la case sur laquelle on a cliquée
const lesCase = document.querySelectorAll(".laCase");
lesCase.forEach(laCase => {
    laCase.addEventListener("click", handleClick);
});

// Bouléen pour bloquer le jeu (après une victoire par exemple)
let lock = false;

function handleClick(e) {
    const caseClicker = e.target;
    const caseChoisie = caseClicker.getAttribute("data-index");

    // Pour ne pas jouer 2 fois sur la même case
    if(currentGame[caseChoisie] != "" || lock === true) {
        return;
    }

    currentGame[caseChoisie] = joueur;
    caseClicker.textContent = joueur;

    verification();
}

function verification() {

    for (let i = 0; i < winningCombinations.length; i++) 
    {
        const combinationCheck = winningCombinations[i];

        let a = currentGame[combinationCheck[0]];
        let b = currentGame[combinationCheck[1]];
        let c = currentGame[combinationCheck[2]];

        // Verifie s'il y a eu une victoire (avec le tableau des combinaisons gagantes)
        if (a === "" || b === "" || c === "") { continue; }
        else if (a === b && b === c) {
            info.textContent = `Victoire du joueur ${joueur} ! Appuyer sur F5 pour rejouer.`;
            lock = true;
            return;
        }
    }

    // Verifie s'il y a eu un match nul
    if (!currentGame.includes("")) {
        lock = true;
        info.textContent = `Match nul, personne n'a gagné ! Appuyer sur F5 pour rejouer.`;
        return
    }

    auTourDe();
}

function auTourDe() {
    joueur = joueur === "X" ? "O" : "X";
    info.textContent = `Au tour de ${joueur}`;
}