exports.paginaInicia = function (req, res) {
  res.render('index');
};

exports.homePost = function (req, res) {
    res.send(`<h2>formulário enviado com sucesso sr ${req.body.cliente} !</h2>`);
    };