const USERS_URL = 'http://localhost:3010/users'

export const openLoginWindow = () => {
  return {
    type: 'open/login/window'
  }
}

export const closeLoginWindow = () => {
  return {
    type: 'close/login/window'
  }
}

export const sendAuthData = (login, pass) => {
  return dispatch => {
    dispatch({ type: 'send/auth/start' })
    fetch(USERS_URL)
      .then(res => res.json())
      .then(json => {
        json.map(data => {
          if (data.login === login && data.password === pass){
           if(login === 'admin' && pass === 'admin'){
             dispatch({
               type: 'logined/admin'
             })
           }else {
             dispatch({
               type: 'login/success'
             })
           }
          }else {
            dispatch({
              type: 'login/denied'
            })
          }
        })
      })
  }
}