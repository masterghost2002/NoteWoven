import {Response,Request, NextFunction } from "express";
import jwt, { Secret } from 'jsonwebtoken';
import config from "../../config/config";
import ApiResponse from "../../util/Api/ApiResponse";
const jwtSecret:Secret = config.jwtSecret;
const validateToken = async (req: Request, res: Response, next:NextFunction) => {
    const accessTokens = req.headers['accesstoken'];
    let accessToken = undefined;
    if(Array.isArray(accessTokens))
        accessToken = accessTokens[0].split(' ')[1];
    else accessToken = accessTokens?.split(' ')[1];
    if (!accessToken || accessToken === null || typeof accessToken !== 'string' || accessToken === 'undefined')
        return res.status(401).json(new ApiResponse(401, {}, 'Unauthorized'));
    try {
        const result= await jwt.verify(accessToken, jwtSecret);
        if (!result || typeof result === 'string')
            return res.status(401).json(new ApiResponse(401, {}, 'Unauthorized'));
        req.userCredentials = result;
        next();
    } catch (error) {
        console.log('Error at verifyToken middleware: ', error);
        return res.status(500).json(new ApiResponse(500, {}, 'Internal Server Error'));
    }
};
export default validateToken;