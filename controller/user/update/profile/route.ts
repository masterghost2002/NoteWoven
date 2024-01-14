import { Request, Response } from "express";
import prisma from "../../../../prisma";
import ApiResponse from "../../../../util/Api/ApiResponse";
const PUT = async (req: Request, res: Response) => {
    const user = req.userCredentials;
    const profilePath = req.file?.path;
    if (!profilePath)
        return res.status(400).json(new ApiResponse(400, {}, 'Profile is required'));
    if (!user)
        return res.status(401).json(new ApiResponse(401, {}, 'Unauthorized'));
    const paths = profilePath?.split('/');
    const path = paths[paths.length-2] + '/' + paths[paths.length-1];    
    try {
        const updatedUser = await prisma.user.update({
            where: {
                id: user.id
            },
            data: {
                profileUrl: path
            }
        });
        return res.status(200).json(new ApiResponse(200, {profileUrl: updatedUser.profileUrl}));
    } catch (error) {
        return res.status(500).json(new ApiResponse(500, {}, 'Internal server error'));
    }

};
export default PUT;