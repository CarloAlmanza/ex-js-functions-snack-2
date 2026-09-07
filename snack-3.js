function eseguiOperazione(a, b, operatore) {
    return operatore(a, b);
}


// Funzioni operatore (callback)
function somma(x, y) {
    return x + y;
}

function moltiplicazione(x, y) {
    return x * y;
}

function sottrazione(x, y) {
    return x - y;
}

function divisione(x, y) {
    return x / y;
}

// Utilizzo della funzione eseguiOperazione
console.log(eseguiOperazione(5, 3, somma));          // 8
console.log(eseguiOperazione(5, 3, moltiplicazione)); // 15
console.log(eseguiOperazione(10, 4, sottrazione));    // 6
console.log(eseguiOperazione(10, 2, divisione));      // 5