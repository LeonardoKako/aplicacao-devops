const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Rota principal (HTML)
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

// Rota de integrantes (JSON)
const data = {
  integrantes: [{ nome: "Gabriel Mascia" }, { nome: "Leonardo Fleith" }],
};

app.get("/integrantes", (req, res) => {
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
