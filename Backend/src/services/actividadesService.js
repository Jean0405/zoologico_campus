import { connDB } from "../db/connectDB.js";
import { autoIncrementID } from "../helpers/idAutoIncrement.js";

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

  const currentDate = new Date(fecha);
  currentDate.setUTCHours(0, 0, 0, 0);

  let data = collection.find({ fecha: currentDate }).toArray();
  return data;
};

export const getActivityByClousure = async (recintoID) => {
  let db = await connDB();
  let collection = db.collection("actividades");
  let data = collection.find({ "recinto.ID": Number(recintoID) }).toArray();
  return data;
};

export const postNewActivity = async (nuevaActividad) => {
  const newId = await autoIncrementID("actividades")

  let db = await connDB();
  let collection = db.collection("actividades");

  const fecha = new Date();
  fecha.setUTCHours(0, 0, 0, 0);

  let data = {
    ID: newId,
    ...nuevaActividad,
    fecha,
  };

  await collection.insertOne(data);
  return data;
};
