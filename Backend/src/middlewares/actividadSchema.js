import Joi from "joi";

//ESQUEMA COLECCIÓN DE ACTIVIDADES
export const actividadSchema = Joi.object({
  tipoActividad: Joi.object({
    ID: Joi.number().integer().required(),
    nombre: Joi.string().max(50).required(),
  }),
  recinto: Joi.object({
    ID: Joi.number().integer().required(),
    nombre: Joi.string().max(50).required(),
  }),
  descripcion: Joi.string().max(300).required(),
  empleado: Joi.object({
    numDocumento: Joi.number().required(),
    nombre: Joi.string().max(60).required(),
  }),
});
