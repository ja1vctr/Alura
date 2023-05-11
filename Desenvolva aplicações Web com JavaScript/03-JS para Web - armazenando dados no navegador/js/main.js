const form = document.getElementById("novoItem");
const lista = document.getElementById("lista");
const listaItens = JSON.parse(localStorage.getItem("itens")) || [];
var existe;
// localStorage.clear();

listaItens.forEach((element) => {
  criaElemento(element);
});

form.addEventListener("submit", (evento) => {
  evento.preventDefault();
  let nome = evento.target.elements["nome"];
  let quantidade = evento.target.elements["quantidade"];

  const item = {
    nome: nome.value,
    quantidade: quantidade.value,
  };

  adicionaItem(item);

  nome = "";
  quantidade = "";
});

function criaElemento(item) {
  // if que verifica caso os valoraes sejam strings vazias, nesse caso ele não executa o procedimento de adicionar
  if (item.nome === "" || item.quantidade === "") {
  } else {
    item.id = listaItens.length;

    const novoItem = document.createElement("li");
    novoItem.classList.add("item");

    const quantidadeItem = document.createElement("strong");
    quantidadeItem.innerHTML = item.quantidade;

    novoItem.appendChild(quantidadeItem);
    novoItem.innerHTML += item.nome;
    // console.log(item.nome);
    novoItem.dataset.id = item.id;
    // console.log(novoItem);

    lista.appendChild(novoItem);
  }
}

function adicionaItem(item) {
  if (verificaExistente(item)) {
    atualizaElemento(item);
  } else {
    criaElemento(item);

    listaItens.push(item);
    // console.log(item);
    // console.log(listaItens);
    localStorage.setItem("itens", JSON.stringify(listaItens));
  }
}

function verificaExistente(item) {
  existe = listaItens.find((elemento) => elemento.nome === item.nome);
  if (existe) {
    existe = "";
    return true;
  } else {
    return false;
  }
}

function atualizaElemento(item) {
  item.id = existe.id;

  const elemento = document.querySelector('[data-id="' + item.id + '"]');
  console.log(elemento);
}
