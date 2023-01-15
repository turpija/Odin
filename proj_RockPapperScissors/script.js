console.log("ROCK PAPPER SCISSORS");

/*

pokrećem funkc game
    -> pokreće se f.playRound (uzima obje strane i zapisuje rezultat)
        -> pokreće f.getComputerChoice (random izbor 1,2,3)
        -> pokreće f.userSelection (prompt usera)
        - loop 5 rundi        
= tko je pobjednik, gotovo

*/

function getComputerChoice(){
    let num = Math.floor(Math.random()*3)+1;
    switch (num) {
        case 1: return "paper"
        case 2: return "rock"
        case 3: return "scissors"
    }

}

console.log(getComputerChoice());