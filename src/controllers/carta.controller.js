import {getConnection} from "./../database/database";

const getcarta= async (req,res) =>{
    try{
    const { id } = req.params; 
    console.log(req.body)
    const connection = await getConnection();
    const result = await connection.query("SELECT imagen, producto, volumen, valor, id_tipo FROM carta WHERE id_tipo = ?", id);
    console.log(result);
    res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message); 
    }
};
const addcarta=async (req,res) =>{
    try{
    const {imagen, producto, tipo, volumen, valor} = req.body;
    if (producto === undefined || valor === undefined || volumen === undefined){
        res.status(400).json({ message: "Bad Request. Please fill all field."});
    }
    const carta={imagen,producto,tipo,volumen,valor};
    const connection = await getConnection();     
    await connection.query("INSERT INTO carta SET ?", carta);
    res.json("carta agregada");
    

    }catch(error){
        res.status(500);
        res.send(error.message);
    }
};

const deletecarta= async (req,res) =>{
    try{
    const { id } = req.params;      
    const connection = await getConnection();
    const result = await connection.query("DELETE FROM carta WHERE id_carta = ?", id);
    res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
};


export const methods = {
    getcarta, addcarta, deletecarta
};