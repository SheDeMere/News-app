import React, { useState } from 'react'
import styles from './Header.module.scss';
import logo from '../../../assets/kraken2.png';
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { openLoginWindow } from '../../../Redux/actions/login'
import Login from '../../auth/index'
function Index () {
  const dispatch = useDispatch();
  const { modalWindow } = useSelector(state => state.login)
  const handleLogin = () => {
  dispatch(openLoginWindow())
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
          <button onClick={handleLogin}>Войти</button>
        </div>
      </div>
      {modalWindow && <Login/>}
    </div>
  )
}

export default Index