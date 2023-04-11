const mongoose = require('mongoose');
const { Schema } = mongoose;

const ComentarioSchema = new Schema({
  Usuario: { type: Schema.Types.ObjectId, ref: 'Usuario' },
  Contenido: String,
  Fecha: Date,
  Proyecto: { type: Schema.Types.ObjectId, ref: 'Proyecto' },
});

module.exports = mongoose.model('Comentario', ComentarioSchema);