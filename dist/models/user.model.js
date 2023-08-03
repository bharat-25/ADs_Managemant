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
const connection_1 = require("../core/connection");
const User = connection_1.sqlize.define('User', {
    id: {
        type: connection_1.sqlize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    username: {
        type: connection_1.sqlize.STRING,
        allowNull: false,
    },
    email: {
        type: connection_1.sqlize.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: connection_1.sqlize.STRING,
        allowNull: false,
    },
    address: {
        type: connection_1.sqlize.STRING,
        allowNull: false,
    },
    profile_photo: {
        type: connection_1.sqlize.BLOB("long"), // Using BLOB to store binary data (Buffer) for the photo
    },
    mobNumber: {
        type: connection_1.sqlize.STRING,
        allowNull: false,
    },
    gender: {
        type: connection_1.sqlize.STRING,
        allowNull: false,
    },
    dob: {
        type: connection_1.sqlize.DATE,
        allowNull: false,
    },
    firstName: {
        type: connection_1.sqlize.STRING,
        allowNull: false,
    },
    lastName: {
        type: connection_1.sqlize.STRING,
        allowNull: false,
    },
    status: {
        type: connection_1.sqlize.BOOLEAN,
        defaultValue: false, // Assuming default status is false (inactive)
    },
    session: {
        type: connection_1.sqlize.BOOLEAN,
        defaultValue: false, // Assuming default session status is false
    },
});
// sequelize
//   .sync({ alter: true })
//   .then(() => {
//     console.log("Database synchronized");
//   })
//   .catch((error: any) => {
//     console.error("Error synchronizing database:", error);
//   });
(function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield User.sync();
    });
})();
exports.default = User;
//# sourceMappingURL=user.model.js.map