import { Router } from "express";
import { methods as zonascontroller } from "../controllers/zonas.controller";
const router=Router();
router.get("/:id", zonascontroller.getzona);
router.get("/:id", zonascontroller.getestanco);

export default router;