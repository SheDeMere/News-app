import React from 'react';
import styles from './News.module.scss';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getIdModal } from '../../Redux/actions/getNews';

function News({ info }) {
  const lengthSymbol = info.desc.substr(0, 80) + '...';

  const lengthTitle = info.title.substr(0, 50) + '...';

  const dispatch = useDispatch();

  const handleClickId = (id) => {
    dispatch(getIdModal(id));
  };
  return (
    <Link to={`/news/${info.id}`}>
      <div className={styles.news} onClick={() => handleClickId(info.id)}>
        <div className={styles.title}>
          <img src={info.imageURL} alt="" />
          <h3>{info.title.length > 50 ? lengthTitle : info.title}</h3>
          <p>{info.desc.length > 80 ? lengthSymbol : info.desc}</p>
        </div>
        <span>{info.date}</span>
      </div>
    </Link>
  );
}

export default News;
