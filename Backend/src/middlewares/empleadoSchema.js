import Joi from "joi";

//ESQUEMA COLECCIÓN DE EMPLEADOS
export const empleadoSchema = Joi.object({
  numDocumento: Joi.number().integer().required(),
  nombre: Joi.string().max(60).required(),
  cargo: Joi.object({
    nombre: Joi.string().max(50).required(),
    permisos: Joi.array().items(
      Joi.string().valid("animales", "actividades", "empleados", "*")
    ),
  }),
  telefono: Joi.string().pattern(/^\d+$/).required(),
  email: Joi.string().email().max(60).required(),
  password: Joi.string().max(20).required(),
});
