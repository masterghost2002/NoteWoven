import 'express';
import { UserType } from '../../types/types';
import { JwtPayload } from "jsonwebtoken";
declare global {
  namespace Express {
    export interface Request {
      userCredentials?: JwtPayload;
      user?:UserType;
    }
  }
}