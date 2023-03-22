// const robotron = document.querySelector("#robotron")

// const controle = document.getElementsByClassName("controle-ajuste")
// //const valorControle = controle.values()

// const braco = document.querySelector("#bracos")
// const somar = document.querySelector(".somar")
// const subtrair = document.querySelector(".subtrair")


// function manipulaDados(valor) {
//     if (valor === "somar") {
//         braco.value = parseInt(bracos.value) + 1
//     }
//     else {
//         if (parseInt(bracos.value) > 0)
//             braco.value = parseInt(bracos.value) - 1
//     }
// }
// somar.addEventListener("click", () => {
//     manipulaDados(somar)
// })

// subtrair.addEventListener("click", () => {
//     manipulaDados(subtrair)
// })
//robotron.addEventListener("click", () => {
//    console.log("oi")
//})

const subtrair = document.querySelector("#subtrair")
const somar = document.querySelector("#somar")
const braco = document.querySelector("#braco")


function adicionarValor(parametro) {
    if (parametro === "somar") {
        console.log(parametro)
        braco.value = parseInt(braco.value) + 1;
    }
    else {
        braco.value = parseInt(braco.value) - 1;
    }
}

somar.addEventListener("click", () => {
    adicionarValor(somar)
    console.log(somar)
})

subtrair.addEventListener("click", () => { adicionarValor(subtrair) })

// algum erro na hr de acrecentar os valores