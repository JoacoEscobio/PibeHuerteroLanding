require("dotenv").config();

const express = require("express");
const cors = require("cors");

const db = require("./config/database");

// Importación de las Rutas
const authRoutes = require("./routes/authRoutes");
const cursosRoutes = require("./routes/cursosRoutes");
const productosRoutes = require("./routes/productosRoutes");
const serviciosRoutes = require("./routes/serviciosRoutes");

const app = express();

/* ======================
   MIDDLEWARES
====================== */
app.use(cors()); // Permite que el Frontend se comunique con el Backend
app.use(express.json()); // Permite leer los datos JSON que mandamos desde los formularios

/* ======================
   TEST SERVER
====================== */
app.get("/", (req, res) => {
    res.send("🌱 API Pibe Huertero funcionando y regada 🌱");
});

/* ======================
   RUTAS API
====================== */
app.use("/api/auth", authRoutes);
app.use("/api/cursos", cursosRoutes);
app.use("/api/productos", productosRoutes);
app.use("/api/servicios", serviciosRoutes);

/* ======================
   TEST CONEXION DB
====================== */
async function testDB() {
    try {
        // Probamos si la base de datos responde
        const connection = await db.getConnection();
        console.log("✅ Conectado exitosamente a la base de datos MySQL (La Tierra está lista)");
        connection.release(); // Soltamos la conexión para que no consuma memoria
    } catch (error) {
        console.error("❌ Error conectando a MySQL:", error);
    }
}

testDB();

/* ======================
   SERVER LISTEN
====================== */
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});