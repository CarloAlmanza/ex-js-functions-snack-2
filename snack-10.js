function creaThrottler(funzione, limite) {
    let ultimaEsecuzione = 0;
    let timeoutId = null;
    let ultimiArgs = null;

    return function (...args) {
        const ora = Date.now();

        // Se è passato abbastanza tempo, esegui subito
        if (ora - ultimaEsecuzione >= limite) {
            ultimaEsecuzione = ora;
            funzione.apply(this, args);
        } else {
            // Altrimenti, salva gli ultimi argomenti e programma l'esecuzione
            ultimiArgs = args;

            if (!timeoutId) {
                const tempoRestante = limite - (ora - ultimaEsecuzione);
                timeoutId = setTimeout(() => {
                    ultimaEsecuzione = Date.now();
                    funzione.apply(this, ultimiArgs);
                    timeoutId = null;
                    ultimiArgs = null;
                }, tempoRestante);
            }
        }
    };
}