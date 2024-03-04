import ItemLista from './itens'
import style from './list.module.scss'
import { ITarefa } from '../../types/tarefas'

export default function List({ tarefas }: { tarefas: Array<ITarefa> }) {
  return (
    <aside className={style.listaTarefas}>
      <h2>Lista de estudos</h2>
      <ul>
        {tarefas.map((item, index) => (
          <ItemLista key={index} {...item} />
        ))}
      </ul>
    </aside>
  )
}
