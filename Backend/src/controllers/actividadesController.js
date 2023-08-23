import * as actividadesService from "../services/actividadesService.js";

export const getAllActivities = async (req, res) => {
  try {
    let data = await actividadesService.getAllActivities();
    res.status(200).send({
      status: 200,
      message: "DATOS OBTENIDOS CORRECTAMENTE",
      data,
    });
  } catch (error) {
    res.status(500).send({
      status: 500,
      errorInfo: {
        message: "ERROR AL OBTENER LOS DATOS",
        error: error.message,
      },
    });
  }
};
