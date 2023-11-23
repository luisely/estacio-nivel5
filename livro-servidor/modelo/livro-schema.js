const db = require('./conexao');

const LivroSchema = new db.Schema({
  titulo: String,
  codEditora: Number,
  resumo: String,
  autores: [String],
})

module.exports = db.model("Livro", LivroSchema)