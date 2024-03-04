import React from 'react'
import Form from '../components/form'
import List from '../components/list'
import Cronometro from '../components/cronometro'
import style from './App.module.scss'
import { useState } from 'react'
import { ITarefa } from '../types/tarefas'

function App() {
  const [Tarefas, setTarefas] = useState<Array<ITarefa> | []>([])

  return (
    <div className={style.AppStyle}>
      <Form setTarefas={setTarefas} />
      <Cronometro />
      <List tarefas={Tarefas} />
    </div>
  )
}

export default App
