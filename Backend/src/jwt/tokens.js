import { SignJWT, jwtVerify } from "jose";

export const generateToken = async (info) => {
  // const { ID, role } = result[0];
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
