import express from "express";

const app = express();
const PORT = 3000;

// Configuração do EJS
app.set("view engine", "ejs");
app.set("views", "./views");

// Lista de times
const times = [
    {
        id: 1,
        nome: "Grêmio",
        estadio: "Arena",
        cidade: "Porto Alegre"
    },
    {
        id: 2,
        nome: "Inter",
        estadio: "Beira-Rio",
        cidade: "Porto Alegre"
    },
    {
        id: 3,
        nome: "Corinthians",
        estadio: "Neo Química Arena",
        cidade: "São Paulo"
    }
];


app.get("/", (req, res) => {
    res.render("index", {
        mensagem: "Bem-vindo ao catálogo de times de futebol!"
    });
});


app.get("/times", (req, res) => {
    res.render("times", { times });
});


app.get("/times/:id", (req, res) => {
    const id = Number(req.params.id);

    const time = times.find(time => time.id === id);

    if (!time) {
        return res.send("Time não encontrado.");
    }

    res.render("detalhe", { time });
});


// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});