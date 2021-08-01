import React, { useState } from 'react'
import styles from './Header.module.scss';
import logo from '../../../assets/kraken2.png';
import { useDispatch, useSelector } from 'react-redux'
import notification from '../../../assets/notification.png';
import { openModerWindow } from '../../../Redux/actions/newsModeration'
import { Link } from 'react-router-dom'
import Login from '../../auth/index'
import { exitAccount } from '../../../Redux/actions/login'

function Index () {
  const dataNews = useSelector(state => state.news.items);

  const data = dataNews.map(items => items.completed);
  const logined = useSelector(state => state.login.guest)
  const { modalWindow } = useSelector(state => state.login)
  const dispatch = useDispatch();
  const [empty, setEmpty] = useState(false);
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
  const handleExit = () => {
    dispatch(exitAccount())
  }

  return (
    <div>
      <div className={styles.header}>
        <div className={styles.nav}>
          <ul>
            <Link to='/main'>
              <li>Главная</li>
            </Link>
            <Link to='/'>
              <li>Новости</li>
            </Link>
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
            <button onClick={handleExit}>Выйти</button>
        </div>
      </div>
      {modalWindow && <Login/>}
    </div>
  )
}

export default Index