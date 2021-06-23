import * as ActionTypes from '../actionTypes/authActionTypes';

const defaultAuthState = {
  isLogged: false,
};

const authReducer = (state = defaultAuthState, action) => {
  switch (action.type) {
    case ActionTypes.LOGIN_USER:
      return Object.assign({}, state, {
        isLogged: true,
      });
    default:
      return state;
  }
};

export default authReducer;
