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
const logoutservice = (req) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const isSession = yield user_sessionmodel_1.default.findOne({ where: { username: req.user.username },
        });
        if (isSession) {
            if (isSession.status) {
                console.log(isSession);
                yield user_sessionmodel_1.default.update({ status: !isSession.status }, { where: { id: isSession.id } });
                yield (0, user_sessionRadis_1.distroySession)(req.user);
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    }
    catch (err) {
        return false;
    }
});
exports.default = logoutservice;
//# sourceMappingURL=logoutService.js.map