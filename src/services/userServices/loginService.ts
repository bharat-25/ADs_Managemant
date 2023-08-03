import User from "../../models/user.model";
import bcrypt from "bcrypt";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { maintain_session_control } from "../../controller/user/user.session.controller";

dotenv.config();

const loginServices = async (req: Request, res: Response) => {
  try {
    const userdata = req.body;

    const email = userdata.email;
    const password = userdata.password;

    const user = await User.findOne({ where: { email: email } });
    const secret = process.env.secretkey;

    if (!user) {
      return false;
    } else {
      const passmatch = await bcrypt.compare(userdata.password, user.password);
      console.log(passmatch,"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");

      if (!passmatch) {
        return false;
      } else {
        const token = jwt.sign({ email: user.email, user_id: user.id, username: user.username },secret,{ expiresIn: "12h" }
        );
        console.log(token,'cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc');
        console.log(token);
        await maintain_session_control(res, user);

        // return { message: "Login successful ", token: token };
        return { message: "Login successful ", token: token };
        // return true;
      }
    }
  } catch (err) {
    //  throw new Error("Error occurred");
    return false;
  }
};

export default loginServices;
