/**
 * Created by thientran on 8/13/16.
 */
import {SIGN_IN, SIGN_UP, LOST_PASS} from './AuthActions';

// Initial State
const initialState = {data: []};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN :
      return {
        data: [action.userinfo, ...state.data],
      };

    case SIGN_UP :
      return {
        data: [action, ...state.data],
      };

    case LOST_PASS :
      return {
        data: [],
      };

    default:
      return state;
  }
};
/* Selectors */
//
// // Get all posts
// export const checkSuccess = state => state.auth.data;
export const checkSuccess = function (state) {
  if (state.auth.data != null) {
    if (state.auth.data.length > 0) {
      if (state.auth.data[0].dataserver.mode == 63)
        return 11;
      else if (state.auth.data[0].dataserver.mode == 5)
        return 12;
    }
  }
  return 13;//ko nhan dc thong tin sever
}
//
// // Get post by cuid
// export const getPost = (state, cuid) => state.posts.data.filter(post => post.cuid === cuid)[0];

// Export Reducer
export default AuthReducer;
