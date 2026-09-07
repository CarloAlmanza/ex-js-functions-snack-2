function creaContatoreAutomatico(intervallo) {
    let contatore = 0;

    return function () {
        setInterval(() => {
            contatore++;
            console.log(`Contatore: ${contatore}`);
        }, intervallo);
    };
}