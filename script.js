let listaEmail = ["cane.gatto@gmail.com", "esercito.jim@libero.it", "bue.o@yahoo.it"]

let input = prompt("inserisci email");

let index = 0;
for (i = 0; i < listaEmail.length; i++) {
    if (input == listaEmail[i]) {
        index = 1
    }    
}

if (index == 1) {
    console.log("Benvenuto")
}
else {
    console.log("indirizzo email errato")
}