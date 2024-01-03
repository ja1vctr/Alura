function filtrarPesquisa() {
  const videos = document.querySelectorAll('.videos__item')

  const textoPesquisado = barraDePesquisa.value.toLowerCase()

  if (textoPesquisado != '') {
    videos.forEach((video) => {
      const titulo = video.document.querySelector('.titulo-video').toLowerCase()

      video.style.display = valorFiltro
        ? titulo.includes(valorFiltro)
          ? 'block'
          : 'none'
        : 'block'
    })
  }
}
