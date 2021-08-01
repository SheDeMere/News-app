import React, { useEffect } from 'react'
import styles from '../News.module.scss';
import { useDispatch } from 'react-redux'
import { postAccepted, postCanceled } from '../../../Redux/actions/newsModeration'

function Notification ({ item }) {
  const dispatch = useDispatch();

  const handleTrue = (id) => {
    dispatch(postAccepted(id))
  };

  const handleFalse = (id) => {
    dispatch(postCanceled(id,))
  };
  useEffect(() => {
    dispatch(postAccepted())
  },[dispatch])
  return (
    <div className={styles.newsModerBlock}>
      <div className={styles.notificationInfo}>
        <img src={item.imageURL} alt='Изображнеие'/>
       <div>
         <h3>{item.title}</h3>
         <div className={styles.buttons}>
           <button onClick={() => handleTrue(item.id, item.title ,item.imageURL, item.desc, item.date)}>✅</button>
           <button onClick={() => handleFalse(item.id)}>🚫</button>
         </div>
       </div>
      </div>
    </div>
  )
}

export default Notification