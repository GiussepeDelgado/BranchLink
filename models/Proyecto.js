const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProyectoSchema = new Schema({
  Nombre: String,
  Descripcion: String,
  FechaInicio: Date,
  FechaFinalizacion: Date,
  CostoEstimado: Number,
  Estado: String,
});

module.exports = mongoose.model('Proyecto', ProyectoSchema);