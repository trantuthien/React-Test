'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LOST_PASS = exports.SIGN_IN = exports.SIGN_UP = undefined;
exports.signUp = signUp;
exports.signUpRequest = signUpRequest;
exports.signIn = signIn;
exports.signInRequest = signInRequest;

var _apiCaller = require('../../util/apiCaller');

var _apiCaller2 = _interopRequireDefault(_apiCaller);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Export Constants
var SIGN_UP = exports.SIGN_UP = 'SIGN_UP'; /**
                                            * Created by thientran on 8/13/16.
                                            */
var SIGN_IN = exports.SIGN_IN = 'SIGN_IN';
var LOST_PASS = exports.LOST_PASS = 'LOST_PASS';

// Export Actions
function signUp(dataserver) {
  return {
    type: SIGN_UP,
    dataserver: dataserver
  };
}

function signUpRequest(userinfo) {
  return function (dispatch) {
    return (0, _apiCaller2.default)('auth/signup', 'post', {
      userinfo: {
        username: userinfo.username,
        email: userinfo.email,
        password: userinfo.password
      }
    }).then(function (res) {
      return dispatch(signUp(res));
    });
  };
}

function signIn(dataserver) {
  return {
    type: SIGN_IN,
    dataserver: dataserver
  };
}

function signInRequest(usersignin) {
  return function (dispatch) {
    return (0, _apiCaller2.default)('auth/signin', 'post', {
      usersignin: {
        email: usersignin.email,
        password: usersignin.password
      }
    }).then(function (res) {
      return dispatch(signIn(res));
    });
  };
}
;

(function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(SIGN_UP, 'SIGN_UP', '/Users/thientran/Documents/SourceTree/React-Test/client/modules/Auth/AuthActions.js');

  __REACT_HOT_LOADER__.register(SIGN_IN, 'SIGN_IN', '/Users/thientran/Documents/SourceTree/React-Test/client/modules/Auth/AuthActions.js');

  __REACT_HOT_LOADER__.register(LOST_PASS, 'LOST_PASS', '/Users/thientran/Documents/SourceTree/React-Test/client/modules/Auth/AuthActions.js');

  __REACT_HOT_LOADER__.register(signUp, 'signUp', '/Users/thientran/Documents/SourceTree/React-Test/client/modules/Auth/AuthActions.js');

  __REACT_HOT_LOADER__.register(signUpRequest, 'signUpRequest', '/Users/thientran/Documents/SourceTree/React-Test/client/modules/Auth/AuthActions.js');

  __REACT_HOT_LOADER__.register(signIn, 'signIn', '/Users/thientran/Documents/SourceTree/React-Test/client/modules/Auth/AuthActions.js');

  __REACT_HOT_LOADER__.register(signInRequest, 'signInRequest', '/Users/thientran/Documents/SourceTree/React-Test/client/modules/Auth/AuthActions.js');
})();

;

//# sourceMappingURL=AuthActions-compiled.js.map