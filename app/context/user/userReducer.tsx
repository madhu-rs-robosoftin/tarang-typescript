/* eslint-disable */

import { LOGIN, LOGOUT } from '../types';
import { userState, actionInterface } from '../interface.model';
/*eslint-enable*/
export default (state: userState, action: actionInterface) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        userInfo: action.payload,
        isAuthenticated: true,
      };
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
      };

    default:
      return state;
  }
};
