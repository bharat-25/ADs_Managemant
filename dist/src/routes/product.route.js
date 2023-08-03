"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_1 = require("../middleware/auth");
const product_controller_1 = require("../controller/category/product.controller");
const productRoute = express_1.default.Router();
const multer_fileupload_1 = require("../middleware/multer.fileupload");
productRoute.route('/').get();
productRoute.route('/addproducts').post(auth_1.authenticateToken, product_controller_1.addProductController);
productRoute.route('/addimages/:pid').post(auth_1.authenticateToken, multer_fileupload_1.upload.array('images', 5), product_controller_1.setproductimagesController);
productRoute.route('/deleteproduct/:id').get(auth_1.authenticateToken, product_controller_1.deleteproductController);
productRoute.route('/raisedbidding/:pid').post(auth_1.authenticateToken, product_controller_1.getbiddingController);
exports.default = productRoute;
//# sourceMappingURL=product.route.js.map