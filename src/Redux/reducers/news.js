const initialState = {
  items: [],
  modalInfo: [],
  loading: false,
  windowModeration: false,
  windowNewsInfo: false,
};

const news = (state = initialState, action) => {
  switch (action.type) {
    case 'news/load/start':
      return {
        ...state,
        loading: true,
      };

    case 'news/load/success':
      return {
        ...state,
        loading: false,
        items: action.payload,
      };

    case 'get/modal/start':
      return {
        ...state,
        loading: true,
        modalInfo: [],
      };

    case 'get/modal/success':
      return {
        ...state,
        loading: false,
        modalInfo: [action.payload],
      };

    case 'close/moder/window':
      return {
        ...state,
        windowModeration: false,
      };

    case 'open/moder/window':
      return {
        ...state,
        windowModeration: true,
      };

    case 'post/accepted/start':
      return {
        ...state,
        loading: true,
      };

    case 'post/accepted/success':
      return {
        ...state,
        items: [...state.items, action.payload],
      };

    case 'close/news/window':
      return {
        ...state,
        windowNewsInfo: false,
      };

    case 'open/news/window':
      return {
        ...state,
        windowNewsInfo: true,
      };

    default:
      return state;
  }
};

export default news;
