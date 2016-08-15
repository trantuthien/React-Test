'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addUser = addUser;
exports.verify = verify;
exports.SignIn = SignIn;

var _userinfo = require('../models/userinfo');

var _userinfo2 = _interopRequireDefault(_userinfo);

var _cuid = require('cuid');

var _cuid2 = _interopRequireDefault(_cuid);

var _limax = require('limax');

var _limax2 = _interopRequireDefault(_limax);

var _sanitizeHtml = require('sanitize-html');

var _sanitizeHtml2 = _interopRequireDefault(_sanitizeHtml);

var _sendEmail = require('../util/sendEmail');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by thientran on 8/13/16.
 */
var constant = require('../util/constant');
var Fconstant = require('../util/fconstant');
var fconstant = new Fconstant();

/**
 * Get all posts
 * @param req
 * @param res
 * @returns void
 */
// export function getPosts(req, res) {
//   UserInfo.find().sort('-dateAdded').exec((err, posts) => {
//     if (err) {
//       res.status(500).send(err);
//     }
//     res.json({ posts });
//   });
// }

/**
 * Save a post
 * @param req
 * @param res
 * @returns void
 */
function addUser(req, res) {
  console.log(req.body.userinfo);
  var userinfo = new _userinfo2.default(req.body.userinfo);

  (0, _sendEmail.checkUserExit)(userinfo.email, function (isExit) {
    if (isExit) {
      fconstant.response(constant.RES_TYPE_JSON, res, false, constant.RES_USER_EXISTS, 'RES_USER_EXISTS');
    } else {
      var number = fconstant.hashPlainTextPassword(new Date().getTime().toString());
      userinfo.isactive = 0;
      userinfo.activecode = number;
      userinfo.save(function (err, userreturn) {
        if (err) return console.error(err);
        (0, _sendEmail.confirmEmail)(res, userreturn, number);
      });
    }
  });
  //
  // var userinfo = JSON.parse(req.body.userinfo);
  // if (!userinfo || !userinfo.username || !userinfo.email || !userinfo.password) {
  //   res.status(403).end();
  // }
  //
  // const newUser = new UserInfo(req.body.userinfo);
  //
  // // Let's sanitize inputs
  // newUser.username = sanitizeHtml(newUser.username);
  // newUser.email = sanitizeHtml(newUser.email);
  // newUser.password = sanitizeHtml(newUser.password);
  //
  // newUser.cuid = cuid();
  // newUser.save((err, saved) => {
  //   if (err) {
  //     res.status(500).send(err);
  //   }
  //   res.json({ newUser: saved });
  // });
}

function verify(req, res) {
  console.log(req.path);
  console.log(req.query);
  if (req.path == '/verify') {
    (0, _sendEmail.verifyUser)(req.query.email, req.query.activecode, function (isSuccess) {
      if (isSuccess) {
        //fconstant.response(constant.RES_TYPE_JSON, res, true, constant.CREATE_ACTIVE_CODE_SUCCESS, 'CREATE_ACTIVE_CODE_SUCCESS');
        res.redirect('/sign-up');
      } else {
        res.status(403).json({ success: false, message: 'WRONG USER' });
      }
    });
  } else {
    res.status(403).json({ success: false, message: 'WRONG USER' });
  }
}

function SignIn(req, res) {
  console.log(req.body.usersignin);
  var usersignin = new _userinfo2.default(req.body.usersignin);
  var token = fconstant.createToken(usersignin);
  var query = { 'email': usersignin.email, 'password': usersignin.password, 'isactive': 1 };
  _userinfo2.default.findOneAndUpdate(query, { 'token': token }, {
    safe: true
  }, function (err, usersignin) {
    console.log(err);
    console.log(usersignin);
    if (usersignin !== null) {
      usersignin.password = '';
      fconstant.response(constant.RES_TYPE_JSON, res, true, constant.RES_USER_SIGNIN_SUCCESS, usersignin);
    } else {
      fconstant.response(constant.RES_TYPE_JSON, res, false, constant.RES_USER_SIGNIN_FAIL, err);
    }
  });
}
;

(function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(fconstant, 'fconstant', '/home/black/Documents/Mern/React-Test/server/controllers/userinfo.controller.js');

  __REACT_HOT_LOADER__.register(addUser, 'addUser', '/home/black/Documents/Mern/React-Test/server/controllers/userinfo.controller.js');

  __REACT_HOT_LOADER__.register(verify, 'verify', '/home/black/Documents/Mern/React-Test/server/controllers/userinfo.controller.js');

  __REACT_HOT_LOADER__.register(SignIn, 'SignIn', '/home/black/Documents/Mern/React-Test/server/controllers/userinfo.controller.js');
})();

;

//# sourceMappingURL=userinfo.controller-compiled.js.map