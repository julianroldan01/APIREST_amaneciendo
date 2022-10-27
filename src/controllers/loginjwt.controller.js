import { getConnection } from "./../database/database";
const jwt = require("jsonwebtoken");

const login = async (req, res) => { // el usuario se registra en el login
  const connection = await getConnection();
  const user = await connection.query("SELECT email, contrasena, nombre FROM persona WHERE id = 18");
  jwt.sign({ user: user }, 'llave secreta', (err, token) => { // crea token para identificar el usuario que se encuentra logeado
    res.json({
      token
    });
  });
};

const verifycation = async (req, res) => {
  jwt.verify(req.token, 'llave secreta', (error, authData) => {
    if (error) {
      res.sendStatus(403);
    } else {
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