import * as actions from '../actions/actionTypes';

let initialState = {
  user: [],
  form_data:[]
};

let userData = [];

export default function UserReducer(state = initialState, action) {
  switch (action.type) {
    case actions.SAVE_USER:
      userData = {
        name: action.payload,
        data: []
      };
      return {
        ...state,
        user: state.user.concat(userData),
      };
    case actions.ADD_DATA:
      return {...state, form_data:  action.payload};
    default:
      return state;
  }
}