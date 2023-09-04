export const validatePermissions =
  (requiredPermission) => async (req, res, next) => {
    const permission = req.auth.payload.permisos;

    if (!permission.includes("*")) {
      if (!permission.includes(requiredPermission))
        return res.send({ status: 401, message: "No tienes autorización" });
    }
    next();
  };
