import React from 'react'
import styles from '../News.module.scss'
import { useSelector } from 'react-redux'
import ModalInfo from './ModalInfo'

function Index () {
  const { modalInfo } = useSelector(state => state.news)
  return (
    <div className={styles.modalInfo}>
      {
        modalInfo.map((items, index) => {
          return <ModalInfo item={items} key={index} />
        })
      }
    </div>
  )
}

export default Index;