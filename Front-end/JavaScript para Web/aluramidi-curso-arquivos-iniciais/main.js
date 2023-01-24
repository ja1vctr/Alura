function tocarSom(idTagAudio) {
    document.querySelector(idTagAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; // template String  

    tecla.onclick = function () { tocarSom(idAudio); }

    tecla.onkeydown = function (evento) {
        console.log(evento);
        if (evento.code === "Enter" || evento.code === "Space") {

            tecla.classList.add('ativa');
        }
    }
    tecla.onkeyup = function (evento) {
        if (evento.code === "Enter" || evento.code === "Space") {

            tecla.classList.remove('ativa');
        }
    }

}
