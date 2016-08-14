/**
 * Created by thientran on 8/13/16.
 */
import callApi from '../../util/apiCaller';

// Export Constants
export const SIGN_UP = 'SIGN_UP';
export const SIGN_IN = 'SIGN_IN';
export const LOST_PASS = 'LOST_PASS';

// Export Actions
export function signUp(dataserver) {
  return {
    type: SIGN_UP,
    dataserver,
  };
}

export function signUpRequest(userinfo) {
  return (dispatch) => {
    return callApi('auth/signup', 'post', {
      userinfo: {
        username: userinfo.username,
        email: userinfo.email,
        password: userinfo.password,
      },
    }).then(res => dispatch(signUp(res)));
  };
}

export function signIn(userinfo) {
  return {
    type: SIGN_IN,
    userinfo,
  };
}

export function signInRequest(userinfo) {
  return (dispatch) => {
    return callApi('users', 'user').then(() => dispatch(signIn(userinfo)));
  };
}
