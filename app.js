import express from "express"

import telefone from "./router/telefone.js"

const app = express()

app.use(express.json())


app.use("/petshop/v1/telefone" , telefone)


export default app 