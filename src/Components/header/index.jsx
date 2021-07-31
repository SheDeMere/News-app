import React from 'react';
import styles from './Header.module.scss';
import logo from '../../assets/kraken2.png';
import notification from '../../assets/notification.png';
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
          <div className={styles.notification}>
            <img src={notification}  className={styles.notificationImg} alt="notification"/>
          </div>
          <button>Войти</button>
        </div>
      </div>
    </div>
  )
}

export default Index