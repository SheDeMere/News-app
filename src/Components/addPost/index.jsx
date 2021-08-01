import React, { useState } from 'react';
import styles from './AddPost.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { addPost, closeWindow } from '../../Redux/actions/postNews';
import moments from 'moment/locale/ru';
import moment from 'moment';

function Index() {
  const date = `${moment().format('l')}, ${moment().format('LT')}`;

  const dispatch = useDispatch();

  const [title, setTitle] = useState('');

  const [image, setImage] = useState('');

  const [desc, setDesk] = useState('');

  const itemsData = useSelector((state) => state.news.items);

  const [notifications, setNotifications] = useState(false);

  const handleCloseWindow = () => {
    dispatch(closeWindow());
  };

  const itemsId = itemsData.map((items) => {
    return items.id;
  });

  const id = itemsId[itemsId.length - 1] + 1;

  const sendData = () => {
    setNotifications(true);
    dispatch(addPost(id, title, image, desc, date));
    setTimeout(() => {
      setNotifications(false);
    }, 1000);
  };

  return (
    <div className={styles.formBack}>
      <div className={styles.form}>
        <p className={styles.close} onClick={handleCloseWindow}>
          ✖
        </p>
        <div>
          <input
            type="text"
            placeholder="Название поста"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Ссылка на фотографию"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <input
            type="textarea"
            placeholder="Описание"
            value={desc}
            onChange={(e) => setDesk(e.target.value)}
          />
          <button onClick={sendData} className={styles}>
            Добавить
          </button>
          {notifications && (
            <p className={styles.notifications}>
              Ваш пост отправлен на модерацию.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Index;
