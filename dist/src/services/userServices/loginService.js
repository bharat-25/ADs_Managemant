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
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
const user_session_controller_1 = require("../../controller/user/user.session.controller");
dotenv_1.default.config();
const loginServices = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userdata = req.body;
        const email = userdata.email;
        const password = userdata.password;
        const user = yield user_model_1.default.findOne({ where: { email: email } });
        const secret = process.env.secretkey;
        if (!user) {
            return false;
        }
        else {
            const passmatch = yield bcrypt_1.default.compare(userdata.password, user.password);
            console.log(passmatch, "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
            if (!passmatch) {
                return false;
            }
            else {
                const token = jsonwebtoken_1.default.sign({ email: user.email, user_id: user.id, username: user.username }, secret, { expiresIn: "12h" });
                console.log(token, 'cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc');
                console.log(token);
                yield (0, user_session_controller_1.maintain_session_control)(res, user);
                // return { message: "Login successful ", token: token };
                return { message: "Login successful ", token: token };
                // return true;
            }
        }
    }
    catch (err) {
        //  throw new Error("Error occurred");
        return false;
    }
});
exports.default = loginServices;
//# sourceMappingURL=loginService.js.map