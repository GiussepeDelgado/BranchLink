const Proyecto = require("../models/Proyecto");


const crearProyecto = async (req, res) => {
    const nuevoProyecto = new Proyecto(req.body);
    try {
      const proyectoCreado = await nuevoProyecto.save();
      res.status(201).json("Se agregó existosamente el proyecto :"+proyectoCreado.Nombre);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
};

const obtenerProyectos = async (req, res) => {
    try {
      const proyectos = await Proyecto.find({});
      res.status(200).json(proyectos);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
};

const actualizarProyecto = async (req, res) => {
    const { id } = req.params;
    const datosActualizados = req.body;
    try {
      const proyectoActualizado = await Proyecto.findByIdAndUpdate(
        id,
        datosActualizados,
        { new: true }
      );
      res.status(200).json(proyectoActualizado);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
};

const eliminarProyecto = async (req, res) => {
    const { id } = req.params;  
    try {
      const proyectoEliminado = await Proyecto.findByIdAndDelete(id);
      res.status(200).json(proyectoEliminado);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
};

module.exports = {crearProyecto,obtenerProyectos,actualizarProyecto,eliminarProyecto};