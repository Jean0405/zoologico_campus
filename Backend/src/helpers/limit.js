import { rateLimit } from "express-rate-limit";

export const limitLogin = () =>{
  return rateLimit({
      windowMs: 1* 60 * 1000,
      max: 10,
      standardHeaders: true,
      legacyHeaders: false,
      message: (req,res) =>{
          res.status(429).send({
              status: 429,
              message: "alcanzo el limite de peticiones"
          })
      }
  })
}

export const limitUsuario = ()=>{
  return rateLimit({
      windowMs: 30 * 1000,
      max: 15,
      standardHeaders: true, 
      legacyHeaders: false, 
      message: (req,res)=>{
          res.status(429).send({
              message: "alcanzo el limite de peticiones"
          });
      }
  })    
}