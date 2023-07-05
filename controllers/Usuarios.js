const Usuario = require("../models/Usuario");


const agregarUsuario = async (req, res) => {
  const { email } = req.body;

  try {
    
    const usuarioExistente = await Usuario.findOne({ email });

    if (usuarioExistente) {
      return res.status(400).json({ message: 'Ya existe un usuario con ese correo electrónico' });
    }
    const nuevoUsuario = new Usuario(req.body);
    const usuarioCreado = await nuevoUsuario.save();

    res.status(201).json("Se agregó exitosamente el usuario: " + usuarioCreado.names);
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

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    
    const usuario = await Usuario.findOne({ email });
    if (usuario) {  
      if (usuario.password === password) {    
        res.json({ login: 'yes' });
      } else {
        res.json({ login: 'no' });
      }
    } else {
      res.json({ login: 'no' });
    }
  } catch (error) {

    res.status(500).json({ error: 'Ha ocurrido un error en el servidor' });
  }
};

module.exports = { agregarUsuario, obtenerUsuarios, login };


