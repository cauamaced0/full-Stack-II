import express from "express";
import Usuariocontroller from "../controllers/usuarioController.js";
const router = express.Router();

let ctrl = new Usuariocontroller();
router.get("/", ctrl.listar);

export default router;