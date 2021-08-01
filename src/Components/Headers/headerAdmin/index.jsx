import React, { useState } from 'react'
import styles from './Header.module.scss';
import logo from '../../../assets/kraken2.png';
import { useDispatch, useSelector } from 'react-redux'
import notification from '../../../assets/notification.png';
import { openModerWindow } from '../../../Redux/actions/newsModeration'

function Index () {
  const dataNews = useSelector(state => state.news.items);

  const data = dataNews.map(items => items.completed);

  const dispatch = useDispatch();
  const [empty, setEmpty] = useState(false);
  //счетчик запросов новых статей
  const falseCount = dataNews.reduce((num,items) => {
    return items.completed === false ? num + 1 : num
  },0)

  const handleClickEmptyWindow = () => {
    setEmpty(true)
    setTimeout(() => {
      setEmpty(false)
    }, 2000)
  }
  const handleOpenModerWindow = () => {
    dispatch(openModerWindow())
  }

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
              <div className={styles.notInfo} onClick={handleOpenModerWindow}>
                <p>{falseCount}</p>
                <img src={notification} alt="" className={styles.notificationImg}/>
              </div>
              :
              <div className={styles.empty}>
                {empty && <p>Нет новых запросов</p>}
                <img src={notification} className={styles.notificationImg} onClick={handleClickEmptyWindow}/>
              </div>
            }
          </div>
          <button>Войти</button>
        </div>
      </div>
    </div>
  )
}

export default Index