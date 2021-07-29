import React, { useEffect } from 'react';
import styles from './News.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getNews } from '../../Redux/actions/getNews';
import News from './News';
import AddPost from '../addPost';
import ModalIndex from './modalInfo'
import { Route } from 'react-router-dom'
import { openWindow } from '../../Redux/actions/postNews'
function Index () {

  const dispatch = useDispatch();

  const { items } = useSelector(state => state.news);

  const { openModalWindow } = useSelector(state => state.addNews)

  useEffect(() => {
    dispatch(getNews())
  }, [dispatch])

  const openWindowAddPost = () => {
    dispatch(openWindow())
  }
  return (
    <div className={styles.backNews}>
      <button onClick={openWindowAddPost} className={styles.openWindow}>+</button>
      <div className={styles.newsMain}>
        {items.map((items, index) => {
          return <News info={items} key={index}/>
        })}
      </div>
      {openModalWindow && <AddPost/>}
     <Route path={`/news/:id?`}>
       <ModalIndex />
     </Route>
    </div>
  )
}

export default Index