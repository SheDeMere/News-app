import { JS } from 'json-server/lib/cli/utils/is'

const initialState = {
  guest: JSON.parse(localStorage.getItem('guest')),
  user: JSON.parse(localStorage.getItem('user')),
  admin: JSON.parse(localStorage.getItem('admin')),
  modalWindow: false,
  errorMessage: false,
};

const login = (state = initialState, action) => {
  switch (action.type) {
    case 'open/login/window':
      return {
        ...state,
        modalWindow: true,
        errorMessage: false
      };

    case 'close/login/window':
      return {
        ...state,
        modalWindow: false,
        errorMessage: false
      };

    case 'logined/admin':
      return {
        ...state,
        guest: false,
        user: false,
        admin: true,
        modalWindow: false,
        errorMessage: false,
      };

    case 'login/success':
      return {
        ...state,
        guest: false,
        user: true,
        admin: false,
        modalWindow: false,
        errorMessage: false,
      };

    case 'login/denied':
      return {
        ...state,
        errorMessage: true,
      };

    case 'exit/account':
      return {
        ...state,
        user: false,
        admin: false,
        guest: true,
      };
    default:
      return state;
  }
};

export default login;
