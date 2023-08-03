import { Request, Response } from "express";
import { addProduct, addimages, deleteproduct, getbidding } from "../../services/categoriesService/product.service";
import { Product } from "../../models/product.model";

const addProductController = async (req:Request,res:Response)=>{
    try {
        const result = await addProduct(req);
        if (!result) {
            res.status(400).send("Something went wrong");
        }
        res.status(201).send(result);
    }
    catch (error) {
        res.status(500).send("Internal Server error");
    }
}

const setproductimagesController = async (req:Request,res:Response)=>{
    try {
        const result:any = await addimages(req);
        if (result[0]==0) {
            res.status(400).send("Something went wrong");
        }
        res.status(201).send("updated successfully");
    }
    catch (error) {
        res.status(500).send("Internal Server error");
    }
}

const deleteproductController = async (req:Request,res:Response)=>{
    try {
        const result = await deleteproduct(req,res);
        if (!result) {
            res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json({ message: 'Product deleted successfully' });
    }
    catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
}

const getbiddingController = async (req, res) => {
    try {
      const product = await Product.findByPk(req.params.pid);
      if (!product) {
        res.status(404).json({ message: 'Product not found' });
      } else {
        const result= await getbidding(req,res);
        // if(!result){
        //     res.status(400).json({msg:"Something went Wrong"});
        // }
        res.status(200).json(result);
        } 
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };
export {addProductController,setproductimagesController,deleteproductController,getbiddingController};