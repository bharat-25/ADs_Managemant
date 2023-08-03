import express from 'express';

import {
    signupController,
    loginController,
    addressaddController,
    logoutcontrol,
    forgetpassword,
    resetpasscontroller,
    deleteUserController
  } from "../controller/user/user.controller";
import { checkRegisterData,checkLogindata } from '../middleware/user.validation';
import { authenticateToken } from '../middleware/auth';
const userRoute = express.Router();


userRoute.route('/').get();
userRoute.route('/signup').post(checkRegisterData,signupController);
userRoute.route('/login').post(checkLogindata,loginController);
userRoute.route('/logout').post(authenticateToken,logoutcontrol);
userRoute.route('/forget').patch(forgetpassword)
userRoute.route('/addAddress').post(authenticateToken,addressaddController);
userRoute.route("/resetpass").post(resetpasscontroller);
userRoute.route('/delete').delete(authenticateToken,deleteUserController);

export default userRoute;