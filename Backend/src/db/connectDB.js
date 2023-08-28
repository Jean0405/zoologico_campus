import "dotenv/config";
import { database } from "../configuration/serverConfig.js";
import { MongoClient } from "mongodb";

// const URI = `mongodb+srv://${CONFIG.user}:${CONFIG.password}@practica.4b4nkjj.mongodb.net/${CONFIG.db}`;
//mongodb+srv://${my_conexion.user}:${my_conexion.password}@cluster0.oj8cvn0.mongodb.net/
const URI = `mongodb+srv://${database.USER}:${database.PASSWORD}@practica.4b4nkjj.mongodb.net/${database.DB}?retryWrites=true&w=majority`;
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
