console.log("ROCK PAPPER SCISSORS");

/*

pokrećem funkc game
    -> pokreće se f.playRound (uzima obje strane i zapisuje rezultat)
        -> pokreće f.getComputerChoice (random izbor 1,2,3)
        -> pokreće f.userSelection (prompt usera)
        - loop 5 rundi        
= tko je pobjednik, gotovo

*/

function getComputerChoice() {
    /*
        nasumično izabire broj od 1 do 3 i dodjeljuje rock/paper/scissors
    */
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

function userSelection() {
    /* 
        -- DODAJ --
        šta ako izabere nešto što ne postoji
        dodaj while loop, prompt dok ne izabere točno
    */

    let userChoice = prompt('(R)ock", "(P)aper" or "(S)cissors"').toLowerCase();
    
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

console.log(getComputerChoice());
console.log(userSelection());