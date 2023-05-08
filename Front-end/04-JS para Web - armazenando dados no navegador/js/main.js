const form = document.getElementById("novoItem")
const lista = document.getElementById("lista")

form.addEventListener("submit", (evento)=>{
    evento.preventDefault()
    const nome       = evento.target.elements["nome"].value
    const quantidade = evento.target.elements["quantidade"].value
    // console.log(evento)

    criaElemento(nome, quantidade)
})

function criaElemento(nome, quantidade){
    const novoItem = document.createElement('li')
    novoItem.classList.add("item")
    
    const quantidadeItem = document.createElement("strong")
    quantidadeItem.innerHTML = quantidade
    
    novoItem.appendChild(quantidadeItem)
    novoItem.innerHTML += nome
    console.log(novoItem)
    
    console.log(document.getElementById("lista").lastChild)
    lista.appendChild(novoItem)
    console.log(lista)
}