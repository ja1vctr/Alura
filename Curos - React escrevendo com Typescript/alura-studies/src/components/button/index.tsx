import React from 'react'
import style from './button.module.scss'

export default function Button(props: { descricao: string }) {
  return <button className={style.botao}>{props.descricao}</button>
}
