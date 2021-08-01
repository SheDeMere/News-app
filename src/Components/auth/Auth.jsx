import React, { useState } from 'react';
import styles from './Auth.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { sendAuthData } from '../../Redux/actions/login';
function Auth() {
  const dispatch = useDispatch();

  const { errorMessage } = useSelector((state) => state.login);

  const [login, setLogin] = useState('');

  const [pass, setPass] = useState('');

  const handleSendLogin = () => {
    dispatch(sendAuthData(login, pass));
    setPass('');
    setLogin('');
  };
  return (
    <div className={styles.formLogin}>
      <div className={styles.inputs}>
        <h2>Авторизация</h2>
        <input
          type="text"
          placeholder="Логин"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        />
        <input
          type="text"
          placeholder="Пароль"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
        {errorMessage && <p>Неправильный логин или пароль!</p>}
        <button onClick={handleSendLogin}>Войти</button>
      </div>
    </div>
  );
}

export default Auth;
