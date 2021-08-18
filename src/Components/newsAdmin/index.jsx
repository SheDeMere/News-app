import React, { useEffect } from 'react';
import styles from './News.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getNews } from '../../Redux/actions/getNews';
import News from './News';
import ModalIndex from './modalInfo';
import Notification from './notification';

function Index() {
  const dispatch = useDispatch();

  const { items, windowModeration, windowNewsInfo } = useSelector(
    (state) => state.news,
  );

  if (windowModeration || windowNewsInfo) {
    document.body.style.overflow = 'hidden'
  }else {
    document.body.style.overflow = 'auto'
  }

  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);
  return (
    <div className={styles.backNews}>
      <div className={styles.newsMain}>
        {items.map((items, index) => {
          if (items.completed) {
            return <News info={items} key={index} />;
          }
        })}
      </div>
      {windowModeration && <Notification />}
      {windowNewsInfo && <ModalIndex />}
    </div>
  );
}

export default Index;
