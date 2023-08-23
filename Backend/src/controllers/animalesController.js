import * as animalesService from "../services/animalesService.js";

export const getAllAnimals = async (req, res) => {
  try {
    let data = await animalesService.getAllAnimals();
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

export const getAnimalsByEnclosure = async (req, res) => {
  try {
    let data = await animalesService.getAnimalsByEnclosure(
      req.params.recintoID
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

export const getAllAnimalsBySpecie = async (req, res) => {
  try {
    let data = await animalesService.getAllAnimalsBySpecie(
      req.params.especieID
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

export const getAnimalById = async (req, res) => {
  try {
    let data = await animalesService.getAnimalById(req.params.animalID);
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
