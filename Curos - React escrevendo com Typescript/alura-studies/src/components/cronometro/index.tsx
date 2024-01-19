import style from './cronometro.module.scss'
import Relogio from './relogio'
import Button from '../button'

export default function Cronometro() {
  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha o card e inicie o cronometro</p>
      <div className={style.relogioWrapper}>
        <Relogio />
      </div>
      <Button descricao="Iniciar" />
    </div>
  )
}
