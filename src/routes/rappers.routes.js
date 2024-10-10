import { Router } from "express"

const rappersRoutes = Router()

let rappers = [
{
    id: Number(Math.floor(Math.random() * 99) + 1),
    nome: "Eminem",
    idade: 51,
    descricao: ["baixo", "moreno", "rapper", "barbudo"],
    suspeito: "não"
},
{
    id: Number(Math.floor(Math.random() * 99) + 1),
    nome: "P.diddy",
    idade: 54,
    descricao: ["alto", "cabelo baixo", "negro", "sem barba"],
    suspeito: "sim"
}
]

// Rota para buscar todos os elementos do array rappers
rappersRoutes.get("/", (req, res) => {
    return res.status(200).send(rappers)
    })

     // Rota para cadastrar um novo rapper
rappersRoutes.post("/", (req, res) => {
    const { nome, idade, descricao, suspeito} = req.body

    if(!nome) {
        return res.status(400).send({
            message: "O campo nome é obrigatório para o cadastro"
        })
    }
    
    if(suspeito != "sim" && suspeito != "não"){
        return res.status(400).send({
            message: "Digite sim ou não"
    })
    }

    if(Number.isInteger(idade) == false){
        return res.status(400).send({
            message: "A idade do suspeito deve ser em números inteiros"
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

    const rapper = rappers.find((song) => 
        song.id === Number(id)
    )

    if (!rapper) {
        return res.status(404).send({message: "Rapper não encontrado!" })
    }

    return res.status(200).send(rapper)
})

// Rota para editar um rapper
rappersRoutes.put("/:id", (req, res) => {
    const { id } = req.params

    
    const rapper = rappers.find((song) => 
        song.id === Number(id)
    )

    if (!rapper) {
        return res.status(404).send({message: "Rapper não não encontrado!" })
    }

    const {nome, idade, descricao, suspeito} = req.body
    

    rapper.nome = nome
    rapper.idade = idade
    rapper.descricao = descricao
    rapper.suspeito = suspeito

    return res.status(201).send({
        message: "Rapper atualizado!",
        rapper,
    })
})

// Rota para deleter uma guloseima
rappersRoutes.delete("/:id", (req, res) => {
    const { id } = req.params

    let rapper = rappers.find((song) => 
        song.id === Number(id)
    )
    
        if (!rapper) {
        return res.status(404).send({message:"Rapper não encontrado!" })
    } 

    rappers =  rappers.filter((song) => song.id !== Number(id) )

    return res.status(200).send({
        message: "rapper deletado!",
        rapper,
    })
})


    export default rappersRoutes