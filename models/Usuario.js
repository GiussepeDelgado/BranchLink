const mongoose = require('mongoose');
const { Schema } = mongoose;

const UsuarioSchema = new Schema({
  Nombre: String,
  CorreoElectronico: String,
  Telefono: String,
  Rol: String,
});

module.exports = mongoose.model('Usuario', UsuarioSchema);