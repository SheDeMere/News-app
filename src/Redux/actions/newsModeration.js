const NEWS_URL = 'http://localhost:3010/news';

export const closeModerWindow = () => {
  return {
    type: 'close/moder/window',
  };
};

export const openModerWindow = () => {
  return {
    type: 'open/moder/window',
  };
};

export const postAccepted = (id) => {
  return (dispatch) => {
    dispatch({ type: 'post/accepted/start' });
    fetch(`${NEWS_URL}/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({
        completed: true,
      }),
      headers: { 'Content-type': 'application/json; charset=utf-8' },
    })
      .then((res) => res.json())
      .then((json) => {
        dispatch({
          type: 'post/accepted/success',
          payload: json,
        });
      });
  };
};

//Полностью удаление поста с базы данных
// export const postCanceled = (id) => {
//   return (dispatch) => {
//     dispatch({ type: 'post/canceled/start' });
//     fetch(`${NEWS_URL}/${id}`, {
//       method: 'DELETE',
//     });
//   };
// };


export const postCanceled = (id) => {
  return {
    type: 'post/canceled',
    payload: id
  }
}

export const postAcceptedHidden = (id) => {
  return {
    type: 'post/accepted/hidden',
    payload: id
  }
}