const controle = document.querySelectorAll("[data-controle]");

controle.forEach((element) => {
    element.addEventListener("click", (event) => {
        const valor = event.target.dataset.controle;
        const peca = event.target.parentNode;

        manipulaDados(valor, peca);

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