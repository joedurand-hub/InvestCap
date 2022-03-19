import React from 'react'
import styles from './section.module.css'

const Section = ({children}) => {
  return (
    <section className={styles.wrapper}>
      {children}
    </section>
  )
}

export default Section