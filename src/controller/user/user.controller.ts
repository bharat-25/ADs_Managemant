import { Request, Response } from "express";
import loginServices from "../../services/userServices/loginService";
import logoutservice from "../../services/userServices/logoutService";
import addAddress from "../../services/userServices/addAddress";
import forgetpass from "../../services/userServices/forgetpassword";
import signupservice from "../../services/userServices/signupService";
import resetpass from "../../services/userServices/forgetpassword";
import { deleteUserById } from "../../services/userServices/deleteUserService";
// import { request } from "http";



const signupController = async (req: Request, res: Response) => {
  try {
    const details = req.body;
    console.log(details,'-----------------------------------------------------------------------');
    const result = await signupservice(details);
    console.log(result);
    if (!result) {
      console.log("error");
      res.status(400).json({ error: "Failed to insert user data" });
    }
    console.log("hello");
    res.status(201).send(result);
  } catch (error) {
    res.status(400).json({ error: "Failed to insert user data" });
  }
};

const addressaddController = async (req: Request, res: Response) => {
  try {
    const result = await addAddress(req);
    if (!result) {
      res.status(400).json({ error: "Failed to insert user data" });
    }
    res.status(201).send(result);
  } catch (error) {
    res.status(400).json({ error: "Failed to insert user data" });
  }
};

const loginController = async (req: Request, res: Response) => {
  try {
    const result = await loginServices(req, res);
    console.log(result)
    if (!result) {
      console.log(result)
      res.status(400).send("user credentials are not valid");
    }
    res.status(201).send({loggedIn:result});
  } catch (error) {
    res.status(500).send("Internal Server error");
  }
};

const forgetpassword = async (req: Request, res: Response) => {
  try {
    const result:any = await forgetpass(req,res);
    if (!result) {
      res.status(400).send("invalid email");
    }
    res.status(201).send(` OTP send successfully and OTP : ${result}`);
  } catch (error) {
    res.status(500).send("Internal Server error");
  }
};

const resetpasscontroller= async(req:Request,res:Response)=>{
try{
  await resetpass(req,res);
  res.status(201).send(`password changed successfully`);
}
catch (error) {
    res.status(500).send("Internal Server error");
}
}


const deleteUserController = async (req: Request, res: Response) => {
  try{
  const userid  = req.user.user_id;
    await deleteUserById(userid);

    return res.status(200).json({ message: 'User deleted'});
  } 
  catch (error) {
    console.error('Error deleting user:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

const logoutcontrol = async (req: Request, res: Response) => {
  try {
    const result = await logoutservice(req.user);
    console.log(result)
    if (!result) {
      res.status(404).json({ message: "User is already inactiv" });
    } else {
      res.status(201).json({ message: "User logOut Successfully" });
    }
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};

export {
    signupController,
    loginController,
    addressaddController,
    logoutcontrol,
    forgetpassword,
    resetpasscontroller, deleteUserController
};

