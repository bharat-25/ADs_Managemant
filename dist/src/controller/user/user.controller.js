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
exports.deleteUserController = exports.resetpasscontroller = exports.forgetpassword = exports.logoutcontrol = exports.addressaddController = exports.loginController = exports.signupController = void 0;
const loginService_1 = __importDefault(require("../../services/userServices/loginService"));
const logoutService_1 = __importDefault(require("../../services/userServices/logoutService"));
const addAddress_1 = __importDefault(require("../../services/userServices/addAddress"));
const forgetpassword_1 = __importDefault(require("../../services/userServices/forgetpassword"));
const signupService_1 = __importDefault(require("../../services/userServices/signupService"));
const forgetpassword_2 = __importDefault(require("../../services/userServices/forgetpassword"));
const deleteUserService_1 = require("../../services/userServices/deleteUserService");
// import { request } from "http";
const signupController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const details = req.body;
        console.log(details, '-----------------------------------------------------------------------');
        const result = yield (0, signupService_1.default)(details);
        console.log(result);
        if (!result) {
            console.log("error");
            res.status(400).json({ error: "Failed to insert user data" });
        }
        console.log("hello");
        res.status(201).send(result);
    }
    catch (error) {
        res.status(400).json({ error: "Failed to insert user data" });
    }
});
exports.signupController = signupController;
const addressaddController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, addAddress_1.default)(req);
        if (!result) {
            res.status(400).json({ error: "Failed to insert user data" });
        }
        res.status(201).send(result);
    }
    catch (error) {
        res.status(400).json({ error: "Failed to insert user data" });
    }
});
exports.addressaddController = addressaddController;
const loginController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, loginService_1.default)(req, res);
        console.log(result);
        if (!result) {
            console.log(result);
            res.status(400).send("user credentials are not valid");
        }
        res.status(201).send({ loggedIn: result });
    }
    catch (error) {
        res.status(500).send("Internal Server error");
    }
});
exports.loginController = loginController;
const forgetpassword = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, forgetpassword_1.default)(req, res);
        if (!result) {
            res.status(400).send("invalid email");
        }
        res.status(201).send(` OTP send successfully and OTP : ${result}`);
    }
    catch (error) {
        res.status(500).send("Internal Server error");
    }
});
exports.forgetpassword = forgetpassword;
const resetpasscontroller = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, forgetpassword_2.default)(req, res);
        res.status(201).send(`password changed successfully`);
    }
    catch (error) {
        res.status(500).send("Internal Server error");
    }
});
exports.resetpasscontroller = resetpasscontroller;
const deleteUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userid = req.user.user_id;
        yield (0, deleteUserService_1.deleteUserById)(userid);
        return res.status(200).json({ message: 'User deleted' });
    }
    catch (error) {
        console.error('Error deleting user:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
});
exports.deleteUserController = deleteUserController;
const logoutcontrol = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, logoutService_1.default)(req.user);
        console.log(result);
        if (!result) {
            res.status(404).json({ message: "User is already inactiv" });
        }
        else {
            res.status(201).json({ message: "User logOut Successfully" });
        }
    }
    catch (err) {
        res.status(500).json({ message: "Server Error" });
    }
});
exports.logoutcontrol = logoutcontrol;
//# sourceMappingURL=user.controller.js.map