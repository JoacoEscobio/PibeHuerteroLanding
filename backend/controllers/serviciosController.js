const db = require('../config/database');

// Función para obtener todos los servicios (GET)
exports.getServicios = async (req, res) => {
    try {
        // Cuando tengas tu tabla 'servicios' en MySQL, descomentá estas dos líneas:
        // const [servicios] = await db.query('SELECT * FROM servicios');
        // return res.status(200).json(servicios);

        // Mensaje temporal de prueba
        res.status(200).json({ message: "¡Acá van a cargar los servicios para escuelas y empresas!" });
    } catch (error) {
        console.error("Error al obtener servicios:", error);
        res.status(500).json({ message: "Hubo un error al traer los servicios." });
    }
};

// Función para crear un nuevo servicio (POST)
exports.createServicio = async (req, res) => {
    try {
        // Lógica futura para hacer un INSERT INTO servicios
        res.status(201).json({ message: "Servicio creado con éxito." });
    } catch (error) {
        console.error("Error al crear servicio:", error);
        res.status(500).json({ message: "Hubo un error al crear el servicio." });
    }
};