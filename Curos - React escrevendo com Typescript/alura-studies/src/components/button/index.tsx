import style from './button.module.scss'

export default function Button({
  descricao,
  tipo,
}: {
  descricao: string
  tipo?: 'button' | 'submit' | 'reset ' | undefined
}) {
  return <button className={style.botao}>{descricao}</button>
}
