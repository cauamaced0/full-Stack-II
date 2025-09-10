import express from 'express'
import usuarioRouter from './routes/usuarioRoute.js';
import imovelRouter from './routes/imovelRoute.js';
import swaggerUi from 'swagger-ui-express'
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const outputJson = require("./swaggerOutput.json");
const server = express();

server.use(express.json());

server.use("/docs", swaggerUi.serve, swaggerUi.setup(outputJson));
server.use("/usuario", usuarioRouter);
server.use("/imovel", imovelRouter);

server.listen(5000, function() {
    console.log("backend em funcionamento!");
})
