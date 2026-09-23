import express from "express"
import previsaoController from "../controller/previsao.js"

const router = express.Router()

router.get('/buscar', previsaoController.Previsao)  // era app.get

export default router