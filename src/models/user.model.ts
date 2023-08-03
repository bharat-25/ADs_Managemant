import { DataTypes, Model } from "sequelize";
import  {sequelize}  from "../core/connection";

class User extends Model {
  public id!: number;
  public username!: string;
  public email!: string;
  public password!: string;
  // public address!: string;
  public profile_photo!: string;
  public mobnumber!: string;
  public gender!: string;
  public lastName!: string;
  public firstName!: string;
  public dob!: Date;
  public status!: boolean;
  // public session!: boolean;
  public readonly createdAt!: Date;
  public session!: boolean;
  public readonly updatedAt!: Date;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    profile_photo: {
      type: DataTypes.BLOB, // Using BLOB to store binary data (Buffer) for the photo
    },
    mobNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    dob: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: false, // Assuming default status is false (inactive)
    },
  },
  {
      tableName: "users",
      sequelize,
  }
);

export default User;
