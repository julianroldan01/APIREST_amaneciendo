import express from "express";
import morgan from "morgan";
import cors from "cors";
// Routes
import cartaroutes from "./routes/carta.routes";
import registroutes from "./routes/registro.routes";
import zonasroutes from "./routes/zonas.routes";
import loginjwtroutes from "./routes/loginjwt.routes";

const app = express();
const jwt = require("jsonwebtoken");

// Settings
app.set("port", 4000);

// Middlewares
app.use(morgan("dev"));
app.use(express.json()); // recibir informacion
app.use(cors()); //habilitar otras aplicaciones para realizar solicitudes a nuestra app 

// Routes
app.use("/api/carta", cartaroutes);
app.use("/api/registro", registroutes);
app.use("/api/zonas", zonasroutes);
app.use("carta", cartaroutes);
app.use("registro", registroutes);
app.use("/api/loginjwt", loginjwtroutes);

export default app;