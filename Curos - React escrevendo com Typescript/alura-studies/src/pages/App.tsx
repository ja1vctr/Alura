import React from 'react'
import Form from '../components/form'
import List from '../components/list'
import Cronometro from '../components/cronometro'
import style from './App.module.scss'

function App() {
  return (
    <div className={style.AppStyle}>
      <Form />
      <Cronometro />
      <List />
    </div>
  )
}

export default App
