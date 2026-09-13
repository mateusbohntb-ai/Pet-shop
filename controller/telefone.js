
import TelefoneService from "../service/telefone.js"

class TelefoneController {

    async Buscar(_, res) {

        try {

            const cliente = await TelefoneService.Buscar()

            res.status(200).send({

                mensagem: "Os dados fornecidos pelo banco de dados",
                dados: cliente

            })

        } catch (error) {

            res.status(500).send({

                mensagem: error.message

            })

        }

    }


    async Detalhe(req, res) {

        try {

            const id = req.params.id
            const cliente = await TelefoneService.Detalhe(id)

            await res.status(200).send({
                mensagem: "Resultado da sua pesquisa logo abaixo",
                dados: cliente
            })


        } catch (error) {

            res.status(500).send({
                mensagem: error.message

            })
        }


    }


    async Criar(req, res) {
        try {

            const { nome, telefone } = req.body

            await  TelefoneService.Criar(nome, telefone)

            res.status(201).send({
                mensagem: "Cadastrado com sucesso"
            })

        } catch (error) {
            res.status(500).send({
                mensagem: error.message

            })
        }
    }

    async Alterar(req,res) {


        try {

            const { nome, telefone } = req.body
            const id = Number(req.params.id)

            await TelefoneService.Alterar(id, nome, telefone)

            res.status(201).send({
                mensagem: " Cliente alterado  com sucesso"
            })


        } catch (error) {
            res.status(500).send({
                mensagem: error.message
            })
        }
    }

    async Deletar(req,res) {
        try {

            const id = req.params.id

            await TelefoneService.Deletar(id)

            res.status(204).send({
                mensagem: "Deletado"
            })

        } catch (error) {
            res.status(500).send({
                mensagem: error.message
            })
        }
    }
}


export default new TelefoneController()