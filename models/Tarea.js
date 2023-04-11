const mongoose = require('mongoose');
const { Schema } = mongoose;

const TareaSchema = new Schema({
  Nombre: String,
  Descripcion: String,
  FechaInicio: Date,
  FechaFinalizacion: Date,
  CostoEstimado: Number,
  Estado: String,
  Proyecto: { type: Schema.Types.ObjectId, ref: 'Proyecto' },
});

module.exports = mongoose.model('Tarea', TareaSchema);