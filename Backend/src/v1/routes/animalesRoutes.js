import { Router } from "express";

const v1Animals = Router();

v1Animals.get("/", animalsController.getAllAnimals);
export default v1Animals;
