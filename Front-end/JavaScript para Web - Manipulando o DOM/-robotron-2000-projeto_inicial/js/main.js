const robotron = document.querySelector("#robotron")

const controleAjuste = document.querySelectorAll("controle-ajuste")
const controleContador = document.querySelectorAll("controle-contador")


const subtrair = document.querySelector("#subtrair")
const somar = document.querySelector("#somar")
const braco = document.querySelector("#braco")


function adicionarValor(parametro) {
    if (parametro === "somar") {
        console.log(parametro)
        braco.value = parseInt(braco.value) + 1;
    }
    else {
        if (parseInt(braco.value) > 0)
            braco.value = parseInt(braco.value) - 1;
    }
}

somar.addEventListener("click", () => { adicionarValor("somar") })

subtrair.addEventListener("click", () => { adicionarValor("subtrair") })