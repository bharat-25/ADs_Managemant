import User from "../../models/user.model";
import { Request} from "express";
import dotenv from "dotenv";
import Address from "../../models/user.address.model";

dotenv.config();



const addAddress = async (req: Request) => {
    try {
        const addressData = req.body;
        const Addresstabledata = {
            houseNo: addressData.houseNo,
            streetNo: addressData.streetNo,
            area: addressData.area,
            landmark: addressData.landmark,
            city: addressData.city,
            country: addressData.country,
            zipCode: addressData.zipCode,
            state: addressData.state,
            status: addressData.status,
            userId: req.user.user_id,
            addressType: addressData.addressType
        }

        const address = await Address.create(Addresstabledata);
        return address;
    }
    catch (error) {
        return error;
    };
}

export default addAddress;