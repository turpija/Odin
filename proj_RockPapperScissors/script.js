console.log("...:: ROCK .. PAPPER .. SCISSORS ::...");

/*

pokrećem funkc game
    -> pokreće se f.playRound (uzima obje strane i zapisuje rezultat)
        -> pokreće f.getComputerChoice (random izbor 1,2,3)
        -> pokreće f.userSelection (prompt usera)
        - loop 5 rundi        
= tko je pobjednik, gotovo

*/

// nasumično izabire za kompjutera
// vraća string "rock" / "paper" / "scissors"
function getComputerChoice() {
    let num = Math.floor(Math.random() * 3) + 1;
    switch (num) {
        case 1:
            return "paper";
        case 2:
            return "rock";
        case 3:
            return "scissors";
    }

}

// uzima izbor korisnika iz prompta
// vraća string "rock" / "paper" / "scissors"
function userSelection() {

    let userChoice = "";

    // provjera dozvoljenih unosa
    function validInput(str) {
        if (str === "rock" || str === "r" ||
            str === "paper" || str === "p" ||
            str === "scissors" || str === "s") {
            // console.log("valid user input");
            return true;
        } else {
            // console.log("invalid user input");
            return false;
        }
    }

    // dok ne unese točan izbor .. inifinte loop
    while (!validInput(userChoice)) {
        userChoice = prompt('(R)ock", "(P)aper" or "(S)cissors"').toLowerCase();
    }

    switch (userChoice) {
        case "rock":
        case "r":
            return "rock";
        case "paper":
        case "p":
            return "paper";
        case "scissors":
        case "s":
            return "scissors";
        default:
            break;
    }
}

// poziva izbor compa i usera i vraća
// vraća pobjednika, string "user" / "comp" / "tie"
function playRound() {

    function evaluateWinner(itemComp, itemUser) {
        console.log(`evaluate ... (comp: ${itemComp}), (user: ${itemUser})`);
        if (itemComp == "rock") {
            if (itemUser == "paper") {
                // user won
                // console.log(`user won !`);
                return "user";
            } else if (itemUser == "scissors") {
                // comp won
                // console.log(`COMP won !`);
                return "comp";
            } else {
                // it's a tie
                // console.log(`it's a tie !`);
                return "tie";
            }
        } else if (itemComp == "paper") {
            if (itemUser == "rock") {
                // comp won
                // console.log(`COMP won !`);
                return "comp";
            } else if (itemUser == "scissors") {
                // user won
                // console.log(`user won !`);
                return "user";
            } else {
                // it's a tie
                // console.log(`it's a tie !`);
                return "tie";
            }
        } else if (itemComp == "scissors") {
            if (itemUser == "rock") {
                // user won
                // console.log(`user won !`);
                return "user";
            } else if (itemUser == "paper") {
                // comp won
                // console.log(`COMP won !`);
                return "comp";
            } else {
                // it's a tie
                // console.log(`it's a tie !`);
                return "tie";
            }
        }
    }

    return evaluateWinner(getComputerChoice(), userSelection());
}


// pokreće funkc playRound, i prati rezultat
// na kraju vraća rezultat i pobjednika
function game() {
    let rounds = 5;
    let scoreUser = 0;
    let scoreComp = 0;

    for (let i = 0; i < rounds; i++) {
        switch (playRound()) {
            case "user":
                scoreUser++;
                break;
            case "comp":
                scoreComp++;
                break;
            default:
                break;
        }

    }

    console.log(`scoreUser: ${scoreUser}, scoreCOMP: ${scoreComp}`);

    if (scoreUser > scoreComp) {
        return ">>> POBIJEDIJO SI RAČUNARA <<<"
    } else {
        return ">>> RAČUNAR TE POBIJEDIJO <<<"
    }
}

//console.log("getComputerChoice: "+ getComputerChoice());
//console.log("userSelection: "+userSelection());
console.log(game());