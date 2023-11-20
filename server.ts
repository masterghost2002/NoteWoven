import express, {Request, Response } from 'express';
import path from 'path';
const PORT = process.env.PORT || 5000;
const server = express();

// serve the static files only for production
server.use(express.static(path.join(__dirname, './web/dist')));
server.get('/', (req:Request, res:Response)=>res.sendStatus(200));

server.get('/health', (req:Request, res:Response)=>res.status(200).json('Server is running'));
server.listen(PORT, ()=>console.log('Listening  to port ', PORT));
