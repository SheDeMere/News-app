import React from 'react'
import styles from '../News.module.scss'
import { Link } from 'react-router-dom'

function ModalInfo ({ item }) {

  return (
    <div className={styles.modalInfoBack}>
      <div className={styles.modalBlock}>
        <Link to='/'>
          <span>✖</span>
        </Link>
        <h1>{item.title}</h1>
        <img src={item.imageURL} alt=""/>
        <p>" {item.desc} "</p>
      </div>
    </div>
  )
}

export default ModalInfo