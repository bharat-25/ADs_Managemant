"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = require("../core/connection");
class User extends sequelize_1.Model {
}
User.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    username: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    profile_photo: {
        type: sequelize_1.DataTypes.BLOB, // Using BLOB to store binary data (Buffer) for the photo
    },
    mobNumber: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    gender: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    dob: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: true,
    },
    firstName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    lastName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    status: {
        type: sequelize_1.DataTypes.BOOLEAN,
        defaultValue: false, // Assuming default status is false (inactive)
    },
}, {
    tableName: "users",
    sequelize: connection_1.sequelize,
});
exports.default = User;
//# sourceMappingURL=user.model.js.map