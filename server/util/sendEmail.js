/**
 * Created by thientran on 8/14/16.
 */
import UserInfo from '../models/userinfo';

var constant = require('./constant');
var nodemailer = require('nodemailer');
var Fconstant = require('./fconstant');
var fconstant = new Fconstant();

export function confirmEmail(res, userinfo, number) {
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
    text: 'Hi Your link active code is: ' +number,
    html: '<h1>Hi from Topica</h1><p>Your active link is: <a href="http://localhost:8000/api/auth/verify?email='+userinfo.email+'&activecode='+number+'">Active Now</a></p>'
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


export function verifyUser(email, activecode, callback) {
  var query = {'email': email, 'activecode': activecode, 'isactive':0};
  UserInfo.findOneAndUpdate(query, {'activecode':0, 'isactive':1}, {
    safe: true,
  }, function (err, model) {
    console.log(err);
    console.log(model);
    if (model !== null){
      callback(true)
    }else {
      callback(false)
    }
  });
}


export function checkUserExit(email, callback) {
  var query = {'email': email};
  UserInfo.findOne(query, function (err, userinfo) {
    console.log(err);
    console.log(userinfo);
    if (userinfo !== null){
      callback(true)
    }else {
      callback(false)
    }
  });
}

