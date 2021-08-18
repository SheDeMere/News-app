import React, { useEffect } from 'react'
import styles from '../News.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import Notification from './Notification';
import { closeModerWindow } from '../../../Redux/actions/newsModeration';

function Index() {
  const { items } = useSelector((state) => state.news);

  const dispatch = useDispatch();
  const filtered = items.filter(items => items.completed === false)


  const handleOpenModerWindow = () => {
    dispatch(closeModerWindow());
  };

  console.log(filtered.length)
  return (
    <div className={styles.notificationBack}>
      <p onClick={handleOpenModerWindow} className={styles.close}>
        🗙
      </p>
      <div className={styles.notification}>
        {filtered.length === 0 ?
          <h1 className={styles.notReq}>Нет новых запросов</h1>
          :
          <div>
            {items.map((items, index) => {
              if (items.completed === false) {
                return <Notification item={items} key={index} />;
              }
            })}
          </div>
        }
      </div>
    </div>
  );
}

export default Index;
