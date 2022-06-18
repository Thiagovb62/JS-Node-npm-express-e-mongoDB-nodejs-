exports.paginaInicia = function (req, res) {
  res.render('index');
};

exports.homePost = function (req, res) {
    res.send(`formulário enviado com sucesso sr ${req.body.name} !`);
    };