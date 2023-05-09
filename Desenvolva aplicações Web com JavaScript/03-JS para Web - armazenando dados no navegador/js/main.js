const form = document.getElementById("novoItem");
const lista = document.getElementById("lista");
const listaItens = JSON.parse(localStorage.getItem("itens")) || [];

listaItens.forEach((element) => {
  criaElemento(element.nome, element.quantidade);
});

form.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const nome = evento.target.elements["nome"];
  const quantidade = evento.target.elements["quantidade"];

  adicionaItem(nome.value, quantidade.value);

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
  }
}

function adicionaItem(nome, quantidade) {
  itemAtual = {
    nome: nome,
    quantidade: quantidade,

    // functions: {
    //   getNome() {
    //     return this.nome;
    //   },
    // },
  };

  criaElemento(nome, quantidade);

  listaItens.push(itemAtual);

  localStorage.setItem("itens", JSON.stringify(listaItens));
}
