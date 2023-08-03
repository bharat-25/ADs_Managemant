import express from 'express';
import { authenticateToken } from '../middleware/auth';
import { addProductController, deleteproductController, getbiddingController, setproductimagesController } from '../controller/category/product.controller';
const productRoute = express.Router();
import { upload } from '../middleware/multer.fileupload';

productRoute.route('/').get();
productRoute.route('/addproducts').post(authenticateToken,addProductController);
productRoute.route('/addimages/:pid').post(authenticateToken,upload.array('images',5),setproductimagesController);
productRoute.route('/deleteproduct/:id').get(authenticateToken,deleteproductController);
productRoute.route('/raisedbidding/:pid').post(authenticateToken,getbiddingController);
export default productRoute;