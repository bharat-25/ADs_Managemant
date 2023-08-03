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
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = require("../core/connection");
// const sequelize = new Sequelize(
//   process.env.dbName,
//   process.env.userName,
//   process.env.password,
//   {
//     host: process.env.host,
//     dialect: 'postgres',
//   }
// );
class Session extends sequelize_1.Model {
}
Session.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    user_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "users",
            key: "id",
        },
    },
    username: {
        type: sequelize_1.DataTypes.STRING,
    },
    status: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
    },
    createdAt: {
        type: sequelize_1.DataTypes.DATE,
        // default: Date.now()
    },
    updatedAt: {
        type: sequelize_1.DataTypes.DATE,
        // default: Date.now()
    },
}, {
    sequelize: connection_1.sequelize,
    modelName: "Session",
    tableName: "sessions",
});
(function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield Session.sync();
    });
})();
exports.default = Session;
//# sourceMappingURL=user.sessionmodel.js.map