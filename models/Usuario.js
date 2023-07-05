const mongoose = require('mongoose');
const { Schema } = mongoose;

const UsuarioSchema = new Schema({
  surnames: String,
  names: String,
  email: String,
  phone: String,
  rol: String,
  password: String
});

module.exports = mongoose.model('Usuario', UsuarioSchema);