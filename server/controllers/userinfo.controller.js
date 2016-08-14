/**
 * Created by thientran on 8/13/16.
 */
import UserInfo from '../models/userinfo';
import cuid from 'cuid';
import slug from 'limax';
import sanitizeHtml from 'sanitize-html';

var constant = require('../util/constant');
var Fconstant = require('../util/fconstant');
var fconstant = new Fconstant();
import { confirmEmail, verifyUser, checkUserExit }from '../util/sendEmail';
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
export function addUser(req, res) {
  console.log(req.body.userinfo);
  var userinfo = new UserInfo(req.body.userinfo);

  checkUserExit(userinfo.email, function (isExit) {
    if(isExit){
      fconstant.response(constant.RES_TYPE_JSON, res, false, constant.RES_USER_EXISTS, 'RES_USER_EXISTS');
    }else{
      var number = fconstant.hashPlainTextPassword(new Date().getTime().toString());
      userinfo.isactive = 0;
      userinfo.activecode = number;
      userinfo.save(function (err, userreturn) {
        if (err) return console.error(err);
        confirmEmail(res, userreturn, number);
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

export function verify(req, res) {
  console.log(req.path);
  console.log(req.query);
  if(req.path == '/verify'){
    verifyUser(req.query.email, req.query.activecode, function (isSuccess) {
      if(isSuccess){
        //fconstant.response(constant.RES_TYPE_JSON, res, true, constant.CREATE_ACTIVE_CODE_SUCCESS, 'CREATE_ACTIVE_CODE_SUCCESS');
        res.redirect('/sign-up');
      }else{
        res.status(403).json({success: false, message: 'WRONG USER'});
      }
    });
   }else {
    res.status(403).json({success: false, message: 'WRONG USER'});
  }
  // if (req.path == '/authenticate') next();
}
