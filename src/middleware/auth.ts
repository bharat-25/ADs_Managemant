import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { Request,Response } from 'express';

dotenv.config();

declare global {
  namespace Express {
    interface Request {
      user?: any;
    }
  }
}
const authenticateToken=async (req:Request, res:Response, next) => {
  let token = req.headers.authorization;

  console.log(token);

  if (token == null) {
    res.status(401).send("unauthorized user to access.");
  }
  try {
    const decoded = jwt.verify(token, 'mySecretkey');

    console.log(decoded)
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ error: 'Unauthorized' });
  }
   
}

export {authenticateToken};
