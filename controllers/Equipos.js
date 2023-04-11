const Equipo = require('../models/Equipo');
const Proyecto = require('../models/Proyecto');

// Obtener equipos de un proyecto
const obtenerEquiposProyecto = async (req, res) => {
  try {
    // Validar existencia del proyecto
    const proyecto = await Proyecto.findById(req.params.id);
    if (!proyecto) {
      return res.status(404).json({ mensaje: 'Proyecto no encontrado' });
    }

    // Obtener equipos del proyecto
    const equipos = await Equipo.find({ proyecto: req.params.id });

    res.status(200).json(equipos);
  } catch (error) {
    console.log(error);
    res.status(500).json({ mensaje: 'Hubo un error al obtener los equipos' });
  }
};

// Crear un equipo en un proyecto
const crearEquipoProyecto = async (req, res) => {
  try {
    // Validar existencia del proyecto
    const proyecto = await Proyecto.findById(req.params.id);
    if (!proyecto) {
      return res.status(404).json({ mensaje: 'Proyecto no encontrado' });
    }

    // Crear equipo
    const equipo = new Equipo(req.body);
    equipo.Proyecto = proyecto._id;

    await equipo.save();

    res.status(201).json(equipo);
  } catch (error) {
    console.log(error);
    res.status(500).json({ mensaje: 'Hubo un error al crear el equipo' });
  }
};

// Actualizar un equipo
const actualizarEquipo = async (req, res) => {
  try {
    const { id } = req.params;

    // Validar existencia del equipo
    const equipo = await Equipo.findById(id);
    if (!equipo) {
      return res.status(404).json({ mensaje: 'Equipo no encontrado' });
    }

    // Actualizar equipo
    const nuevoEquipo = req.body;
    nuevoEquipo.proyecto = equipo.proyecto;

    await Equipo.findByIdAndUpdate(id, nuevoEquipo, { new: true });

    res.status(200).json({ mensaje: 'Equipo actualizado correctamente' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ mensaje: 'Hubo un error al actualizar el equipo' });
  }
};

// Eliminar un equipo
const eliminarEquipo = async (req, res) => {
  try {
    const { id } = req.params;

    // Validar existencia del equipo
    const equipo = await Equipo.findById(id);
    if (!equipo) {
      return res.status(404).json({ mensaje: 'Equipo no encontrado' });
    }

    await Equipo.findByIdAndDelete(id);

    res.status(201).json({ mensaje: 'Equipo eliminado correctamente' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ mensaje: 'Hubo un error al eliminar el equipo' });
  }
};

module.exports = {obtenerEquiposProyecto,crearEquipoProyecto,actualizarEquipo,eliminarEquipo};