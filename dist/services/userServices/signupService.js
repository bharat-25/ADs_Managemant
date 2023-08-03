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
const signupservice = (req) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userData = req.body;
        const encryptPass = yield bcrypt_1.default.hash(req.body.password, Salt);
        userData.password = encryptPass;
        const usertabledata = {
            username: userData.username,
            email: userData.email,
            password: userData.password,
            status: userData.status,
            profile: userData.profile,
            mobNumber: userData.mobNumber,
            gender: userData.gender,
            dob: userData.dob,
            firstName: userData.firstName,
            lastName: userData.lastName,
        };
        const user = yield user_model_1.default.create(userData);
        return user;
    }
    catch (error) {
        return error;
    }
});
exports.default = signupservice;
//# sourceMappingURL=signupService.js.map