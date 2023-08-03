"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_1 = require("../middleware/auth");
const userprofile_1 = require("../controller/user/userprofile");
const multer_fileupload_1 = require("../middleware/multer.fileupload");
const profileRoute = express_1.default.Router();
profileRoute.route('/').get();
profileRoute.route('/getProfile').get(auth_1.authenticateToken, userprofile_1.getprofileController);
profileRoute.route('/setpicture').post(auth_1.authenticateToken, multer_fileupload_1.upload.single('photo'), userprofile_1.setProfilepicController);
exports.default = profileRoute;
//# sourceMappingURL=user.update.js.map