import previsaoServico from "../service/previsao.js";

class previsaoController {
  async Previsao(req, res) {          // faltavam req, res
    try {
      const { lat, lon } = req.query;
      
      const url = previsaoServico.previsao(lat, lon);  // pega a URL do service
     
      const resposta = await fetch(url);                // faz o fetch aqui
     
      const dados = await resposta.json();
     
      res.status(200).json(dados);
    
    } catch (erro) {
      res.status(502).json({
         erro: 'Falha ao consultar serviço de previsão do tempo' 
        });
    }
  }
}

export default new previsaoController();