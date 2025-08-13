import express from 'express'
import usuarioRouter from './routes/usuarioRoutes.js'
const server = express();
const port = 4200;

server.use("/usuarios", usuarioRouter);

server.listen(port, ()=>
    {
    console.log("======================= backend em funcionamento! ===============");
    })