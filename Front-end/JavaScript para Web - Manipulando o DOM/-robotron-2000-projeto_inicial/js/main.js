const controle = document.querySelectorAll("[data-controle]");
const estatistica = document.querySelectorAll("[data-estatistica]");
const peca = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },
    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos": {
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -4
    },
    "pernas": {
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 43
    },
    "foguetes": {
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controle.forEach((element) => {
    element.addEventListener("click", (event) => {
        const valor = event.target.dataset.controle;
        const pecaClicada = event.target.dataset.peca;
        const peca = event.target.parentNode;
        console.log(pecaClicada);

        manipulaDados(valor, peca);
        atualizaEstatisticas();
    })
});

function manipulaDados(valor, controle) {
    const peca = controle.querySelector("[data-contador]");

    if (valor === "+") {
        peca.value = parseInt(peca.value) + 1;
        console.log(peca.valor)
    }

    else if (valor === "-")
        if (parseInt(peca.value) > 0) {
            peca.value = parseInt(peca.value) - 1;
            console.log(peca.valor)
        }

}

function atualizaEstatisticas(pecaClicada) {

}