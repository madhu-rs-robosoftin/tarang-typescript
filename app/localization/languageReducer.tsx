/* eslint-disable */

import { CHANGE_LANGUAGE } from '../context/types';
import { actionInterface } from '../context/interface.model';
/*eslint-enable*/
interface langState {
  language: Record<string, any>;
}
export default (state: langState, action: actionInterface) => {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      return {
        ...state,
        language: action.payload,
      };

    default:
      return state;
  }
};
