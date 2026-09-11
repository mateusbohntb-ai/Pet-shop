

import cliente from "../repository/cliente.js"



class ClienteService {

    Buscar() {
        return cliente.Find()
    }



   async Detalhe(id) {
  if (!id) {
             throw new Error("Favor informar o ID")
         }
       
         const usuario = await cliente.Detalhes(id)
       
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
       
 const usuario = await cliente.Criar(nome,telefone)
        return {usuario}
    }


   async Alterar(id,nome,telefone) {
 if (!id||!nome||!telefone) {
            throw new Error("Favor informar os dados");
        }
      

      const clientealterado = await cliente.Update(id,nome,telefone)
      
      return clientealterado
    }
    


  async  Deletar(id) {
 if (!id) {
                throw new Error("Favor informar todos os dados ")
            }
       
            const Delete = await cliente.Deletar(id)
       
            return Delete
    }

}


export default new ClienteService