export const validateSchema = (schema) => async (req, res, next) => {
  try {
    await schema.validateAsync(req.body);
    next();
  } catch (error) {
    res.status(400).send({
      status: 400,
      errorInfo: {
        message: "ERROR DE VALIDACIÓN EN LOS DATOS DE ENTRADA",
        error: error.message,
      },
    });
  }
};
