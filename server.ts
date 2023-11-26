import dotenv from 'dotenv';
dotenv.config();
import express, {Request, Response } from 'express';
import SERVERROUTES from './routes/server/route';
import USERROUTES from './routes/user/route';
import cors from 'cors';
import config from './config/config';
const PORT = process.env.PORT || 5000;
const server = express();
server.use(cors({
    origin:config.clientUrl
}));
server.use(express.json());

server.use('/api/server', SERVERROUTES);
server.use('/api/user', USERROUTES);
server.get('/api/health', (req:Request, res:Response)=>res.status(200).json('Server is running'));
server.listen(PORT, ()=>console.log('Listening  to port ', PORT));

