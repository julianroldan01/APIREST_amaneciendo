import { Router } from "express";
import { methods as registrocontroller } from "../controllers/registro.controller";
const router=Router();
router.get("/", registrocontroller.getregistro);
router.post("/", registrocontroller.addregister);


export default router;