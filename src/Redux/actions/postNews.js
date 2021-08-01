const NEWS_URL = 'http://localhost:3010/news';

export const openWindow = () => {
  return {
    type: 'open/modal/window',
  };
};

export const closeWindow = () => {
  return {
    type: 'close/modal/window',
  };
};

export const addPost = (id, title, image, desc, date) => {
  return (dispatch) => {
    dispatch({ type: 'add/post/start' });
    fetch(NEWS_URL, {
      method: 'POST',
      body: JSON.stringify({
        id: id,
        title: title,
        imageURL: image,
        desc: desc,
        date: date,
        completed: false,
      }),
      headers: { 'Content-type': 'application/json; charset=utf-8' },
    });
  };
};
