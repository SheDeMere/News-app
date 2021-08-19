export const openLoginWindow = () => {
  return {
    type: 'open/login/window',
  };
};

export const closeLoginWindow = () => {
  return {
    type: 'close/login/window',
  };
};

export const sendAuthData = (login, pass) => {
  return (dispatch) => {
    dispatch({ type: 'send/auth/start' });
    fetch('/users')
      .then((res) => res.json())
      .then((json) => {
        json.map((data) => {
          if (data.login === login && data.password === pass) {
            localStorage.setItem('guest', false)
            localStorage.setItem('admin', false)
            localStorage.setItem('user', true)
            if (login === 'admin' && pass === 'admin') {
              localStorage.setItem('guest', false)
              localStorage.setItem('user', false)
              localStorage.setItem('admin', true)
              dispatch({
                type: 'logined/admin',
              });
            } else {
              dispatch({
                type: 'login/success',
              });
            }
          } else {
            dispatch({
              type: 'login/denied',
            });
          }
        });
      });
  };
};

export const exitAccount = () => {
  localStorage.removeItem('user')
  localStorage.removeItem('admin')
  localStorage.removeItem('guest')
  return {
    type: 'exit/account',
  };
};
