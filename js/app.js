console.log('While vs For')
// Utilizziamo un ciclo per chiedere all’utente un numero tramite prompt.

let odd = []
console.log(odd)

let userNumber 
console.log(userNumber)

// Se il numero è dispari, lo salviamo in una lista.

if(userNumber % 2 !== 0){
    odd.push(userNumber)
}

// Continuiamo a chiedere un numero all’utente finchè non avremo ottenuto 10 numeri dispari. 

do{
    userNumber = parseInt (prompt('Inserisci un numero'))

    // Tutti gli altri valori li scartiamo (numeri pari ed eventuali NaN).
} while ((isNaN(userNumber)) || (userNumber % 2 === 0)) {

    

}


// Una volta ottenuti tutti i 10 numeri, stampiamoli in console uno alla volta







