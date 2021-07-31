import React, { useEffect } from 'react';
import styles from './News.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getNews } from '../../Redux/actions/getNews';
import News from './News';
import AddPost from '../addPost';
import ModalIndex from './modalInfo'
import { Route } from 'react-router-dom'
import Notification from './notification'
function Index () {

  const dispatch = useDispatch();

  const { items, windowModeration } = useSelector(state => state.news);

  useEffect(() => {
    dispatch(getNews())
  }, [dispatch])

  return (
    <div className={styles.backNews}>
      <div className={styles.newsMain}>
        {items.map((items, index) => {
          if(items.completed) {
            return  <News info={items} key={index}/>
          }
        })}
      </div>
      {windowModeration && <Notification/>}
       <ModalIndex />
    </div>
  )
}

export default Index