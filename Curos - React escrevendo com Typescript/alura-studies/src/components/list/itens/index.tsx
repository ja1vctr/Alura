import style from '../list.module.scss'
import { ITarefa } from './../../../types/tarefas'

export default function ItemLista({
  tarefa,
  tempo,
  selecionado,
  concluido,
  id,
}: ITarefa) {
  return (
    <li className={style.item}>
      <h3>{tarefa}</h3>
      <span>{tempo}</span>
    </li>
  )
}
