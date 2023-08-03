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
exports.maintain_session_control = void 0;
const userSession_1 = __importDefault(require("../../services/userServices/userSession"));
const maintain_session_control = (res, user) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, userSession_1.default)(user);
        console.log(result);
        if (!result) {
            res.status(401).send("There is some problem to maintain session.");
        }
    }
    catch (err) {
        res.status(500).json({ message: "Server Error", err });
        console.log("Server Error");
    }
});
exports.maintain_session_control = maintain_session_control;
//# sourceMappingURL=user.session.controller.js.map