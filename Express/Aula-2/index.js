const { application } = require("express");
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send(`
    <form action="/" method="POST">
     Nome:  <input type="text" name="name" placeholder="Nome">
     <button>Enviar</button>
   </form>
   `);
});
app.post("/", (req, res) => {
  res.send(`formulário enviado com sucesso porra!`);
});

app.get("/contato", (req, res) => {
  res.send("THanks for contacting us!");
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
