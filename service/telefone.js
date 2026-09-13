

import ListatelefoneRepository from "../repository/telefones.js"



class TelefoneService {

    Buscar() {
        return ListatelefoneRepository.Find()
    }



   async Detalhe(id) {
  if (!id) {
             throw new Error("Favor informar o ID")
         }
       
         const usuario = await ListatelefoneRepository.Detalhes(id)
       
         if (!usuario) {
             throw new Error(`ID ${id} do carro não encontrado`)
         }
       return usuario
    }


   async Criar(nome,telefone) {
           if (!nome || !telefone) {
               throw new Error("Favor informar todos os dados ")
       ''
           }
       
 const usuario = await ListatelefoneRepository.Criar(nome,telefone)
        return {usuario}
    }


   async Alterar(id,nome,telefone) {
 if (!id||!nome||!telefone) {
            throw new Error("Favor informar os dados");
        }
      

      const clientealterado = await ListatelefoneRepository.Update(id,nome,telefone)
      
      return clientealterado
    }
    


  async  Deletar(id) {
 if (!id) {
                throw new Error("Favor informar todos os dados ")
            }
       
            const Delete = await ListatelefoneRepository.Deletar(id)
       
            return Delete
    }

}


export default new TelefoneService