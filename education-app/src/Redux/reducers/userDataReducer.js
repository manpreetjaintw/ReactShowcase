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
      console.log("user data",userData,"payload",action.payload)
      userData.data=userData.data.concat(action.payload)  
    return {...state, 
        
        form_data: state.form_data.concat(userData)};
    default:
      return state;
  }
}