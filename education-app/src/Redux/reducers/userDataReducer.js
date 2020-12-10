import * as actions from '../actions/actionTypes';

let initialState = {
  user: [{ name: 'abc'}],
  userData: []
};

let userData = [];
let   currentUser;

export default function UserReducer(state = initialState, action) {
    console.log("kkkkk", state)
  switch (action.type) {
    case actions.SAVE_USER:
      userData = {
        name: action.payload,
      };
      return {
        ...state,
        user: state.user.concat(userData),
      };
      case actions.ADD_DATA:
      console.log('satte user' + JSON.stringify(state.user));
      const current = state.user.find((users) => users.name === currentUser);
      current.data = action.payload;
      console.log(JSON.stringify(current) + 'fecth  ' + current.data);
      return {
        userData: state.userData.concat(current),
      };

  
    default:
      return state;
  }
}