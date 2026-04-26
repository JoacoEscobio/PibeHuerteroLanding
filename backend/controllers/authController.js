const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../config/database');

// Función para REGISTRAR un nuevo usuario
exports.register = async (req, res) => {
    const { nombre, apellido, email, password } = req.body;

    try {
        // 1. Verificar si el usuario ya existe
        const [existingUsers] = await db.query('SELECT * FROM usuarios WHERE email = ?', [email]);
        if (existingUsers.length > 0) {
            return res.status(400).json({ message: 'El email ya está registrado. Probá iniciando sesión.' });
        }

        // 2. Encriptar la contraseña (hashing)
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // 3. Guardar el usuario en la base de datos
        // Asumo que tu tabla usuarios tiene al menos estos campos
        const [result] = await db.query(
            'INSERT INTO usuarios (nombre, apellido, email, password) VALUES (?, ?, ?, ?)',
            [nombre, apellido, email, hashedPassword]
        );

        res.status(201).json({ message: '¡Usuario sembrado (registrado) con éxito!', userId: result.insertId });

    } catch (error) {
        console.error("Error en registro:", error);
        res.status(500).json({ message: 'Error en el servidor al registrar usuario.' });
    }
};

// Función para INICIAR SESIÓN (Login)
exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        // 1. Buscar al usuario por email
        const [users] = await db.query('SELECT * FROM usuarios WHERE email = ?', [email]);
        if (users.length === 0) {
            return res.status(404).json({ message: 'Usuario no encontrado.' });
        }

        const user = users[0];

        // 2. Comparar la contraseña enviada con la encriptada en la DB
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Contraseña incorrecta.' });
        }

        // 3. Generar el Token (JWT) - el "pase VIP" del usuario
        // Usa una clave secreta desde tu archivo .env
        const token = jwt.sign(
            { id: user.id, email: user.email, rol: user.rol },
            process.env.JWT_SECRET || 'semilla_secreta_pibe_huertero',
            { expiresIn: '24h' } // El token dura 1 día
        );

        res.json({
            message: '¡Bienvenido de nuevo a la huerta!',
            token,
            user: {
                id: user.id,
                nombre: user.nombre,
                email: user.email
            }
        });

    } catch (error) {
        console.error("Error en login:", error);
        res.status(500).json({ message: 'Error en el servidor al iniciar sesión.' });
    }
};