function crearCaja(texto) {
    const d = document.createElement("div");
    d.style.padding = "10px";
    d.style.margin = "5px";
    d.style.background = "lightblue";
    d.style.width = "150px";
    d.style.borderRadius = "8px";
    d.style.fontSize = "20px";
    d.textContent = texto;
    salida.appendChild(d);
}

function esperar(ms) {
    return new Promise(r => setTimeout(r, ms));
}

window.onload = async () => {
    crearCaja("A");
    crearCaja("B");

    esperar(5000).then(() => crearCaja("C"));

    const r = Math.floor(Math.random() * 3000) + 2000;
    esperar(r).then(() => {
        crearCaja("D");
        esperar(2000).then(() => {
            crearCaja("E");
            esperar(2000).then(() => {
                crearCaja("G");
                esperar(3000).then(() => crearCaja("H"));
            });
        });
    });

    esperar(7000).then(() => crearCaja("F"));
};