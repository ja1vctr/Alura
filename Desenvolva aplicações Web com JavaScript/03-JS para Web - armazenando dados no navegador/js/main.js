const form = document.getElementById("novoItem");
const lista = document.getElementById("lista");
const listaItens = JSON.parse(localStorage.getItem("itens")) || [];

// localStorage.clear();
// console.log(listaItens);

listaItens.forEach((element) => {
  criaElemento(element);
});

form.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const nome = evento.target.elements["nome"];
  const quantidade = evento.target.elements["quantidade"];

  const item = {
    nome: no,
    quantidade: quantidade,
  };

  adicionaItem(item);

  item.nome = "";
  item.quantidade = "";
});

function criaElemento(item) {
  if (item.nome === "" || item.quantidade === "") {
  } else {
    const novoItem = document.createElement("li");
    novoItem.classList.add("item");

    const quantidadeItem = document.createElement("strong");
    quantidadeItem.innerHTML = quantidade;

    novoItem.appendChild(quantidadeItem);
    novoItem.innerHTML += nome;
    novoItem.dataset.id = item.id;

    lista.appendChild(novoItem);
  }
}

function adicionaItem(item) {
  if (verificaExistente(item)) {
  } else {
    criaElemento(item);

    listaItens.push(item);

    localStorage.setItem("itens", JSON.stringify(listaItens));
  }
}

function verificaExistente(item) {
  const existe = listaItens.find((elemento) => elemento.nome === item.nome);
  console.log(existe);
  if (existe) {
    return true;
  } else {
    return false;
  }
}
