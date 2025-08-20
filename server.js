import express from 'express'
import usuarioRouter from './routes/usuarioRoute.js';
const server = express();

server.use(express.json());

server.use("/usuario", usuarioRouter);

server.listen(5000, function() {
    console.log("backend em funcionamento!");
})
