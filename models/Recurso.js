const mongoose = require('mongoose');
const { Schema } = mongoose;

const RecursoSchema = new Schema({
  Nombre: String,
  Descripcion: String,
  Tipo: String,
  Costo: Number,
  Proyecto: { type: Schema.Types.ObjectId, ref: 'Proyecto' },
});

module.exports = mongoose.model('Recurso', RecursoSchema);