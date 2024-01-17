import React from 'react'
import Button from '../button'
import style from './form.module.scss'

class Form extends React.Component {
  render() {
    return (
      <form className={style.novaTarefa}>
        <div className={style.inputContainer}>
          <label htmlFor="tarefa">Adicione um novo estudo</label>
          <input
            type="text"
            name="arefa"
            id="tarefa"
            placeholder="o que deseja estudar"
            required
          />
        </div>
        <div className={style.inputContainer}>
          <label htmlFor="tempo">Tempo</label>
          <input
            type="time"
            name="tempo"
            step="1"
            id="tempo"
            min="00:00:00"
            max="01:30:00"
            required
          />
        </div>
        <Button />
      </form>
    )
  }
}

export default Form
