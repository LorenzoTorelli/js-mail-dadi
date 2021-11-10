// let listaEmail = ["cane.gatto@gmail.com", "esercito.jim@libero.it", "bue.o@yahoo.it"];

// let input = prompt("inserisci email");

// let index = 0;
// for (i = 0; i < listaEmail.length; i++) {
//     if (input == listaEmail[i]) {
//         index = 1
//     }    
// }

// if (index == 1) {
//     console.log("Benvenuto")
// }
// else {
//     console.log("indirizzo email errato")
// }


// Esercizio Dadi 


console.log("giocatore 1")
let g1 = Math.floor(Math.random() * (6 - 1)+1)
console.log(g1);


console.log("giocatore 2")
let g2 = Math.floor(Math.random() * (6 - 1)+1)
console.log(g2);

if (g1 > g2) {
    console.log("Giocatore 1 vince")
}
else {
    console.log("Giocatore 2 vince")
}