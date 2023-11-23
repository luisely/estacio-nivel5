const express = require('express');
const Livro = require('../modelo/livro-dao')
const router = express.Router()
const { param, validationResult  } = require('express-validator')

const validaCodigoLivro = [param('id').exists().isMongoId().withMessage("Codigo Invalido, Precisa ser um codigo ID MongoDB Valido!")]

router.get('/', async (req, res) => {
  try{
    const result = await Livro.obterLivros()
    res.status(200).json(result)
  } catch(err) {
    res.status(500).send({message: 'Falha ao carregar!'});
  }
});

router.post('/', async (req, res) => {
  try{
    const result = await Livro.incluir(req.body)
    res.status(200).json(result)
  } catch(err) {
    res.status(500).send({message: 'Falha ao cadastrar.', error: err});
  }
})

router.delete('/:id', validaCodigoLivro ,async (req, res) => {
  const {errors} = validationResult(req);

  if(errors.length > 0) {
    return res.status(400).send({message: errors})
  }

  const { id } = req.params

  await Livro.excluir(id)
  return res.sendStatus(204)
})

module.exports = router;