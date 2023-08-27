import * as authService from "../services/authService.js";

export const logIn = async (req, res) => {
  try {
    let data = await authService.logIn(req.body);
    res.status(200).send({
      status: 200,
      message: "TOKEN CREADO CORRECTAMENTE",
      data,
    });
  } catch (error) {
    res.status(500).send({
      status: 500,
      errorInfo: {
        message: "ERROR AL CREAR EL TOKEN",
        error: error.message,
      },
    });
  }
};
