import express from 'express';
import GETUSER from '../../controller/user/sing-in/route';
const router = express.Router();
router.post('/sign-in', GETUSER);
export default router;