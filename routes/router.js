const express = require('express');
const router = express.Router();
const { crearProyecto, obtenerProyectos, actualizarProyecto, eliminarProyecto } = require('../controllers/Proyectos');
const { obtenerEquiposProyecto,crearEquipoProyecto,actualizarEquipo,eliminarEquipo } = require('../controllers/Equipos');

router.get('/', obtenerProyectos);
// Rutas para operaciones CRUD en la colección "Proyectos"
router.post('/proyectos', crearProyecto); // Crear un nuevo proyecto
router.get('/proyectos', obtenerProyectos); // Obtener todos los proyectos
router.put('/proyectos/:id', actualizarProyecto); // Actualizar un proyecto por ID
router.delete('/proyectos/:id', eliminarProyecto); // Eliminar un proyecto por ID


// Rutas para operaciones CRUD en la colección "Equipos"
router.post('/equipos/proyecto/:id', obtenerEquiposProyecto); // Crear un nuevo equipo
router.get('/equipos/proyecto/:id', crearEquipoProyecto); // Obtener todos los equipos
router.put('/equipos/:id', actualizarEquipo); // Actualizar un equipo por ID
router.delete('/equipos/:id', eliminarEquipo); // Eliminar un equipo por ID

module.exports = router;