import express from 'express';
import GETUSER from '../../controller/user/route';
const router = express.Router();
router.post('/sign-in', GETUSER);
export default router;