const express = require('express');
const router = express.Router();

const filmesController = require('../controllers/filmes.controller');

router.get('/', filmesController.getFilmes);

router.get('/:id', filmesController.getFilme);

router.post('/add', filmesController.addFilme);

router.put('/edit/:id', filmesController.editFilme);

router.delete('/delete/:id', filmesController.deleteFilme);

module.exports = router;