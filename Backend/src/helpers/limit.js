import { rateLimit } from "express-rate-limit";

export const limitLogin = () =>{
  return rateLimit({
      windowMs: 1* 60 * 1000,
      max: 5,
      standardHeaders: true,
      legacyHeaders: false,
      message: (req,res) =>{
          res.status(429).send({
              status: 429,
              message: "Se alcanzo el limite de intentos para poder iniciar session"
          })
      }
  })
}

export const limitPeticiones = ()=>{
  return rateLimit({
      windowMs: 30 * 1000,
      max: 15,
      standardHeaders: true, 
      legacyHeaders: false, 
      message: (req,res)=>{
          res.status(429).send({
              message: "Se alcanzo el limite de peticiones"
          });
      }
  })    
}