const controle = document.querySelectorAll("[data-controle]");
const estatistica = document.querySelectorAll("[data-estatistica]");
const pecas = {
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
        const operacao = event.target.dataset.controle;
        const pecaClicada = event.target.dataset.peca;
        const parentTagPeca = event.target.parentNode.querySelector("[data-contador]");

        manipulaDados(operacao, parentTagPeca);
        atualizaEstatisticas(operacao, pecaClicada);
    })
});

function manipulaDados(operacao, parentTagPeca) {
    const valorAtributo = parentTagPeca;
    if (operacao === "+") {
        valorAtributo.value = parseInt(valorAtributo.value) + 1;
    }

    else if (operacao === "-")
        if (parseInt(valorAtributo.value) > 0) {
            valorAtributo.value = parseInt(valorAtributo.value) - 1;
        }
}

function atualizaEstatisticas(operacao, pecaClicada) {
    estatistica.forEach((element) => {
        if (operacao === "+") {
            element.textContent = parseInt(element.textContent) +
                pecas[pecaClicada][element.dataset.estatistica]
        }
        else if (operacao === "-") {
            element.textContent = parseInt(element.textContent) -
                pecas[pecaClicada][element.dataset.estatistica]
        }
    })
}