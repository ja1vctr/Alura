const form = document.getElementById("novoItem");
const lista = document.getElementById("lista");
const listaItens = JSON.parse(localStorage.getItem("itens")) || [];

// localStorage.clear();

listaItens.forEach((element) => {
  criarElemento(element);
});

form.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const nome = evento.target.elements["nome"];
  const quantidade = evento.target.elements["quantidade"];

  const item = {
    nome: nome.value,
    quantidade: quantidade.value,
    id: listaItens.length,
  };

  verificaExistencia(item);
});

function criarElemento(item) {
  const novoElemento = document.createElement("li");
  const filhoNovoElemento = document.createElement("strong");

  novoElemento.appendChild(filhoNovoElemento);
  filhoNovoElemento.innerHTML = item.quantidade;

  novoElemento.classList.add("item");
  novoElemento.dataset.id = item.id;

  novoElemento.innerHTML += item.nome;

  lista.appendChild(novoElemento);

  if (listaItens.find((element) => element.nome === item.nome)) {
  } else {
    listaItens.push(item);
  }

  localStorage.setItem("itens", JSON.stringify(listaItens));

  nome = "";
  quantidade = "";
}

function verificaExistencia(item) {
  const existe = listaItens.find((element) => item.nome === element.nome);

  if (existe) {
    console.log(existe);
    const elemento = document.querySelector('[data-id="' + existe.id + '"]');
    elemento.firstChild.innerHTML = item.quantidade;

    // precisa arrumar:

    // console.log(listaItens[existe.id]);
    // console.log(existe);
    // listaItens[existe.id] = item;
    // console.log(listaItens[existe.id]);
  } else {
    criarElemento(item);
  }
}
