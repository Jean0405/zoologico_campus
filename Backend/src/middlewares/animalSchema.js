import Joi from "joi";
//ESQUEMA COLECCIÓN DE ANIMALES
export const animalSchema = Joi.object({
  especie: Joi.object({
    ID: Joi.number().integer().required(),
    nombre: Joi.string().max(50).required(),
  }),
  nombre: Joi.string().max(50),
  edad: Joi.number().integer().required(),
  recinto: Joi.object({
    ID: Joi.number().integer().required(),
    nombre: Joi.string().max(50),
  }),
  tipoAlimentacion: Joi.string()
    .valid("carnívoro", "herbívoro", "omnívoro")
    .required(),
});
