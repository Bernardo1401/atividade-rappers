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

    export default rappersRoutes