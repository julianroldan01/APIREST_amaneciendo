import {getConnection} from "./../database/database";

const getzona= async (req,res) =>{
    try{
    console.log(req.params);
    const { id } = req.params
    const connection = await getConnection();
    const result = await connection.query("SELECT id_zona, tipo_zona, latitud, logitud, latitudelta, logintudelta FROM zona WHERE id_zona = ?", id);
    res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
};

const getestanco = async (req,res) =>{
    try {
        console.log(req.params);
        const { id } = req.params
        const connection = await getConnection();
        const result = await connection.query("SELECT * from estanco WHERE id_zona = ?", id);
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
};

export const methods = {
   getzona, getestanco
};