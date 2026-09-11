
import cliente from "../model/cliente.js"


class ClienteRepository {

    async Find() {

        const todo = await cliente.findAll()
        return todo

    }

 async   Detalhes(id) {
    const detail = await cliente.findByPk(id)

 return detail
   
}


async  Criar(nome,telefone) {

    const criarcliente  = await cliente.create({nome , telefone})

    return criarcliente

    }



   async Update(id,nome,telefone) {

        const update = await cliente.findByPk(id)

        if(!update){
            throw new Error("Cliente não encontrado");
        }

update.nome = nome

update.telefone = telefone

await update.save()

return update

    }


   async Deletar(id) {

    
const deletcliente = await cliente.findByPk(id)

if(!deletcliente){
    throw new Error("Cliente não encontrado");    
}
 await deletcliente.destroy()

 return deletcliente

    }

}


export default new ClienteRepository()