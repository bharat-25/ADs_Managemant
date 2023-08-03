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
const user_model_1 = __importDefault(require("../../models/user.model"));
const dotenv_1 = __importDefault(require("dotenv"));
const user_sessionRadis_1 = require("../../middleware/user.sessionRadis");
dotenv_1.default.config();
const forgetpass = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const SALT = process.env.SALT;
        const email = req.body;
        const isUser = yield user_model_1.default.findOne({ where: { email } });
        console.log(isUser);
        if (!isUser) {
            // const encryptPass = bcrypt.hash(req.body.password, SALT);
            // await User.update({password:encryptPass},{ where: {email:req.body.email} });
            // return true;
            res.status(400).json({ message: 'Email not found' });
        }
        let OTP = Math.floor(1000 + Math.random() * 9000);
        (0, user_sessionRadis_1.save_otp)(email, OTP);
        res.send(OTP);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server error' });
    }
});
exports.default = forgetpass;
//# sourceMappingURL=forgetpassword.js.map