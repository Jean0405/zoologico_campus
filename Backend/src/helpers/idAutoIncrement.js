import { connDB } from "../db/connectDB.js";

export async function autoIncrementID(coleccion) {
let db = await connDB();
let collection = db.collection("contadores");
const sequenceDocument = await collection.findOneAndUpdate(
{ ID: `${coleccion}Id` },
{ $inc: { sequence_value: 1 } },
{ returnDocument: "after" }
);
return sequenceDocument.value.sequence_value;
}