import style from './list.module.scss'

export default function List() {
  const listaTarefas = [
    {
      tarefa: 'React',
      tempo: '01:30:00',
    },
    {
      tarefa: 'Java',
      tempo: '00:50:00',
    },
    {
      tarefa: 'Redes de computadores',
      tempo: '3:10:00',
    },
    {
      tarefa: 'Vue.js',
      tempo: '02:45:00',
    },
  ]
  return (
    <aside className={style.listaTarefas}>
      <h2>Lista de estudos</h2>
      <ul>
        {listaTarefas.map((item, index) => (
          <li className={style.item}>
            <h3>{item.tarefa}</h3>
            <span>{item.tempo}</span>
          </li>
        ))}
      </ul>
    </aside>
  )
}
