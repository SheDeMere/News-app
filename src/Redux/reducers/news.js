const initialState = {
  items: [],
  loading: false,
  modalPostNews: false,
  modalInfo: []
}

export const news = (state = initialState, action) => {
  switch (action.type) {
    case 'news/load/start':
      return {
        ...state,
        loading: true
      }

    case 'news/load/success':
      return {
        ...state,
        loading: false,
        items: action.payload
      }

    case 'get/modal/start':
      return {
        ...state,
        loading: true,
        modalInfo: []
      }

    case 'get/modal/success':
      return {
        ...state,
        loading: false,
        modalInfo: [action.payload]
      }
    default:
      return state
  }
}