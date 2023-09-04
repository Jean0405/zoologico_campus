import "dotenv/config";
import { database } from "../configuration/serverConfig.js";
import { MongoClient } from "mongodb";

//DEBES PONER EL LINK DE TU DB Y CAMBIAR LAS CONFIGURACIONES DE ELLA
//USA ESTE EJEMPLO --> mongodb+srv://${database.USER}:${database.PASSWORD}@practica.4b4nkjj.mongodb.net/${database.DB}?retryWrites=true&w=majority

const URI = `mongodb+srv://${database.USER}:${database.PASSWORD}@practica.4b4nkjj.mongodb.net/${database.DB}`;
const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

export async function connDB() {
  const client = new MongoClient(URI, OPTIONS);
  try {
    await client.connect();
    const db = client.db();
    return db;
  } catch (error) {
    throw new Error({ message: "CONEXIÓN RECHAZADA", error: error.message });
  }
}
