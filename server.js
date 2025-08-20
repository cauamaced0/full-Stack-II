import express from 'express'
import usuarioRouter from './routes/usuarioRoute.js';
import swggerUI from 'swagger-ui-express';
import {createRequire} from "module";
const require = createRequire(import.meta.url);
const outputJson = require ("./swaggerOutput.json");

const server = express();

server.use("/doc", swaggerUI.serve,swaggerUI.setup(outputJson));
server.use("/usuario",usuarioRouter);

server.use(express.json());

server.use("/usuario", usuarioRouter);

server.listen(5000, function() {
    console.log("http://localhost:5000");
})
