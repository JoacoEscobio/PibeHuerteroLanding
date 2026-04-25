const express = require("express");
const router = express.Router();

const cursosController = require("../controllers/cursosController");
const verifyToken = require("../middleware/authMiddleware");

router.get("/", cursosController.getCursos);

router.post("/", verifyToken, cursosController.createCurso);

module.exports = router;