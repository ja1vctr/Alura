const tagMain = document.querySelector('.main')

async function dados() {
  const busca = await fetch('http://localhost:3000/dadosTeste')
  const dadosTeste = await busca.json()

  dadosTeste.forEach((item) => {
    tagMain.innerHTML += `
    <div class="principal">
        <p>${item.descricao}</p>
    </div>
    `
  })
}
dados()
