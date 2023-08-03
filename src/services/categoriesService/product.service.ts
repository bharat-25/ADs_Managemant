import { Product } from "../../models/product.model";
import { Request,Response} from "express";
const { Op } = require("sequelize");
import fs from "fs";

const addProduct = async (req:Request) => {
    try {
      const Productdata= req.body;
      Productdata.heigher_bidding_price=Productdata.base_price;  
      const product = await Product.create(Productdata);
      return product;
    } 
    catch (error) {
        console.log(error);
        return false;
    }
  };


const addimages = async (req:Request)=>{
    try {
        console.log(req.files);
        const pid = req.params.pid;
        const files = req.files;
        const bufferDataArray = [];
        for (let file in files) {
          const fileData = fs.readFileSync(files[file].path);
          const bufferData = Buffer.from(fileData);
          bufferDataArray.push(bufferData);
        }
        console.log(req.user)
        const product = await Product.update({ images: bufferDataArray }, { where: { [Op.and]:{seller_id: req.user.user_id, id:pid} }});
        console.log(product)
       // const result = Product.update({ images: bufferData }, { where: { user_id: req.user.user_id } });
        return true;
    }
    catch (err){
        console.log(err);
        return false;
    }
}  

const deleteproduct = async (req:Request,res:Response) => {
    try {
      const product = await Product.findByPk(req.params.id);
      if (!product) {
        return false;
      } else {
        await product.destroy();
        return true;
      }
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  };

  const getbidding = async (req: Request, res: Response) => {
    try {
      const pid = req.params.pid;
      const currentBid = req.body.currentBid;
      let product:any = await Product.findOne({ where: { id: pid } });
      console.log(product)
      if (product.heigher_bidding_price < currentBid) {
        product = Product.update({ heigher_bidding_price: currentBid, Bidderid: req.user.user_id }, { where: { id:pid } })
      }
      else {
        res.status(402).json({ message: "New Bid price is higher than the current bidding price" });
      }
      res.status(201).json("bid updated");
    } catch (error) {
      res.status(500).json({ message: "Server Error" });
      console.log(error);
    }
  };
export {addProduct,addimages,deleteproduct,getbidding};  