import express from "express";
import mongoose from "./db.js";
import cors from "cors";

const Cliente = mongoose.model('Cliente', {
    nome: String,
    email: String,
    telefone: String,
    senha: String
});

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.post("/cadastro", async (req, res) => {
    const { nome, email, telefone, senha } = req.body

    const cliente = new Cliente({
        nome,
        email,
        telefone,
        senha
    })

    const cadastro = await cliente.save()
    console.log(cadastro)
    res.status(200).json({ cadastro })
})

app.listen(3000, async () => {
    console.log("Servidor rodando na porta 3000")
})