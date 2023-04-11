const mongoose = require('mongoose');
const { Schema } = mongoose;

const MilestoneSchema = new Schema({
  Nombre: String,
  Descripcion: String,
  Fecha: Date,
  Proyecto: { type: Schema.Types.ObjectId, ref: 'Proyecto' },
});

module.exports = mongoose.model('Milestone', MilestoneSchema);