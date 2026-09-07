function sequenzaOperazioni(operazioni, intervallo) {
    let indice = 0;

    const intervalId = setInterval(() => {
        if (indice < operazioni.length) {
            operazioni[indice]();
            indice++;
        } else {
            clearInterval(intervalId);
            console.log("✅ Sequenza completata!");
        }
    }, intervallo);

    return intervalId;
}