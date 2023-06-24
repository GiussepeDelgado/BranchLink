const Usuario = require("../models/Usuario");


const agregarUsuario = async (req, res) => {
    const nuevoUsuario = new Usuario(req.body);
    try {
      const usuarioCreado = await nuevoUsuario.save();
      res.status(201).json("Se agregó existosamente el usuario :"+usuarioCreado.Nombre);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
};


const obtenerUsuarios = async (req, res) => {
    try {
      const usuarios = await Usuario.find({});
      res.status(200).json(usuarios);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
};

module.exports = {agregarUsuario, obtenerUsuarios};


