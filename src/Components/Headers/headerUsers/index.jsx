import React, { useState } from 'react'
import styles from './Header.module.scss';
import logo from '../../../assets/kraken2.png';
import { useDispatch, useSelector } from 'react-redux'
import notification from '../../../assets/notification.png';
import { openModerWindow } from '../../../Redux/actions/newsModeration'

function Index () {
  const dataNews = useSelector(state => state.news.items);

  const data = dataNews.map(items => items.completed);



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