const HomeModel = require("../models/HomeModel");

HomeModel.create({
  titulo: "Um titulo de tests",
  descricao: "Uma Descriçao de tests",
})
    .then(dados =>  console.log(dados) )
    .catch(e => console.log(e));
    
exports.paginaInicia = function (req, res) {
  res.render("index");

};

exports.homePost = function (req, res) {
  res.send(`<h2>formulário enviado com sucesso sr ${req.body.cliente} !</h2>`);
};
