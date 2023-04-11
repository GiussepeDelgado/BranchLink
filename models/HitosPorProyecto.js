const mongoose = require('mongoose');
const { Schema } = mongoose;

const HitosPorProyectoSchema = new Schema({
  Proyecto: { type: Schema.Types.ObjectId, ref: 'Proyecto' },
  Hito: { type: Schema.Types.ObjectId, ref: 'Hito' },
});

module.exports = mongoose.model('HitosPorProyecto', HitosPorProyectoSchema);
