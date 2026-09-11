import express from "express"

import cliente from "./router/cliente.js"

const app = express()

app.use(express.json())


app.use("/petshop/v1/cliente" , cliente)


export default app 