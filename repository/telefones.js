
import listatelefone from "../model/listatelefones.js"


class ListatelefoneRepository {

    async Find() {

        const todo = await listatelefone.findAll()
        return todo

    }

 async   Detalhes(id) {
    const detail = await listatelefone.findByPk(id)

 return detail
   
}


async  Criar(nome,telefone) {

    const criarcliente  = await listatelefone.create({nome , telefone})

    return criarcliente

    }



   async Update(id,nome,telefone) {

        const update = await listatelefone.findByPk(id)

        if(!update){
            throw new Error("Cliente não encontrado");
        }

update.nome = nome

update.telefone = telefone

await update.save()

return update

    }


   async Deletar(id) {

    
const deletcliente = await listatelefone.findByPk(id)

if(!deletcliente){
    throw new Error("Cliente não encontrado");    
}
 await deletcliente.destroy()

 return deletcliente

    }

}


export default new ListatelefoneRepository()