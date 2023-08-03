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
const dotenv_1 = __importDefault(require("dotenv"));
const user_address_model_1 = __importDefault(require("../../models/user.address.model"));
dotenv_1.default.config();
const addAddress = (req) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const addressData = req.body;
        const Addresstabledata = {
            houseNo: addressData.houseNo,
            streetNo: addressData.streetNo,
            area: addressData.area,
            landmark: addressData.landmark,
            city: addressData.city,
            country: addressData.country,
            zipCode: addressData.zipCode,
            state: addressData.state,
            status: addressData.status,
            userId: req.user.user_id,
            addressType: addressData.addressType
        };
        const address = yield user_address_model_1.default.create(Addresstabledata);
        return address;
    }
    catch (error) {
        return error;
    }
    ;
});
exports.default = addAddress;
//# sourceMappingURL=addAddress.js.map