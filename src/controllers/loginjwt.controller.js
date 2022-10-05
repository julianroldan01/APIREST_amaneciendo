import { token } from "morgan";
import { getConnection } from "./../database/database";

const jwt = require("jsonwebtoken");

const login = async (req, res) => { // el usuario se registra en el login
    const user = {
      id:1,
      nombre:"Jose",
      email: "jose@gmail.com"
    }
  jwt.sign({user:user}, 'llave secreta',(err,token) => { // crea token para identificar el usuario que se encuentra logeado
      res.json({
          token
      });
  });
  };

const verifycation = async (req,res) => {
  jwt.verify(req.token, 'llave secreta', (error, authData) => {
    if (error){
        res.sendStatus(403);
    }else {
        res.json({
            mensaje: "Post fue creado",
            authData
        })
    }
  })
}

  
  export const methods = {
     login, verifycation
  };