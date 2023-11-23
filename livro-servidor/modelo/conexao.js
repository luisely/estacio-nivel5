const banco = require('mongoose');

// mongoose informa que essa opções foram descontinuadas, portanto deixei fora.

// const options = {
//   useUnifiedTopology: true,
//   useNewUrlParser: true
// }

banco.connect("mongodb://localhost:27017/livraria")


module.exports = banco;