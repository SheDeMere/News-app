import React, { useState } from 'react'
import styles from './Header.module.scss';
import logo from '../../../assets/kraken2.png';
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { exitAccount, openLoginWindow } from '../../../Redux/actions/login'
import Login from '../../auth/index'
function Index () {
  const dispatch = useDispatch();
  const { modalWindow } = useSelector(state => state.login)
  const logined = useSelector(state => state.login.guest)
  const handleLogin = () => {
  dispatch(openLoginWindow())
  }
  const handleExit = () => {
    dispatch(exitAccount())
  }

  return (
    <div>
      <div className={styles.header}>
        <div className={styles.nav}>
          <Link to='/main'>
            <li>Главная</li>
          </Link>
          <Link to='/'>
            <li>Новости</li>
          </Link>
        </div>
        <div className={styles.logo}>
          <img src={logo} alt="logo"/>
        </div>
        <div className={styles.login}>
          {logined ?
            <button onClick={handleLogin}>Войти</button>
            :
            <button onClick={handleExit}>Выйти</button>
          }
        </div>
      </div>
      {modalWindow && <Login/>}
    </div>
  )
}

export default Index