const form = document.getElementById("novoItem");
const lista = document.getElementById("lista");
const listaItens = [];

form.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const nome = evento.target.elements["nome"];
  const quantidade = evento.target.elements["quantidade"];

  criaElemento(nome.value, quantidade.value);

  nome.value = "";
  quantidade.value = "";
});

function criaElemento(nome, quantidade) {
  if (nome === "" || quantidade === "") {
  } else {
    const novoItem = document.createElement("li");
    novoItem.classList.add("item");

    const quantidadeItem = document.createElement("strong");
    quantidadeItem.innerHTML = quantidade;

    novoItem.appendChild(quantidadeItem);
    novoItem.innerHTML += nome;

    lista.appendChild(novoItem);

    itemAtual = {
      nome: nome,
      quantidade: quantidade,
    };

    listaItens.push(itemAtual);

    localStorage.setItem("item", JSON.stringify(listaItens));
  }
}
