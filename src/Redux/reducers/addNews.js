const initialState = {
  items: [],
  openModalWindow: false,
};

const addNews = (state = initialState, action) => {
  switch (action.type) {
    case 'open/modal/window':
      return {
        ...state,
        openModalWindow: true,
      };

    case 'close/modal/window':
      return {
        ...state,
        openModalWindow: false,
      };

    default:
      return state;
  }
};

export default addNews;
