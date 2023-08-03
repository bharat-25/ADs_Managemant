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
const user_sessionRadis_1 = require("../../middleware/user.sessionRadis");
const user_sessionmodel_1 = __importDefault(require("../../models/user.sessionmodel"));
const maintain_session_service = (user) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(user);
        let isSession = yield user_sessionmodel_1.default.findByPk(user.id);
        if (!isSession) {
            const session_details = {
                user_id: user.id,
                username: user.username
            };
            isSession = yield user_sessionmodel_1.default.create(session_details);
            console.log("Session stored successfully");
            // console.log(session);
        }
        else if (isSession.status) {
            yield user_sessionmodel_1.default.update({ status: true }, { where: { user_id: user.id } } // Use the primary key to identify the row to update
            );
            console.log("Session Activate");
        }
        yield (0, user_sessionRadis_1.maintain_session_redis)(user);
        return true;
    }
    catch (err) {
        console.log("Server Error");
        return false;
    }
});
exports.default = maintain_session_service;
//# sourceMappingURL=userSession.js.map