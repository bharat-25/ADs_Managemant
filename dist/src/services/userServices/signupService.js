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
const bcrypt_1 = __importDefault(require("bcrypt"));
const dotenv_1 = __importDefault(require("dotenv"));
const user_model_1 = __importDefault(require("../../models/user.model"));
dotenv_1.default.config();
const Salt = process.env.SALT;
const signupservice = (details) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(details);
        const encryptPass = yield bcrypt_1.default.hash(details.password, 3);
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
        const user = yield user_model_1.default.create(usertabledata);
        // console.log(user,'-----------------------------------------------------------------------');
        return user;
    }
    catch (error) {
        return error;
    }
});
exports.default = signupservice;
//# sourceMappingURL=signupService.js.map