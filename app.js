import express from "express"

import telefone from "./router/telefone.js"

import previsao from "./router/previsao.js"

const app = express()

app.use(express.json())


app.use("/petshop/v1/telefone", telefone)
app.use("/petshop/v1/passear/previsao", previsao)
//api tempo
//app.get('/previsao', async (req, res) => {
//const { lat, lon } = req.query
//const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`;
//try {
//const resposta = await fetch(url);
//const dados = await resposta.json();
//res.status(200).json(dados.current_weather);
//} catch (erro) {
//res.status(502).json({ erro: 'Falha ao consultar serviço de previsão do tempo' });
//}
//});

export default app 