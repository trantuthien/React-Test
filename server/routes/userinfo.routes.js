import { Router } from 'express';
import * as UserInfoController from '../controllers/userinfo.controller';
const router = new Router();


// Add a new UserInfo
router.route('/signup').post(UserInfoController.addUser);
// Check user login
router.route('/signin').post(UserInfoController.SignIn);
// Veify Email
router.route('/verify').get(UserInfoController.verify);

// Delete a post by cuid
// router.route('/signin').post(UserInfoController.sign);

export default router;

