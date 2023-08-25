import * as empleadosService from "../services/empleadosService.js";

export const getAllemployees = async (req, res) => {
  try {
    let data = await empleadosService.getAllEmployees();
    res
      .status(200)
      .send({ status: 200, message: "DATOS OBTENIDOS CORRECTAMENTE", data });
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

export const getEmployeesByRole = async (req, res) => {
  try {
    let data = await empleadosService.getEmployeesByRole(
      req.params.cargoNombre
    );
    res
      .status(200)
      .send({ status: 200, message: "DATOS OBTENIDOS CORRECTAMENTE", data });
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

export const getEmployeeById = async (req, res) => {
  try {
    let data = await empleadosService.getEmployeeById(req.params.empleadoID);
    if (!data[0])
      res.status(404).send({
        status: 404,
        message: "EMPLEADO NO ENCONTRADO",
        search_parameter: Number(req.params.empleadoID),
      });

    res
      .status(200)
      .send({ status: 200, message: "DATOS OBTENIDOS CORRECTAMENTE", data });
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
