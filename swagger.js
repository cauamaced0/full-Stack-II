import swaggerAutogen from "swagger-autogen";

const doc = {
    host:"localhost:5000",
    info: {
        title: "API REST - PFS2",
        description: "API REST para a construçao do bckend na disciplina de PFS2"
    }
}

const routes = ['./server.js']
const outputJson = './swaggerOutput.json';
swaggerAutogen({openapi: ' 3.0.0'})(outputJson,routes,doc);