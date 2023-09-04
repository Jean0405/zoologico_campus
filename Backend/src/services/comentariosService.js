import { connDB } from "../db/connectDB.js";
import { autoIncrementID } from "../helpers/idAutoIncrement.js";

export const getMostPopularAnimalsByDays = async (nDias) => {
  let db = await connDB();
  let collection = db.collection("comentarios");

  // Obtener la fecha nDias días antes a la actual
  const rangoFecha = new Date();
  rangoFecha.setDate(rangoFecha.getDate() - Number(nDias));

  let data = await collection
    .aggregate([
      {
        //Indicamos que busque los comentarios de los ultimos nDias días
        $match: {
          fecha: { $gte: rangoFecha },
        },
      },
      {
        //Agrupamos por los elementos que deseamos mostrar y los calculos que se harán
        $group: {
          _id: "$especieDestacado.nombre",
          promedioCalificacion: { $avg: "$calificacion" },
          totalComentarios: { $sum: 1 },
        },
      },
      {
        $sort: { promedioCalificacion: -1 },
      },
    ])
    .toArray();
  return data;
};

export const getAllComments = async () => {
  let db = await connDB();
  let collection = db.collection("comentarios");
  let data = await collection.find().toArray();
  return data;
};

export const getCommentById = async (comentarioID) => {
  let db = await connDB();
  let collection = db.collection("comentarios");
  let data = await collection.find({ ID: Number(comentarioID) }).toArray();
  return data;
};

export const getCommentByVisitorId = async (visitanteID) => {
  let db = await connDB();
  let collection = db.collection("comentarios");
  let data = await collection
    .find({ "visitante.numDocumento": Number(visitanteID) })
    .toArray();
  return data;
};

export const getCommentByDate = async (fecha) => {
  let db = await connDB();
  let collection = db.collection("comentarios");

  let currentDate = new Date(fecha);
  currentDate.setUTCHours(0, 0, 0, 0);

  let data = await collection.find({ fecha: currentDate }).toArray();
  return data;
};

export const postNewComment = async (nuevoComentario) => {
  const newId = await autoIncrementID("comentarios")
  
  let db = await connDB();
  let collection = db.collection("comentarios");

  let fecha = new Date();
  fecha.setUTCHours(0, 0, 0, 0);

  let data = {
    ID: newId,
    ...nuevoComentario,
    fecha: fecha,
  };

  await collection.insertOne(data);
  return data;
};
