import "dotenv/config";

export const server = {
  PORT: process.env.PORT || 3300,
  HOSTNAME: process.env.HOST || "127.25.25.27",
};

export const database = {
  USER: process.env.USERS,
  PASSWORD: process.env.PASSWORD,
  DB: process.env.DB,
};
