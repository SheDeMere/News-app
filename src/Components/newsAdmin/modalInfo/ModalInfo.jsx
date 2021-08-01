import React from 'react';
import styles from '../News.module.scss';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { closeNewsWindow } from '../../../Redux/actions/getNews';

function ModalInfo({ item }) {
  const dispatch = useDispatch();

  const handleCloseWindow = () => {
    dispatch(closeNewsWindow());
  };
  return (
    <div className={styles.modalInfoBack}>
      <div className={styles.modalBlock}>
        <Link to="/">
          <span onClick={handleCloseWindow}>✖</span>
        </Link>
        <h1>{item.title}</h1>
        <img src={item.imageURL} alt="" />
        <p>" {item.desc} "</p>
      </div>
    </div>
  );
}

export default ModalInfo;
