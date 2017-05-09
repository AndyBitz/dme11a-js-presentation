import { createStore } from 'redux';
// import withRedux from 'next-redux-wrapper';

const actionTypes = {
  CHANGE: 'CHANGE'
};

const reducer = (state = {}, action) => {
  switch(action.type) {
    case actionTypes.CHANGE:
      return { role: action.role }
    default:
      return state;
  }
};

export const makeStore = (initialState = { role: 'VISITOR' }) => {
  return createStore(reducer, initialState);
};

export const _changeRole = role => ({
  type: actionTypes.CHANGE,
  role
});