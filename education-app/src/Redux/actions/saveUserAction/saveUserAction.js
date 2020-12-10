import * as actions from '../actionTypes';

export const saveUserAction = (data) => ({
  type: actions.SAVE_USER,
  payload: data,
});

export const addData = (data) => ({
  type: actions.ADD_DATA,
  payload: data,
});
