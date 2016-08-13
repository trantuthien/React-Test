/**
 * Created by thientran on 8/13/16.
 */
import UserInfo from '../models/userinfo';
import cuid from 'cuid';
import slug from 'limax';
import sanitizeHtml from 'sanitize-html';

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
  let userinfo = JSON.parse(req.body.userinfo);
  if (!userinfo || !userinfo.username || !userinfo.email || !userinfo.password) {
    res.status(403).end();
  }

  const newUser = new UserInfo(req.body.userinfo);

  // Let's sanitize inputs
  newUser.username = sanitizeHtml(newUser.username);
  newUser.email = sanitizeHtml(newUser.email);
  newUser.password = sanitizeHtml(newUser.password);

  //newUser.cuid = cuid();
  newUser.save((err, saved) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ post: saved });
  });
}
//
// /**
//  * Get a single post
//  * @param req
//  * @param res
//  * @returns void
//  */
// export function getPost(req, res) {
//   UserInfo.findOne({ cuid: req.params.cuid }).exec((err, post) => {
//     if (err) {
//       res.status(500).send(err);
//     }
//     res.json({ post });
//   });
// }
