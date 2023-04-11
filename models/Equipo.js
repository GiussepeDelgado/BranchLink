const mongoose = require('mongoose');
const { Schema } = mongoose;

const EquipoSchema = new Schema({
  Nombre: String,
  Descripcion: String,
  Proyecto: { type: Schema.Types.ObjectId, ref: 'Proyecto' },
});

module.exports = mongoose.model('Equipo', EquipoSchema);