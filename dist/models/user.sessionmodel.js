"use strict";
// import Sequelize from "sequelize";
// import { sqlize } from "../core/connection";
Object.defineProperty(exports, "__esModule", { value: true });
// const Session = sqlize.define('session', {
//     id: {
//         type: Sequelize.INTEGER,
//         primaryKey: true,
//         autoIncrement: true
//     },
//     user_id:{
//         type: Sequelize.INTEGER,
//         allowNull: false,
//         references: {
//             model: 'users',
//             key: 'id'
//         }
//     },
//     username:{
//         type:Sequelize.STRING
//     },
//     status: {
//         type: Sequelize.BOOLEAN,
//         allowNull: false,
//         defaultValue: true
//     },
//     createdAt: {
//         type: Sequelize.DATE,
//         default: Date.now()
//     },
//     updatedAt: {
//         type: Sequelize.DATE,
//         default: Date.now()
//     }
// });
// (async function () {
//     await Session.sync();
// })();
// export {Session};
// userSession.ts
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize(process.env.dbName, process.env.userName, process.env.password, {
    host: process.env.host,
    dialect: 'postgres'
});
class Session extends sequelize_1.Model {
}
Session.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    user_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'users',
            key: 'id'
        }
    },
    username: {
        type: sequelize_1.DataTypes.STRING
    },
    status: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    },
    createdAt: {
        type: sequelize_1.DataTypes.DATE,
        // default: Date.now()
    },
    updatedAt: {
        type: sequelize_1.DataTypes.DATE,
        // default: Date.now()
    }
}, {
    sequelize,
    modelName: 'Session',
    tableName: 'sessions', // The name of the table in the database
});
exports.default = Session;
//# sourceMappingURL=user.sessionmodel.js.map