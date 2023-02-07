console.log('While vs For')

// Utilizziamo un ciclo per chiedere all’utente un numero tramite prompt.

let odds = []
console.log(odds)

let userNumber 
console.log(userNumber)

// Continuiamo a chiedere un numero all’utente finchè non avremo ottenuto 10 numeri dispari. 

do{

    userNumber = parseInt (prompt('Inserisci un numero'))
}

while (userNumber < 10) {

    // Tutti gli altri valori li scartiamo (numeri pari ed eventuali NaN).

    if((isNaN(userNumber)) || (userNumber % 2 === 0)){

        // Se il numero è dispari, lo salviamo in una lista.

        odds.push(userNumber)

        userNumber++
    }

}

// Una volta ottenuti tutti i 10 numeri, stampiamoli in console uno alla volta

for(let i = 0; i < odds.length; i++) {

    console.log(odds[i])
}







