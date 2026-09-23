


class previsaoServico {
  previsao(lat, lon) {                // recebe por parâmetro
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`;
    return url;
  }
}

export default new previsaoServico();  // exporta instância, não a classe