console.clear();
import "dotenv/config";
import express from "express";
import { server } from "./configuration/serverConfig.js";
import v1Routes from "./v1/index.js";

// Crear la aplicación Express
const app = express();
app.use(express.json());

// Definir ruta raíz
app.use("/v1", v1Routes);

// Obtener configuración del servidor desde variables de entorno

// Iniciar el servidor
app.listen(server.PORT, () => {
  console.log(`Server running at http://${server.HOSTNAME}:${server.PORT}`);
});
