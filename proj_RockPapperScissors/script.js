console.log("ROCK PAPPER SCISSORS");

/*

pokrećem funkc game
    -> pokreće se f.playRound (uzima obje strane i zapisuje rezultat)
        -> pokreće f.getComputerChoice (random izbor 1,2,3)
        -> pokreće f.userSelection (prompt usera)
        - loop 5 rundi        
= tko je pobjednik, gotovo

*/

// nasumično izabire broj od 1 do 3 i dodjeljuje rock/paper/scissors sa strane kompjutera
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

// izbor korisnika
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

console.log("getComputerChoice: "+ getComputerChoice());
console.log("userSelection: "+userSelection());