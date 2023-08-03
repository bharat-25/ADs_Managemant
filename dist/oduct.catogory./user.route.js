"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_validation_1 = require("../middleware/user.validation");
const auth_1 = require("../middleware/auth");
const userRoute = express_1.default.Router();
userRoute.route('/').get();
userRoute.route('/signup').post(user_validation_1.checkRegisterData, signupController);
userRoute.route('/login').post(user_validation_1.checkLogindata, loginController);
userRoute.route('/logout').post(auth_1.authenticateToken, logoutcontrol);
userRoute.route('/forget').patch(forgetpasscontroller);
userRoute.route('/addAddress').post(auth_1.authenticateToken, addressaddController);
exports.default = userRoute;
//# sourceMappingURL=user.route.js.map