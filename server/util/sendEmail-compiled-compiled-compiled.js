'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.confirmEmail = confirmEmail;
exports.verifyUser = verifyUser;
exports.checkUserExit = checkUserExit;

var _userinfo = require('../models/userinfo');

var _userinfo2 = _interopRequireDefault(_userinfo);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var constant = require('./constant'); /**
                                       * Created by thientran on 8/14/16.
                                       */

var nodemailer = require('nodemailer');
var Fconstant = require('./fconstant');
var fconstant = new Fconstant();

function confirmEmail(res, userinfo, number) {
  var smtpConfig = {
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // use SSL
    auth: {
      user: 'thientt@topica.edu.vn',
      pass: 'ttttttttA1@'
    }
  };
  //  var transporter = nodemailer.createTransport('smtps://dev.edn.com.vn%40gmail.com:Edn102013@smtp.gmail.com');
  var transporter = nodemailer.createTransport(smtpConfig);
  var mailOptions = {
    from: 'Topica - ThienTT <thientt@topica.edu.vn>',
    to: userinfo.email,
    subject: 'Acive Code from Topica',
    text: 'Hi Your link active code is: ' + number,
    html: '<h1>Hi from Topica</h1><p>Your active link is: <a href="http://localhost:8000/api/auth/verify?email=' + userinfo.email + '&activecode=' + number + '">Active Now</a></p>'
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      fconstant.response(constant.RES_TYPE_JSON, res, false, constant.CREATE_ACTIVE_CODE_FAIL, 'CREATE_ACTIVE_CODE_FAIL');
    } else {
      //console.log(info.response);
      fconstant.response(constant.RES_TYPE_JSON, res, true, constant.CREATE_ACTIVE_CODE_SUCCESS, 'CREATE_ACTIVE_CODE_SUCCESS');
    }
  });
}

function verifyUser(email, activecode, callback) {
  var query = { 'email': email, 'activecode': activecode, 'isactive': 0 };
  _userinfo2.default.findOneAndUpdate(query, { 'activecode': 0, 'isactive': 1 }, {
    safe: true
  }, function (err, model) {
    console.log(err);
    console.log(model);
    if (model !== null) {
      callback(true);
    } else {
      callback(false);
    }
  });
}

function checkUserExit(email, callback) {
  var query = { 'email': email };
  _userinfo2.default.findOne(query, function (err, userinfo) {
    console.log(err);
    console.log(userinfo);
    if (userinfo !== null) {
      callback(true);
    } else {
      callback(false);
    }
  });
}
;

(function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(fconstant, 'fconstant', '/Users/thientran/Documents/SourceTree/React-Test/server/util/sendEmail.js');

  __REACT_HOT_LOADER__.register(confirmEmail, 'confirmEmail', '/Users/thientran/Documents/SourceTree/React-Test/server/util/sendEmail.js');

  __REACT_HOT_LOADER__.register(verifyUser, 'verifyUser', '/Users/thientran/Documents/SourceTree/React-Test/server/util/sendEmail.js');

  __REACT_HOT_LOADER__.register(checkUserExit, 'checkUserExit', '/Users/thientran/Documents/SourceTree/React-Test/server/util/sendEmail.js');
})();

;

//# sourceMappingURL=sendEmail-compiled.js.map

;

(function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_userinfo2, '_userinfo2', '/home/black/Documents/Mern/React-Test/server/util/sendEmail-compiled.js');

  __REACT_HOT_LOADER__.register(_interopRequireDefault, '_interopRequireDefault', '/home/black/Documents/Mern/React-Test/server/util/sendEmail-compiled.js');

  __REACT_HOT_LOADER__.register(fconstant, 'fconstant', '/home/black/Documents/Mern/React-Test/server/util/sendEmail-compiled.js');

  __REACT_HOT_LOADER__.register(confirmEmail, 'confirmEmail', '/home/black/Documents/Mern/React-Test/server/util/sendEmail-compiled.js');

  __REACT_HOT_LOADER__.register(verifyUser, 'verifyUser', '/home/black/Documents/Mern/React-Test/server/util/sendEmail-compiled.js');

  __REACT_HOT_LOADER__.register(checkUserExit, 'checkUserExit', '/home/black/Documents/Mern/React-Test/server/util/sendEmail-compiled.js');
})();

;

//# sourceMappingURL=sendEmail-compiled-compiled.js.map

;

(function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_userinfo2, '_userinfo2', '/Users/thientran/Documents/SourceTree/React-Test/server/util/sendEmail-compiled-compiled.js');

  __REACT_HOT_LOADER__.register(_interopRequireDefault, '_interopRequireDefault', '/Users/thientran/Documents/SourceTree/React-Test/server/util/sendEmail-compiled-compiled.js');

  __REACT_HOT_LOADER__.register(fconstant, 'fconstant', '/Users/thientran/Documents/SourceTree/React-Test/server/util/sendEmail-compiled-compiled.js');

  __REACT_HOT_LOADER__.register(confirmEmail, 'confirmEmail', '/Users/thientran/Documents/SourceTree/React-Test/server/util/sendEmail-compiled-compiled.js');

  __REACT_HOT_LOADER__.register(verifyUser, 'verifyUser', '/Users/thientran/Documents/SourceTree/React-Test/server/util/sendEmail-compiled-compiled.js');

  __REACT_HOT_LOADER__.register(checkUserExit, 'checkUserExit', '/Users/thientran/Documents/SourceTree/React-Test/server/util/sendEmail-compiled-compiled.js');
})();

;

//# sourceMappingURL=sendEmail-compiled-compiled-compiled.js.map