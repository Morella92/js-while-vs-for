console.log('While vs for')

// Utilizziamo un ciclo per chiedere all’utente un numero tramite prompt.

let odds = []
console.log(odds)

let userNumber 

// Continuiamo a chiedere un numero all’utente finchè non avremo ottenuto 10 numeri dispari. 

while (odds.length < [10]) {

    userNumber = prompt('Inserisci un numero')

    // Tutti gli altri valori li scartiamo (numeri pari ed eventuali NaN).
    if ((!isNaN(userNumber)) && (userNumber % 2 != 0)) {

        // Se il numero è dispari, lo salviamo in una lista.

        odds.push(userNumber)

    }
}
// console.log(odds)

// Una volta ottenuti tutti i 10 numeri, stampiamoli in console uno alla volta

for (let i = 0; i < odds.length; i++) {

    console.log(odds[i])
}

