import { connDB } from "../db/connectDB.js";

export const getAllActivities = async () => {
  let db = await connDB();
  let collection = db.collection("actividades");
  let data = collection.find().toArray();
  return data;
};
