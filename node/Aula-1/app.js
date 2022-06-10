//const app = require('./index.js').Pessoa;
//const Pessoa = app.Pessoa;

//const {Pessoa} = require('./index.js')

const axios = require("axios");
const { Pessoa } = require("./index.js");
const p1 = new Pessoa("João", 20);
console.log (p1);

axios("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    const pessoas = response.data.map(
      (pessoa) => new Pessoa(pessoa.name, pessoa.age)
    );
    console.log(pessoas);
  })
  .catch((error) => {
    console.log(error);
  });
