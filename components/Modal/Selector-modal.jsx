import React, { useState } from 'react'
import Transaction from '../Wallet/Transaction/Transaction';
import styles from './selector-modal.module.css'
    
const SelectorModal = () => {
  const [action, setAction] = useState('send')

  const selectedStyle = {
      color: 'rgb(120, 86, 255)'
  }

  const unselectedStyle = {
      border: "1px solid #282b2f" 
  }

  const selectedModal = option => {
    switch(option) {
      case 'Enviar':
        return <Transaction/>
      case 'Recibir':
        return <h2>Próximamente... </h2>
      default:
        return <Transaction/>
    }
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.selector}>
      <div className={styles.option} style={action === 'Enviar' ? selectedStyle : unselectedStyle} onClick={() => setAction('Enviar')}>
        Enviar
      </div>
      <div className={styles.option} style={action === 'Recibir' ? selectedStyle : unselectedStyle} onClick={() => setAction('Recibir')}>
        Recibir
      </div>
      <div className={styles.wrapper_modal_main}>
        {selectedModal(action)}
      </div>
      </div>
    </div>
  )
}

export default SelectorModal