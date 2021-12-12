const filmesService = require('../services/filmes.service');

const getFilmes = async (req, res) => {
  const filmes = await filmesService.getFilmes();
  res.send(filmes);
}

const getFilme = async (req, res) => {
  const filme = await filmesService.getFilme(req.params.id);
  res.send(filme);
}

const addFilme = async (req, res) => {
  if(!req.body || !req.body.nome || !req.body.iamgem || !req.body.genero || !req.body.nota || !req.body.assistido) {
    res.status(400).send({message: 'Filme invalido! Por favor preencha todas as informações.'});
    return
  }

  const filme = req.body;

  await filmesService.addFilme(filme)
  .then(() => {
    res.send({message: `O filme ${filme.nome} foi cadastrado com sucesso!`})
  })
  .catch((err) => {
    comsole.error(err);
    res.status(500).send({error: 'Erro no servidor!'});
  });
}

const editFilme = async (req, res) => {
  if(!req.body || !req.body.nome || !req.body.iamgem || !req.body.genero || !req.body.nota || !req.body.assistido) {
    res.status(400).send({message: 'Não foi possível editar o filme! Por favor preencha todas as informações.'});
    return
  }

  const idParam = req.params.id;
  const filmeEdit = req.body;
  await filmesService.editFilme(idParam, filmeEdit)
  .then(() => {
    res.send({message: `O filme ${filmeEdit.nome} foi editado com sucesso!`})
  })
  .catch((err) => {
    console.error(err);
    res.status(500).send({error: 'Erro no servidor!'});
  });
}

const deleteFilme = async (req, res) => {
  await filmesService.deleteFilme(req.params.id)
  .then (() => {
    res.send({message: `O filme foi excluido com sucesso!`});
  })
  .catch((err) => {
    res.status(500).send({error: 'Erro no servidor!'});
  });
}

module.exports = {
  getFilmes,
  getFilme,
  addFilme,
  editFilme,
  deleteFilme
}