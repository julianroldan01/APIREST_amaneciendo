import express from "express";
import morgan from "morgan";
import cors from "cors";
import cartaroutes from "./routes/carta.routes";
import registroutes from "./routes/registro.routes";
import zonasroutes from "./routes/zonas.routes";
import loginjwtroutes from "./routes/loginjwt.routes";
import multer from "multer";

const FirebaseValidate = require('./middleware/index'); 
const app = express();
// Funcion que permite decirle la carpeta a la cual se guarda  y que nombre sele da al archivo
const storage = multer.diskStorage({
    destination: './src/public/uploads',
    filename: (req, file, cb ) => { cb(null, file.originalname); }
});
// Se le pasa la configuracion a multer
const upload = multer({ storage });

// Settings
app.set("port", 4000);

// Middlewares
app.use(FirebaseValidate.decodeToken);
app.use(express.static(__dirname + '/public'));
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors()); //habilitar otras aplicaciones para realizar solicitudes a nuestra app

// Routes
// Utilizo el multer y referencio el campo con el file
app.use("/api/carta", upload.single("imagen"), cartaroutes);
app.use("/api/registro", registroutes);
app.use("/api/zonas", zonasroutes);
app.use("carta", cartaroutes);
app.use("registro", registroutes);
app.use("/api/loginjwt", loginjwtroutes);

export default app;