import { createStore } from 'redux';

const initialState = {
  name: 'Admin',
  email: 'Admin@gmail.com',
};

const reducer = (state = initialState, action: { type: any; payload: any; }) => {
  switch (action.type) {
    case 'SET_NAME':
      return { ...state, name: action.payload };
    case 'SET_EMAIL':
      return { ...state, email: action.payload };
    default:
      return state;
  }
};

export const store = createStore(reducer);