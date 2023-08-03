import express from "express";
import dotenv from 'dotenv';
import userRoute from "./src/routes/user.route";
import { dbconnection } from "./src/core/connection";
import profileRoute from "./src/routes/user.update";
import categoryRoute from "./src/routes/product.category";
import productRoute from "./src/routes/product.route";

dotenv.config();

const app = express();
const PORT = process.env.PORT;


app.use(express.json());
dbconnection();
app.use('/',userRoute);
app.use('/profile',profileRoute);
app.use('/',categoryRoute);
app.use('/products',productRoute);


app.listen(PORT,()=>{
  console.log(`server is running on port ${PORT}`);
})