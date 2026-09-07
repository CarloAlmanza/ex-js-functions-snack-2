function eseguiEFerma(messaggio, tempoAvvio, tempoStop) {
    let contatore = 0;

    const intervalId = setInterval(() => {
        contatore++;
        console.log(`${messaggio} (${contatore})`);
    }, tempoAvvio);

    // Ferma il timer dopo tempoStop millisecondi
    setTimeout(() => {
        clearInterval(intervalId);
        console.log(`✅ Timer fermato! Il messaggio è stato stampato ${contatore} volte in ${tempoStop / 1000} secondi`);
    }, tempoStop);

    return intervalId;
}