import express from "express"

import TelefoneController from "../controller/telefone.js"


const router = express.Router()


router.get("/buscar" , TelefoneController.Buscar)

router.get("/detalhe/:id" , TelefoneController.Detalhe)

router.post("/cadastrotelefone" , TelefoneController.Criar)

router.put("/alterar/:id" , TelefoneController.Alterar)

router.delete("/deletar/:id" , TelefoneController.Deletar)


export default router