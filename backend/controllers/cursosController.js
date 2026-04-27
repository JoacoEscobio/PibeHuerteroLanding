// backend/controllers/cursosController.js
const db = require('../config/database');

// Función para obtener todos los cursos (GET)
exports.getCursos = async (req, res) => {
    try {
        // Por ahora devolvemos un mensaje de prueba
        // Más adelante acá haremos la consulta a la base de datos (SELECT * FROM cursos)
        res.status(200).json({ message: "¡Acá van a cargar los cursos de la huerta!" });
    } catch (error) {
        console.error("Error al obtener cursos:", error);
        res.status(500).json({ message: "Hubo un error al traer los cursos." });
    }
};

// Función para crear un nuevo curso (POST) - Solo para admins
exports.createCurso = async (req, res) => {
    try {
        // Por ahora devolvemos un mensaje de prueba
        res.status(201).json({ message: "Curso sembrado (creado) con éxito." });
    } catch (error) {
        console.error("Error al crear curso:", error);
        res.status(500).json({ message: "Hubo un error al crear el curso." });
    }
};