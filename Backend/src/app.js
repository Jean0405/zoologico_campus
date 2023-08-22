console.clear();
import dotenv from "dotenv";
import express from "express";

// Cargar variables de entorno
dotenv.config();

// Crear la aplicación Express
const app = express();
app.use(express.json());

// Definir ruta raíz
app.get("/", (req, res) => {
  res.send("xdd");
});

// Obtener configuración del servidor desde variables de entorno
const hostname = process.env.SERVER.HOSTNAME || "localhost";
const port = process.env.SERVER.PORT || 3000;

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});
