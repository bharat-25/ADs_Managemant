"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.reset_password = void 0;
const user_sessionRadis_1 = require("../../middleware/user.sessionRadis");
const user_model_1 = __importDefault(require("../../models/user.model"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const SALT = process.env.SALT;
const reset_password = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, otp, newPassword } = req.body;
        const user = yield user_model_1.default.findOne({ where: { email } });
        if (!user) {
            res.status(400).json({ message: 'Email not found' });
        }
        const userOTP = yield (0, user_sessionRadis_1.get_otp)(email);
        console.log(userOTP);
        if (!userOTP || userOTP !== otp) {
            return res.status(401).json({ error: 'Invalid OTP' });
        }
        const encryptPass = yield bcrypt_1.default.hash(newPassword, SALT);
        user.password = encryptPass;
        console.log(user.password);
        yield user.save();
        return res.status(200).json({ message: 'Password reset successful' });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server error' });
    }
});
exports.reset_password = reset_password;
//# sourceMappingURL=resetPassword.js.map