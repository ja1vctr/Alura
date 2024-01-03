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

barraDePesquisa.addEventListener('input', filtrarPesquisa)

function filtrarPesquisa() {
  const videos = document.querySelectorAll('.videos__item')

  const textoPesquisado = barraDePesquisa.value.toLowerCase()

  if (textoPesquisado != '') {
    videos.forEach((video) => {
      let titulo = video.document.querySelector('.titulo-video').toLowerCase()

      if (!titulo.includes(textoPesquisado)) {
        video.style.display = 'none'
      } else {
        video.style.display = 'block'
      }
    })
  } else {
    video.style.display = 'block'
  }
}
