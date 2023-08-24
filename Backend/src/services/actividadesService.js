import { connDB } from "../db/connectDB.js";

export const getAllActivities = async () => {
  let db = await connDB();
  let collection = db.collection("actividades");
  let data = collection.find().toArray();
  return data;
};

export const getActivitiesByType = async (tipoID) => {
  let db = await connDB();
  let collection = db.collection("actividades");
  let data = collection.find({ "tipoActividad.ID": tipoID }).toArray();
  return data;
};

export const getActivitiesByDate = async (fecha) => {
  let db = await connDB();
  let collection = db.collection("actividades");
  let data = collection.find({ fecha: new Date(fecha) }).toArray();
  return data;
};

export const getActivityByClousure = async (recintoID) => {
  let db = await connDB();
  let collection = db.collection("actividades");
  let data = collection.find({ "recinto.ID": Number(recintoID) }).toArray();
  return data;
};
