
import React from 'react'
import styles from '../components.style/page.module.scss'

const Title = ({title, subtitle}) => {
  return (<div className={styles.titlecont}  >
  <h1 className={styles.title} >{title}</h1>
  {subtitle && (<p className={styles.subtitle}> {subtitle}</p>)}
  </div>
  )
}

export default Title