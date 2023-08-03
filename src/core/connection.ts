import { DataTypes, Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

// const sequelize = new Sequelize({
//   dbName : 'OLX',
//   userName : "postgres",
//   password : "      ",
//   host : "localhost",
//   dialect : "postgres",
//   DB_PORT : 5432,
// });

 const sequelize = new Sequelize('OLX', 'postgres', '      ', {
    host: 'localhost',
    dialect: 'postgres'
  })


const dbconnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (err) {
    console.error("Unable to connect to the database:", err);
  }
};
const Category = sequelize.define("Category", {
  // Define your model attributes here
  Category: {
    type: DataTypes.STRING, // Assuming Category is of type string
    allowNull: false,
  },
});

export {Category, sequelize, dbconnection };
