import React from 'react'
import { useSelector } from 'react-redux'
import styles from './Hello.module.scss'
function Index () {
  const { guest, user, admin } = useSelector(state => state.login)
  console.log(guest, user, admin)
  return (
    <div className={styles.main}>
      {guest && <h1>Привет гость!</h1>}
      {user && <h1>Привет Пользователь!</h1>}
      {admin && <h1>Привет Админ!</h1>}
    </div>
  )
}

export default Index