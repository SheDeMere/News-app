import React from 'react'
import styles from './Header.module.scss'
import logo from '../../assets/kraken2.png'
function Index () {
  return (
    <div>
      <div className={styles.header}>
        <div className={styles.nav}>
          <ul>
            <li>Главная</li>
            <li>Новости</li>
          </ul>
        </div>
        <div className={styles.logo}>
          <img src={logo} alt="logo"/>
        </div>
        <div className={styles.login}>
          <button>Войти</button>
        </div>
      </div>
    </div>
  )
}

export default Index