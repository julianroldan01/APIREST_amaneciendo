import { Router } from "express";
import { methods as cartacontroller } from "../controllers/carta.controller";
const router=Router();

router.get("/:id", cartacontroller.getcarta);
router.post("/", cartacontroller.addcarta);
router.delete("/:id", cartacontroller.deletecarta);
export default router;
