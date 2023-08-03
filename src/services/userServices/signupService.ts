import bcrypt from "bcrypt";
import dotenv from "dotenv";
import User from "../../models/user.model";
import { Request, Response } from "express";

dotenv.config();

const Salt:any=process.env.SALT;

const signupservice = async (details) => {
  try {
    console.log(details);
    const encryptPass = await bcrypt.hash(details.password, 3);
    details.password = encryptPass;
    const usertabledata = {
      username: details.username,
      email: details.email,
      password: details.password,
      profile_photo: details.profile,
      mobNumber: details.mobNumber,
      firstName: details.firstName,
      lastName: details.lastName,
    };

    // await User.sync({force:true})
    const user = await User.create(usertabledata);
    // console.log(user,'-----------------------------------------------------------------------');
    return user;
  } catch (error) {
    return error;
  }
};

export default signupservice;
