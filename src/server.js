require("dotenv").config();
const express = require("express");
const connectDB = require ("./config/db");

const app = express();

//middleware para json
app.use(express.json());

//rota de teste
app.get("/", (req, res) => {
    res.send("api funciona");
});

//conectar no banco e iniciar server
connectDB();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`servidor rodando na porta ${PORT}`)
});