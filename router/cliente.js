import express from "express"

import ControllerCarro from "../controller/cliente.js"


const router = express.Router()


router.get("/buscar" , ControllerCarro.Buscar)

router.get("/detalhe/:id" , ControllerCarro.Detalhe)

router.post("/cadastrocliente" , ControllerCarro.Criar)

router.put("/alterar/:id" , ControllerCarro.Alterar)

router.delete("/deletar/:id" , ControllerCarro.Deletar)


export default router