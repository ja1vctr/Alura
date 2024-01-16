import React from 'react'

class Button extends React.Component {
  render() {
    const backgroundColor = 'blue'
    const styles = { backgroundColor }
    return <button style={styles}>Botão</button>
  }
}

export default Button
