import { SignJWT, jwtVerify } from "jose";

export const generateToken = async (info) => {
  let infoToken = {
    ID: info[0].numDocumento,
    nombre: info[0].nombre,
    cargo: info[0].cargo.nombre,
    permisos: info[0].cargo.permisos,
  };

  const encoder = new TextEncoder();
  const jwt = await new SignJWT(infoToken)
    .setProtectedHeader({
      alg: "HS256",
      typ: "JWT",
    })
    .setIssuedAt()
    .setExpirationTime("3h")
    .sign(encoder.encode(process.env.PRIVATE_KEY));

  return jwt;
};

export const validateToken = async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization)
    return res.status(401).send({ token: "NON-EXISTENT OR EXPIRED TOKEN" });
  try {
    const encoder = new TextEncoder();
    req.auth = await jwtVerify(
      authorization,
      encoder.encode(process.env.PRIVATE_KEY)
    );
    next();
  } catch (error) {
    res.status(401).send({
      status: 401,
      errorInfo: { message: "Error de validación", error: error },
    });
  }
};
