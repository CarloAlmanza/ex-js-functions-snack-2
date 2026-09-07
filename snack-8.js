function contoAllaRovescia(n) {
    let contatore = n;

    const intervalId = setInterval(() => {
        console.log(contatore);
        contatore--;

        if (contatore < 0) {
            clearInterval(intervalId);
            console.log("Tempo scaduto!");
        }
    }, 1000);
}