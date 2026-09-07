function stampaOgniSecondo(messaggio) {
    const intervalId = setInterval(() => {
        console.log(messaggio);
    }, 1000);

    return intervalId; // Restituisce l'ID per poter usare clearInterval()
}

// Utilizzo con controllo
const timerId = stampaOgniSecondo("Ciao Mondo!");

// Per fermare il timer dopo 5 secondi
setTimeout(() => {
    clearInterval(timerId);
    console.log("Timer fermato!");
}, 5000);