import { connDB } from "../db/connectDB.js";

export const getAllEmployees = async () => {
  let db = await connDB();
  let collection = db.collection("empleado");
  let data = await collection.find().toArray();
  return data;
};

export const getEmployeesByRole = async (cargoNombre) => {
  let db = await connDB();
  let collection = db.collection("empleado");
  const parameter = cargoNombre.toLowerCase();
  let data = await collection.find({ "cargo.nombre": parameter }).toArray();
  return data;
};

export const getEmployeeById = async (empleadoID) => {
  let db = await connDB();
  let collection = db.collection("empleado");
  let data = await collection
    .find({ numDocumento: Number(empleadoID) })
    .toArray();

  return data;
};
