'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _userinfo = require('../controllers/userinfo.controller');

var UserInfoController = _interopRequireWildcard(_userinfo);

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }newObj.default = obj;return newObj;
  }
}

var router = new _express.Router();

// Add a new UserInfo
router.route('/signup').post(UserInfoController.addUser);

router.route('/verify').get(UserInfoController.verify);

// Delete a post by cuid
// router.route('/signin').post(UserInfoController.sign);

var _default = router;
exports.default = _default;
;

(function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(router, 'router', '/Users/thientran/Documents/SourceTree/React-Test/server/routes/userinfo.routes.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/thientran/Documents/SourceTree/React-Test/server/routes/userinfo.routes.js');
})();

;

//# sourceMappingURL=userinfo.routes-compiled.js.map

;

(function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(UserInfoController, 'UserInfoController', '/home/black/Documents/Mern/React-Test/server/routes/userinfo.routes-compiled.js');

  __REACT_HOT_LOADER__.register(_interopRequireWildcard, '_interopRequireWildcard', '/home/black/Documents/Mern/React-Test/server/routes/userinfo.routes-compiled.js');

  __REACT_HOT_LOADER__.register(router, 'router', '/home/black/Documents/Mern/React-Test/server/routes/userinfo.routes-compiled.js');

  __REACT_HOT_LOADER__.register(_default, '_default', '/home/black/Documents/Mern/React-Test/server/routes/userinfo.routes-compiled.js');
})();

;

//# sourceMappingURL=userinfo.routes-compiled-compiled.js.map

;

(function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(UserInfoController, 'UserInfoController', '/Users/thientran/Documents/SourceTree/React-Test/server/routes/userinfo.routes-compiled-compiled.js');

  __REACT_HOT_LOADER__.register(_interopRequireWildcard, '_interopRequireWildcard', '/Users/thientran/Documents/SourceTree/React-Test/server/routes/userinfo.routes-compiled-compiled.js');

  __REACT_HOT_LOADER__.register(router, 'router', '/Users/thientran/Documents/SourceTree/React-Test/server/routes/userinfo.routes-compiled-compiled.js');

  __REACT_HOT_LOADER__.register(_default, '_default', '/Users/thientran/Documents/SourceTree/React-Test/server/routes/userinfo.routes-compiled-compiled.js');
})();

;

//# sourceMappingURL=userinfo.routes-compiled-compiled-compiled.js.map