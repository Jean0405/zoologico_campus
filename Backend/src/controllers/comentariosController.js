import * as comentariosService from "../services/comentariosService.js";

export const getAllComments = async (req, res) => {
  try {
    let data = await comentariosService.getAllComments();
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

export const getCommentByVisitorId = async (req, res) => {
  try {
    let data = await comentariosService.getCommentByVisitorId(
      req.params.visitanteID
    );
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

export const getCommentById = async (req, res) => {
  try {
    let data = await comentariosService.getCommentById(req.params.comentarioID);

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

export const getCommentByDate = async (req, res) => {
  try {
    let data = await comentariosService.getCommentByDate(req.params.fecha);
    console.log(req.params.fecha);

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

export const getMostPopularAnimalsByDays = async (req, res) => {
  try {
    let data = await comentariosService.getMostPopularAnimalsByDays(
      req.params.nDias
    );
    res.status(200).send({
      status: 200,
      message: "DATOS OBTENIDOS CORRECTAMENTE",
      data,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: 500,
      errorInfo: {
        message: "ERROR AL OBTENER LOS DATOS",
        error: error.message,
      },
    });
  }
};

export const postNewComment = async (req, res) => {
  try {
    let data = await comentariosService.postNewComment(req.body);
    res.status(200).send({
      status: 200,
      message: "DATOS GUARDADOS CORRECTAMENTE",
      data,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: 500,
      errorInfo: {
        message: "ERROR AL GUARDAR LOS DATOS",
        error: error.message,
      },
    });
  }
};
