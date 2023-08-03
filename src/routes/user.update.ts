import express from 'express';
import { authenticateToken } from '../middleware/auth';
import { getprofileController,setProfilepicController} from '../controller/user/userprofile';
import { upload } from '../middleware/multer.fileupload';
const profileRoute = express.Router();


profileRoute.route('/').get();
profileRoute.route('/getProfile').get(authenticateToken,getprofileController);
profileRoute.route('/setpicture').post(authenticateToken,upload.single('photo'),setProfilepicController);

export default profileRoute;