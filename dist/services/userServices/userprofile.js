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
exports.setprofilepic = exports.getProfile = void 0;
const user_model_1 = __importDefault(require("../../models/user.model"));
const user_address_model_1 = __importDefault(require("../../models/user.address.model"));
// const fs = require('fs');
const fs_1 = __importDefault(require("fs"));
const getProfile = (req) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userData = yield user_model_1.default.findOne({ where: { email: req.user.email }, attributes: { exclude: ['password', 'createdAt', 'updatedAt'] } });
        const addressData = yield user_address_model_1.default.findOne({ where: { userId: userData.id }, attributes: { exclude: ['id', 'createdAt', 'updatedAt', 'status', 'userId'] } });
        return [userData, addressData];
    }
    catch (_a) {
        return false;
    }
});
exports.getProfile = getProfile;
const setprofilepic = (req) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //console.log(req.file.buffer);
        const file = req.file;
        const fileData = fs_1.default.readFileSync(file.path);
        const bufferData = Buffer.from(fileData);
        console.log(bufferData);
        const result = user_model_1.default.update({ profilePic: bufferData }, { where: { email: req.user.email } });
        return true;
        // return true;
        // const myModelInstance = await User.findOne({ where: {email: req.user.email} });
        // const blobData = myModelInstance.profilePic;
        // console.log(blobData);
        // fs.writeFileSync('../myFile.png', blobData);
    }
    catch (_b) {
        return false;
    }
});
exports.setprofilepic = setprofilepic;
//# sourceMappingURL=userprofile.js.map