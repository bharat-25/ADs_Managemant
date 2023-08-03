import { get_otp } from "../../middleware/user.sessionRadis";
import User from "../../models/user.model";
import bcrypt from "bcrypt";
const SALT = process.env.SALT;

export const reset_password = async (req: any, res: any)=>{
    try {
        const { email, otp, newPassword } = req.body;
        const user = await User.findOne({ where: { email } });
        if (!user) {
            res.status(400).json({ message: 'Email not found' });
        }
        const userOTP = await get_otp(email);
        console.log(userOTP);
        if (!userOTP ||  userOTP !== otp) {
            return res.status(401).json({ error: 'Invalid OTP' });
        }
        const encryptPass = await bcrypt.hash(newPassword,SALT);
        user.password = encryptPass;
        console.log(user.password);
        await user.save();
        return res.status(200).json({ message: 'Password reset successful' });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server error' });
    }
}