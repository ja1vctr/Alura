import { useState } from 'react'
import ItemLista from './itens'
import style from './list.module.scss'

export default function List() {
  const [texto, setTexto] = useState('Meu estado')
  const [listaTarefas, setListaTarefas] = useState([
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
  ])
  return (
    <aside className={style.listaTarefas}>
      <h2
        onClick={() => {
          setListaTarefas([
            ...listaTarefas,
            { tarefa: 'MANIFESTO DO PC', tempo: '05:00:00' },
          ])
        }}
      >
        Lista de estudos
      </h2>
      <ul>
        {listaTarefas.map((item, index) => (
          <ItemLista key={index} {...item} />
        ))}
      </ul>
    </aside>
  )
}
