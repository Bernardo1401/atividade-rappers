import { Router } from "express"

const rappersRoutes = Router()

let rappers = [
{
    id: Number(Math.floor(Math.random() * 99) + 1),
    nome: "Dev",
    idade: 18,
    descricao: ["alto", "loiro"],
    suspeito: "sim"
}
]

// Rota para buscar todos os elementos do array rappers
rappersRoutes.get("/", (req, res) => {
    return res.status(200).send(rappers)
    })

     // Rota para cadastrar um novo planeta
rappersRoutes.post("/", (req, res) => {
    const { nome, idade, suspeito,} = req.body

    if(!nome) {
        return res.status(400).send({
            message: "O campo nome é obrigatório para o cadastro"
        })
    }
    
    if(Number.isInteger(idade) == false){
        return res.status(400).send({
            message: "A idade do suspeito deve ser em números inteiros"
    })
    }

    if(suspeito != "sim" && suspeito != "não"){
        return res.status(400).send({
            message: "Digite sim ou não"
    })
    }

    const novoRapper = {
        id: Number(Math.floor(Math.random() * 99) + 1),
        nome,
        idade,
        descricao, 
        suspeito
    }
    
    rappers.push(novoRapper);
    return res.status(201).send({message: "Rapper cadastrado!",
        novoRapper
})
    })

        
// Rota para buscar um rapper especifico pelo id
rappersRoutes.get("/:id", (req, res) => {
    const { id } = req.params

    const rappers = rappersRoutes.find((song) => 
        song.id === Number(id)
    )

    if (!rappers) {
        return res.status(404).send({message: "Rapper não encontrado!" })
    }

    return res.status(200).send(rappers)
})

// Rota para editar um rapper
rappersRoutes.put("/:id", (req, res) => {
    const { id } = req.params

    
    const rappers = rappersRoutes.find((song) => 
        song.id === Number(id)
    )

    if (!rappers) {
        return res.status(404).send({message: "Rapper não não encontrado!" })
    }

    const {nome, idade, descricao, suspeito} = req.body
    

    rappers.nome = nome
    rappers.idade = idade
    rappers.descricao = descricao
    rappers.suspeito = suspeito

    return res.status(201).send({
        message: "Rapper atualizado!",
        rappers,
    })
})

    export default rappersRoutes