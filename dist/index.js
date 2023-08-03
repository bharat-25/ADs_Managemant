"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const user_route_1 = __importDefault(require("./src/routes/user.route"));
const connection_1 = require("./src/core/connection");
const user_update_1 = __importDefault(require("./src/routes/user.update"));
const product_category_1 = __importDefault(require("./src/routes/product.category"));
const product_route_1 = __importDefault(require("./src/routes/product.route"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT;
app.use(express_1.default.json());
(0, connection_1.dbconnection)();
app.use('/', user_route_1.default);
app.use('/profile', user_update_1.default);
app.use('/', product_category_1.default);
app.use('/products', product_route_1.default);
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});
//# sourceMappingURL=index.js.map