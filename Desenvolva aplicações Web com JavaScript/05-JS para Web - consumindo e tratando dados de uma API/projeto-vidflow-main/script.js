const containerVideos = document.querySelector('.videos__container')

async function buscarVideos() {
  try {
    const busca = await fetch('http://localhost:3000/videos')
    const videos = await busca.json()

    videos.forEach((element) => {
      if (element.categoria == '') {
        throw new Error('Vídeo sem categoria!')
      }
      containerVideos.innerHTML += `
      <li class="videos__item">
      <iframe src="${element.url}" title="${element.titulo}" frameborder="0" allowfullscreen></iframe>
    
      <div class="descricao-video">
      <img class="img-canal" src="${element.imagem}" alt="Logo do Canal">
      <h3 class="titulo-video">${element.titulo}</h3>
      <p class="titulo-canal">${element.descricao}</p>
      <p class="categoria" hidden>${element.categoria}</p>
      </div>
      </li>
      `
    })
  } catch (error) {
    containerVideos.innerHTML = `<p>Ocorreu um erro ao carregar os vídeos: ${error}</p>`
  }
}

buscarVideos()

const barraDePesquisa = document.querySelector('.pesquisar__input')

barraDePesquisa.oninput = filtrarPesquisa()

function filtrarPesquisa() {
  const videos = document.querySelectorAll('.videos__item')
  const textoPesquisa = barraDePesquisa.value.toLocaleLowerCase()

  videos.forEach((video) => {
    let titulo = video
      .querySelector('.titulo-video')
      .textContent.toLocaleLowerCase()

    video.style.display = textoPesquisa
      ? titulo.includes(textoPesquisa)
        ? 'block'
        : 'none'
      : 'block'
  })
}

const botaoCategoria = document.querySelectorAll('.superior__item')

botaoCategoria.forEach((categoria) => {
  let nomeCategoria = categoria.getAttribute('name')

  categoria.addEventListener('click', () =>
    filtrarPesquisaAvancada(nomeCategoria)
  )
})

async function filtrarPesquisaAvancada(value) {
  const videos = document.querySelectorAll('.videos__item')

  videos.forEach((video) => {
    let categoriaVideo = video.querySelector('.categoria').textContent
    video.style.display = categoriaVideo.includes(value) ? 'block' : 'none'
  })
}
