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
exports.dbconnection = exports.sequelize = exports.Category = void 0;
const sequelize_1 = require("sequelize");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// const sequelize = new Sequelize({
//   dbName : 'OLX',
//   userName : "postgres",
//   password : "      ",
//   host : "localhost",
//   dialect : "postgres",
//   DB_PORT : 5432,
// });
const sequelize = new sequelize_1.Sequelize('OLX', 'postgres', '      ', {
    host: 'localhost',
    dialect: 'postgres'
});
exports.sequelize = sequelize;
const dbconnection = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield sequelize.authenticate();
        console.log("Connection has been established successfully.");
    }
    catch (err) {
        console.error("Unable to connect to the database:", err);
    }
});
exports.dbconnection = dbconnection;
const Category = sequelize.define("Category", {
    // Define your model attributes here
    Category: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
});
exports.Category = Category;
//# sourceMappingURL=connection.js.map