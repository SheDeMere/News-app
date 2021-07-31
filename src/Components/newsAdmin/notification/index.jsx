import React from 'react'
import styles from '../News.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import Notification from './Notification'
import { closeModerWindow } from '../../../Redux/actions/newsModeration'
function Index () {
  const { items } = useSelector(state => state.news);

  const dispatch = useDispatch();

  const handleOpenModerWindow = () => {
    dispatch(closeModerWindow())
  }
  return (
    <div className={styles.notificationBack}>
      <p onClick={handleOpenModerWindow} className={styles.close}>🗙</p>
      <div className={styles.notification}>
        {
          items.map((items, index) => {
            if (items.completed === false) {
              return <Notification item={items} key={index} />
            }
          })
        }
      </div>
    </div>
  )
}

export default Index;