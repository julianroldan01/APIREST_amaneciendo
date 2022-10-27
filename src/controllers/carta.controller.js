import { getConnection } from "./../database/database";

const getcarta = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT id_carta, imagen, producto, volumen, valor, id_tipo FROM carta WHERE id_tipo = ?", id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};
const addcarta = async (req, res) => {
    try {
        const { imagen, producto, id_tipo, volumen, valor } = req.body;
        if (producto === undefined || valor === undefined || volumen === undefined) {
            return res.status(400).json({ message: "Bad Request. Please fill all field." });
        }
        const carta = { imagen: `uploads/${req.file.originalname}`, producto, id_tipo, volumen, valor };
        const connection = await getConnection();
        await connection.query("INSERT INTO carta SET ?", carta);
        res.json("carta agregada");
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const deletecarta = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM carta WHERE id_carta = ?", id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};


export const methods = {
    getcarta, addcarta, deletecarta
};