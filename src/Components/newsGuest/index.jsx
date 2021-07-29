import React, { useEffect } from 'react';
import styles from './News.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getNews } from '../../Redux/actions/getNews';
import News from './News';
import AddPost from '../addPost';
import ModalIndex from './modalInfo'
import { Route } from 'react-router-dom'
function Index () {
  const dispatch = useDispatch();

  const { items } = useSelector(state => state.news);

  useEffect(() => {
    dispatch(getNews())
  }, [dispatch])

  return (
    <div className={styles.backNews}>
      <div className={styles.newsMain}>
        {items.map((items, index) => {
          return <News info={items} key={index}/>
        })}
      </div>

     <Route path={`/news/:id?`}>
       <ModalIndex />
     </Route>
    </div>
  )
}

export default Index