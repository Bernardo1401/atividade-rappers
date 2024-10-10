import { Router } from "express"

const rappersRoutes = Router()

let rappers = [
{
    id: Number(Math.floor(Math.random() * 99) + 1),
    nome: "Dev",
    idade: 18,
    descriçao: ["alto", "loiro"],
    suspeito: "sim"
}
]

// Rota para buscar todos os elementos do array rappers
rappersRoutes.get("/", (req, res) => {
    return res.status(200).send(rappers)
    })

    