// eslint-disable-next-line no-undef
import React from 'react'
import styles from './Card.module.css'

const card = ({img,tittle, discription}) => {

  return (
    <div className={styles.card}>
        <img className={styles.cardImg} src={img} alt="" />
        <h2>{tittle}</h2>
        <p>{discription}</p>
    </div>
  )
}

export default card