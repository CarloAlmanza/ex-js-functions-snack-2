function creaTimer(tempo) {
    return function () {
        setTimeout(() => {
            console.log("Tempo scaduto!");
        }, tempo);
    };
}