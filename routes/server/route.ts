import express from 'express';
import SETUPSERVER from '../../controller/setup-server/route';
const router = express.Router();
router.post('/server-setup', SETUPSERVER);
export default router;