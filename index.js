require("dotenv").config();
const express = require("express");
const conn = require("./db/conn");
const Game = require("./models/Game");
const app = express();

app.use(
    express.urlencoded({
        extended: true,
    })
);

app.use(express.json());
application.get("/games/novo", (req, res)=>{
    res.sendFile(`${__dirname}/views/formJogo.html`);
})

app.post("/games/novo", async (req, res)=>{
    const dadosInseridos={
        titulo: req.body.titulo,
        descr: req.body.descr,
        valor: req.body.valor
    };

    const games = await Game.create(dadosInseridos);
    res.send("O jogo foi inserido dentro do id:" + games.id);
});

app.listen(8000, ()=>{
    console.log("Servidor está rodando corretamente!");
});

conn
.sync()
.then(() => {
    console.log("O servidor está conectado corretamente e soncronizado ao banco de dados!");
})
.catch((err)=>{
    console.log("Servidor está rodando um erro" + err);
});