let listaDeItens = [];

const form = document.getElementById("form-itens");
const itensInput = document.getElementById("receber-item");
const ulItens = document.getElementById("lista-de-itens");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  salvarItem();
  mostraritem();

  itensInput.value = "";
});

function salvarItem() {
  const comprasItem = itensInput.value;
  const checarDuplicado = listaDeItens.some(
    (element) => element.valor.toUpperCase() === comprasItem.toUpperCase()
  );

  if (checarDuplicado) {
    alert("Item já existe");
  } else {
    listaDeItens.push({
      valor: comprasItem,
      checar: false,
    });
  }
}

function mostraritem() {
  ulItens.innerHTML = "";
  listaDeItens.forEach((element, index) => {
    ulItens.innerHTML += `
    <li class="item-compra is-flex is-justify-content-space-between" data-value="${index}">
        <div>
          <input type="checkbox" class="is-clickable" />
          <input type="text" class="is-size-5" value="${element.valor}"></input>
        </div>
        <div>
          <i class="fa-solid fa-trash is-clickable deletar"></i>
        </div>
    </li>
    `;
  });

  const inputsCheck = document.querySelectorAll('input[type="checkbox"]');

  inputsCheck.forEach((element) => {
    element.addEventListener("click", (event) => {
      const valorDoElement =
        event.target.parentElement.parentElement.getAttribute("data-value");
      console.log(valorDoElement);
    });
  });
}
