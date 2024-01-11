import express from 'express';
import GETUSER from '../../controller/user/sing-in/route';
import validateToken from '../../middleware/auth/verifyToken';
import RENEWTOKEN from '../../controller/user/renew-token/route';
const router = express.Router();
router.post('/sign-in', GETUSER);
router.post('/renew-token',validateToken, RENEWTOKEN);
export default router;