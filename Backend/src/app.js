console.clear();
import "dotenv/config";
import express from "express";
import routesVersioning from "express-routes-versioning";
import { server } from "./configuration/serverConfig.js";
import v1Routes from "./v1/index.js";

// Crear la aplicación Express
const app = express();
const version = routesVersioning();
app.use(express.json());

app.use(
  "/",
  version({
    "~1.0.0": v1Routes,
  })
);

// Iniciar el servidor
app.listen(server.PORT, () => {
  console.log(`Server running at http://${server.HOSTNAME}:${server.PORT}`);
});
