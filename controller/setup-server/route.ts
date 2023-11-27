import { Request, Response } from 'express';
import prisma from '../../prisma';
import ApiResponse from '../../util/Api/ApiResponse';
import serverSetupFields from './validation.zod';
import cryptr from '../../util/cryptr';
const POST = async (req: Request, res: Response) => {
    const serverData = req.body.serverData;
    // check is the setup is already done
    try {
        const admin = await prisma.admin.findMany();
        if (admin.length !== 0)
            return res.status(409).json(new ApiResponse(409, {}, 'Server setup is already done'));
    } catch (error) {
        console.log('Error at controller/setup-server/route.ts');
        return res.status(500).json(new ApiResponse(500, {}, 'Internal server setup'));
    }

    // if the admin is not found we can further proceed to setup the server
    try {
        const parsedServerData = serverSetupFields.safeParse(serverData);
        if (!parsedServerData.success)
            return res.status(400).json(new ApiResponse(400, parsedServerData.error.errors, 'Invalid Data fields'));

        // hash the password
        const hashPassword =  cryptr.encrypt(parsedServerData.data.password);
        parsedServerData.data.password = hashPassword;
        const data = await prisma.$transaction(async (transaction) => {
            const adminUser = await transaction.user.create({
                data: {
                    email: parsedServerData.data.email,
                    username: parsedServerData.data.username,
                    password: parsedServerData.data.password,
                    profileUrl: parsedServerData.data.profileUrl ? parsedServerData.data.profileUrl : '',
                    admin: {
                        create: {
                            bio: parsedServerData.data.bio,
                            website: parsedServerData.data.website,
                            domainUrl: parsedServerData.data.domainUrl,
                        }
                    }
                },
                include: {
                    admin: true,
                },
            });
            return adminUser;
        });
        const {password, ...user} = data;
        return res.status(200).json(new ApiResponse(200, user, 'Server setup succed'));
    } catch (error) {
        return res.status(500).json(new ApiResponse(500, {}, 'Internal Server Error'));
    }
}
export default POST;
