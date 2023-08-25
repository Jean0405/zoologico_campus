import { Router } from "express";
import * as animalesController from "../../controllers/animalesController.js";

const v1Animales = Router();

v1Animales
  .get("/", animalesController.getAllAnimals)
  .get("/recinto/:recintoID", animalesController.getAnimalsByEnclosure)
  .get("/especie/:especieID", animalesController.getAllAnimalsBySpecie)
  .get("/:animalID", animalesController.getAnimalById)
  .post("/", animalesController.postNewAnimal);

export default v1Animales;
