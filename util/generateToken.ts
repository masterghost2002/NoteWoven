import jwt, { Secret } from 'jsonwebtoken';
import config from '../config/config';
import { JwtUserPayload } from '../types/types';
const jwtSecret:Secret = config.jwtSecret;
const generateToken = async (data:JwtUserPayload)=>{
    let token:string;
    try {
        token = await jwt.sign(data, jwtSecret, { expiresIn: '60d' });
    } catch (error) {
        throw error;
    }
    return token;
};
export default generateToken;