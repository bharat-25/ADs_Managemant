"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const loginService_1 = __importDefault(require("../services/userServices/loginService"));
const logoutService_1 = __importDefault(require("../services/userServices/logoutService"));
const addAddress_1 = __importDefault(require("../services/userServices/addAddress"));
const forgetpassword_1 = __importDefault(require("../services/userServices/forgetpassword"));
const signupService_1 = __importDefault(require("../services/userServices/signupService"));
const user_validation_1 = require("../middleware/user.validation");
const auth_1 = require("../middleware/auth");
const userRoute = express_1.default.Router();
userRoute.route('/').get();
userRoute.route('/signup').post(user_validation_1.checkRegisterData, signupService_1.default);
userRoute.route('/login').post(user_validation_1.checkLogindata, loginService_1.default);
userRoute.route('/logout').post(auth_1.authenticateToken, logoutService_1.default);
userRoute.route('/forget').patch(forgetpassword_1.default);
userRoute.route('/addAddress').post(auth_1.authenticateToken, addAddress_1.default);
exports.default = userRoute;
//# sourceMappingURL=user.route.js.map