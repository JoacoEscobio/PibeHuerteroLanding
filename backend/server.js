require("dotenv").config();

const express = require("express");
const cors = require("cors");

const db = require("./config/database");

const authRoutes = require("./routes/authRoutes");
const cursosRoutes = require("./routes/cursosRoutes");
const productosRoutes = require("./routes/productosRoutes");
const serviciosRoutes = require("./routes/serviciosRoutes");

const app = express();

/* ======================
   MIDDLEWARES
====================== */

app.use(cors());
app.use(express.json());

/* ======================
   TEST SERVER
====================== */

app.get("/", (req, res) => {
    res.send("API Pibe Huertero funcionando");
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
        const connection = await db.getConnection();
        console.log("Conectado a MySQL");
        connection.release();
    } catch (error) {
        console.error("Error conectando a MySQL:", error);
    }
}

testDB();

/* ======================
   SERVER
====================== */

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});