

import { Sequelize, DataTypes, Model } from "sequelize";
import { sequelize } from "../core/connection";

// const sequelize = new Sequelize(
//   process.env.dbName,
//   process.env.userName,
//   process.env.password,
//   {
//     host: process.env.host,
//     dialect: 'postgres',
//   }
// );

class Session extends Model {
  public id!: number;
  public username!: string;
  public user_id!: number;
  public status!: boolean;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Session.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "users",
        key: "id",
      },
    },
    username: {
      type: DataTypes.STRING,
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    createdAt: {
      type: DataTypes.DATE,
      // default: Date.now()
    },
    updatedAt: {
      type: DataTypes.DATE,
      // default: Date.now()
    },
  },
  
  {
    sequelize,
    modelName: "Session", 
    tableName: "sessions",
  }
);
(async function () {
  await Session.sync();
})();

export default Session;
