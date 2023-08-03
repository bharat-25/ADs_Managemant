
import User from "../../models/user.model";


export const deleteUserById = async (id: string) => {
    return await User.destroy({ where: { id } });
  };