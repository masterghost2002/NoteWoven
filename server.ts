import express, {Request, Response } from 'express';
const PORT = process.env.PORT || 5000;
const server = express();
server.get('/', (req:Request, res:Response)=>{
    return res.status(200).json('OK');
});
server.listen(PORT, ()=>console.log('Listening  to port ', PORT));

