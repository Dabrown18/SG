import * as ActionTypes from '../actionTypes/authActionTypes';
import AsyncStorage from '@react-native-async-storage/async-storage';


export const loginUserSuccess = data => ({
  type: ActionTypes.LOGIN_USER,
  data,
});

export const loginUser = async params => {
  const token = '12345';
  try {
    await AsyncStorage.setItem('@storage_Key', token)
  } catch (e) {
    // saving error
  }

  return dispatch => {
    dispatch(
      loginUserSuccess({
        token,
        username: params.username,
      }),
    );
  };
};
