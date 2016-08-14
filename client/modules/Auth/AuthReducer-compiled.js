'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkSuccess = undefined;

var _AuthActions = require('./AuthActions');

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } /**
                                                                                                                                                                                                     * Created by thientran on 8/13/16.
                                                                                                                                                                                                     */


// Initial State
var initialState = { data: [] };

var AuthReducer = function AuthReducer() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case _AuthActions.SIGN_IN:
      return {
        data: [action.userinfo].concat(_toConsumableArray(state.data))
      };

    case _AuthActions.SIGN_UP:
      return {
        data: [action].concat(_toConsumableArray(state.data))
      };

    case _AuthActions.LOST_PASS:
      return {
        data: []
      };

    default:
      return state;
  }
};
/* Selectors */
//
// // Get all posts
// export const checkSuccess = state => state.auth.data;
var checkSuccess = exports.checkSuccess = function checkSuccess(state) {
  if (state.auth.data != null) {
    if (state.auth.data.length > 0) {
      if (state.auth.data[0].dataserver.mode == 63) return 11;else if (state.auth.data[0].dataserver.mode == 5) return 12;
    }
  }
  return 13; //ko nhan dc thong tin sever
};
//
// // Get post by cuid
// export const getPost = (state, cuid) => state.posts.data.filter(post => post.cuid === cuid)[0];

// Export Reducer
var _default = AuthReducer;
exports.default = _default;
;

(function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(checkSuccess, 'checkSuccess', '/home/black/Documents/Mern/React-Test/client/modules/Auth/AuthReducer.js');

  __REACT_HOT_LOADER__.register(initialState, 'initialState', '/home/black/Documents/Mern/React-Test/client/modules/Auth/AuthReducer.js');

  __REACT_HOT_LOADER__.register(AuthReducer, 'AuthReducer', '/home/black/Documents/Mern/React-Test/client/modules/Auth/AuthReducer.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/home/black/Documents/Mern/React-Test/client/modules/Auth/AuthReducer.js');
})();

;

//# sourceMappingURL=AuthReducer-compiled.js.map