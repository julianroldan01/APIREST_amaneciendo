import { getConnection } from "./../database/database";

const getregistro = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM persona");
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const addregister = async (req, res) => {
    try {
        const { nombre, direccion, email, contrasena, telefono, id_rol } = req.body;
        console.log(req.body)
        if (nombre === undefined || direccion === undefined || email === undefined || contrasena === undefined || telefono === undefined) {
            return res.status(400).json({ message: "Porfavor llene todos los campos" });
        }
        const persona = { nombre, direccion, email, contrasena, telefono, id_rol };
        const connection = await getConnection();
        await connection.query("INSERT INTO persona SET ?", persona);
        return res.json({ message: "Usuario agregado" });
    } catch (error) {
        console.log(error);
        return res.status(500).send(error.message);
    }
};


export const methods = {
    getregistro, addregister
};