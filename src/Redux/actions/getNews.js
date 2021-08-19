export const getNews = () => {
  return (dispatch) => {
    dispatch({ type: 'news/load/start' });
    fetch('/news')
      .then((res) => res.json())
      .then((json) => {
        dispatch({
          type: 'news/load/success',
          payload: json,
        });
      });
  };
};

export const getIdModal = (id) => {
  return (dispatch) => {
    dispatch({ type: 'get/modal/start' });
    fetch(`/news/${id}`)
      .then((res) => res.json())
      .then((json) => {
        dispatch({
          type: 'get/modal/success',
          payload: json,
        });
      });
  };
};

export const openNewsWindow = () => {
  return {
    type: 'open/news/window',
  };
};

export const closeNewsWindow = () => {
  return {
    type: 'close/news/window',
  };
};
