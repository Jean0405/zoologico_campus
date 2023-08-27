import { connDB } from "../db/connectDB.js";
import { generateToken } from "../jwt/tokens.js";

export const logIn = async (info) => {
  let db = await connDB();
  let collection = db.collection("empleado");

  let resultado = await collection
    .find({ email: info.email, password: info.password })
    .toArray();

  console.log(resultado);
  if (!resultado[0]) throw new Error("Empleado no está registrado");

  let data = generateToken(resultado);
  return data;
};
