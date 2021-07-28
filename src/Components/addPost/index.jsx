import React from 'react'
import styles from './AddPost.module.scss'
function Index (props) {
  return (
   <div className={styles.formBack}>
     <div className={styles.form}>
       <p>✖</p>
       <div>
         <input type="text" placeholder='Название поста'/>
         <input type="text" placeholder='Ссылка на фотографию'/>
         <input type="textarea" placeholder='Описание'/>
         <button>Добавить</button>
       </div>
     </div>
   </div>
  )
}

export default Index