import { Request, Response } from 'express';
import prisma from '../../prisma';
import ApiResponse from '../../util/Api/ApiResponse';
import loginFields from './validation.zod';
const POST = async (req: Request, res: Response) => {
    const loginData = req.body.loginData;
    try {
        const parsedLoginFields = loginFields.safeParse(loginData);
        if(!parsedLoginFields.success)
            return res.status(400).json(new ApiResponse(200, parsedLoginFields.error.errors, 'Invalid login data'));
        const user = await prisma.user.findFirst({
            where:{
                OR:[
                    {email:parsedLoginFields.data.credential},
                    {username:parsedLoginFields.data.credential}
                ]
            },
            include:{
                admin:true
            }
        });
        if(!user)
            return res.status(404).json(new ApiResponse(404, {}, 'User not found'));
        return res.status(200).json(new ApiResponse(200, {user}, 'Login success'))
    } catch (error) {
        console.log('Error at controller/user/route',error);
        return res.status(500).json(new ApiResponse(500, {}, 'Internal server error'));
    }
}
export default POST;
