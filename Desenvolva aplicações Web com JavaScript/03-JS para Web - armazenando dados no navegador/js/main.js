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
  novoElemento.appendChild(botaoDeleta(item.id));

  lista.appendChild(novoElemento);

  if (listaItens.find((element) => element.nome === item.nome)) {
  } else {
    listaItens.push(item);
  }

  nome = "";
  quantidade = "";
}

function verificaExistencia(item) {
  console.log(item);
  const existe = listaItens.find((element) => item.nome === element.nome);

  if (existe) {
    item.id = existe.id;

    const elemento = document.querySelector('[data-id="' + existe.id + '"]');
    elemento.firstChild.innerHTML = item.quantidade;

    listaItens[existe.id] = item;
    localStorage.setItem("itens", JSON.stringify(listaItens));
  } else {
    item.id = listaItens.length;

    criarElemento(item);
    localStorage.setItem("itens", JSON.stringify(listaItens));
  }
}

function botaoDeleta(id) {
  const elementoBotaoApaga = document.createElement("button");
  elementoBotaoApaga.innerText = "X";
  elementoBotaoApaga.classList.add("botao");

  elementoBotaoApaga.addEventListener("click", function (event) {
    //outra maneira de pegar o evento (dúvida)
    //console.log(event.target);
    console.log(document.querySelector('[data-id="' + id + '"]'));
    deletaElemento(this.parentNode, id);
  });

  return elementoBotaoApaga;
}

function deletaElemento(tag, id) {
  tag.remove();
  listaItens.splice(
    listaItens.findIndex((elemento) => elemento.id === id),
    1
  );
  lista;
  alteraIds(listaItens);
  localStorage.setItem("itens", JSON.stringify(listaItens));
}

function alteraIds(array) {
  for (let i = 0; i < array.length; i++) {
    array[i].id = i;
  }
}
