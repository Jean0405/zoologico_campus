import { connDB } from "../db/connectDB.js";

export const getAllAnimals = async () => {
  let db = await connDB();
  let collection = db.collection("animales");
  let data = await collection.find().toArray();
  return data;
};

export const getAnimalsByEnclosure = async (recintoID) => {
  let db = await connDB();
  let collection = db.collection("animales");
  let data = await collection
    .find({ "recinto.ID": Number(recintoID) })
    .toArray();
  return data;
};

export const getAllAnimalsBySpecie = async (especieID) => {
  let db = await connDB();
  let collection = db.collection("animales");
  let data = await collection
    .find({ "especie.ID": Number(especieID) })
    .toArray();
  return data;
};

export const getAnimalById = async (animalID) => {
  let db = await connDB();
  let collection = db.collection("animales");
  let data = await collection.find({ ID: Number(animalID) }).toArray();
  return data;
};

export const postNewAnimal = async (nuevoAnimal) => {
  let db = await connDB();
  let collection = db.collection("animales");
  await collection.insertOne(nuevoAnimal);
  return;
};
