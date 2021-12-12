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
  if(!req.body || !req.body.nome || !req.body.imagem || !req.body.genero || !req.body.nota) {
    res.status(400).send({message: 'Filme invalido! Por favor preencha todas as informações.'});
    return
  }

  const filme = filmesService.addFilme(req.body);

  if(filme.id) {
    res.send({message: `O filme ${filme.nome} foi cadastrado com sucesso!`});
  } else {
    res.status(500).send({error: 'Erro no servidor!' });
  }
}

const editFilme = async (req, res) => {
  if(!req.body || !req.body.nome || !req.body.imagem || !req.body.genero || !req.body.nota) {
    res.status(400).send({message: 'Não foi possível editar o filme! Por favor preencha todas as informações.'});
    return
  }

  const filme = req.body;
  const edicao = filmesService.editFilme(req.params.id, filme);

  if(edicao) {
    res.send({message: `O filme ${filme.nome} foi editado com sucesso!`});
  } else {
    res.status(404).send({error: 'Erro no servidor! Id não encontrado.'});
  }
}

const deleteFilme = async (req, res) => {
  const filme = filmesService.deleteFilme(req.params.id);

  if(filme) {
    res.send({message: `O filme ${filme.nome} foi excluído com sucesso!`});
  } else {
    res.status(404).send({error: 'Erro no servidor! Id não encontrado.'});
  }
}

module.exports = {
  getFilmes,
  getFilme,
  addFilme,
  editFilme,
  deleteFilme
}