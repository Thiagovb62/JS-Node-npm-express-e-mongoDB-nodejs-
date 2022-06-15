exports.paginaInicia = function (req, res) {
  res.send(`
    <form action="/" method="POST">
     Nome:  <input type="text" name="name" placeholder="Nome">
     <button>Enviar</button>
   </form>
   `);
};

exports.homePost = function (req, res) {
    res.send(`formulário enviado com sucesso sr ${req.body.name} !`);
    };