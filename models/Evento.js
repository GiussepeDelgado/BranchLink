const mongoose = require('mongoose');
const { Schema } = mongoose;

const EventoSchema = new Schema({
  Nombre: String,
  Descripcion: String,
  FechaInicio: Date,
  FechaFinalizacion: Date,
  Proyecto: { type: Schema.Types.ObjectId, ref: 'Proyecto' },
});

module.exports = mongoose.model('Evento', EventoSchema);