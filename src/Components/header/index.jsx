import React from 'react';
import styles from './Header.module.scss';
import logo from '../../assets/kraken2.png';
import { useSelector } from 'react-redux'
import notification from '../../assets/notification.png';

function Index () {
  const dataNews = useSelector(state => state.news.items);
  const data = dataNews.map(items => items.completed);
  const falseCount = dataNews.reduce((num,items) => {
    return items.completed === false ? num + 1 : num
  },0)

  console.log(falseCount)

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
            {data.includes(false)  ?
              <div className={styles.notInfo}>
                <p></p>
                <img src={notification} alt="" className={styles.notificationImg}/>
              </div>
              :
              <img src={notification} className={styles.notificationImg}/>
            }
          </div>
          <button>Войти</button>
        </div>
      </div>
    </div>
  )
}

export default Index