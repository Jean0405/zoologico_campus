import Joi from "joi";

//ESQUEMA COLECCIÓN DE COMENTARIOS
export const comentarioSchema = Joi.object({
  especieDestacado: Joi.object({
    ID: Joi.number().integer().required(),
    nombre: Joi.string().max(30).required(),
  }),
  contenido: Joi.string().max(100),
  calificacion: Joi.number().integer().min(1).max(5).required(),
  visitante: Joi.object({
    numDocumento: Joi.number().integer().required(),
    nombre: Joi.string().max(60).required(),
  }),
});
