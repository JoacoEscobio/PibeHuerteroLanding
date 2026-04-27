const db = require('../config/database');

// Función para obtener todos los productos (GET)
exports.getProductos = async (req, res) => {
    try {
        // Cuando tengas tu tabla 'productos' en MySQL, descomentá estas dos líneas:
        // const [productos] = await db.query('SELECT * FROM productos');
        // return res.status(200).json(productos);

        // Mensaje temporal de prueba
        res.status(200).json({ message: "¡Acá van a cargar los productos (semillas, composteras, etc)!" });
    } catch (error) {
        console.error("Error al obtener productos:", error);
        res.status(500).json({ message: "Hubo un error al traer los productos." });
    }
};

// Función para crear un nuevo producto (POST) - Ideal para cuando armemos el panel de Admin
exports.createProducto = async (req, res) => {
    try {
        // Lógica futura para hacer un INSERT INTO productos
        res.status(201).json({ message: "Producto agregado al inventario con éxito." });
    } catch (error) {
        console.error("Error al crear producto:", error);
        res.status(500).json({ message: "Hubo un error al crear el producto." });
    }
};