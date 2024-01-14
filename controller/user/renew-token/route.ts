import { Request, Response } from 'express';
import ApiResponse from '../../../util/Api/ApiResponse';
import prisma from '../../../prisma';
const POST = async (req:Request, res:Response)=>{
    const userCredentials = req.userCredentials;
    const accessToken = req.accessToken;
    if(!userCredentials)
        return res.status(401).json(new ApiResponse(401, {}, 'Unauthorized'));
    try {
        const userFromDB = await prisma.user.findUnique({
            where:{
                id:userCredentials.id
            },
            include:{
                admin:true
            }
        });
        if(!userFromDB)
            return res.status(404).json(new ApiResponse(404, {}, 'User not found'));
        const {password, ...user} = userFromDB;
        return res.status(200).json(new ApiResponse(200, {...user, accessToken}, 'Login success'))

    } catch (error) {
        console.log('Error at controller/user/route',error);
        return res.status(500).json(new ApiResponse(500, {}, 'Internal server error'));
    }
};
export default POST;