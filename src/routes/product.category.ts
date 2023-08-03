import express from 'express';
import { authenticateToken } from '../middleware/auth';
import { getCategoryController, getsubCategoryController} from '../controller/category/product.catagory.controller';
const categoryRoute = express.Router();


categoryRoute.route('/').get();
categoryRoute.route('/getcategories').get(authenticateToken,getCategoryController);
categoryRoute.route('/getsubcategories').post(authenticateToken,getsubCategoryController);

export default categoryRoute;