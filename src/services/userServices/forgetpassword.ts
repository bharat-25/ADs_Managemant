import User from "../../models/user.model";
import bcrypt from 'bcrypt';
import { Request, Response } from "express";
import dotenv from "dotenv";
import { save_otp } from "../../middleware/user.sessionRadis";

dotenv.config();

const forgetpass = async (req: Request, res:Response) => {
    try{
        const SALT:any=process.env.SALT;
        const email=req.body;
        const isUser = await User.findOne({where:{email}});
        console.log(isUser);
        if(!isUser){
            // const encryptPass = bcrypt.hash(req.body.password, SALT);
            // await User.update({password:encryptPass},{ where: {email:req.body.email} });
            // return true;
            res.status(400).json({message:'Email not found'})
        }

        let OTP=Math.floor(1000+Math.random()*9000);
        save_otp(email,OTP);
        res.send(OTP);
        
    }
    catch(error){
        console.log(error);
        res.status(500).json({message:'Server error'})
    }
}

export default forgetpass

