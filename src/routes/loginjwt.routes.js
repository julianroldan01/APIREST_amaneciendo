import { Router } from "express";
import { methods as loginjwtcontroller } from "../controllers/loginjwt.controller";
import { verifyToken } from '../helpers/jwt'
const router = Router();

router.post("/", loginjwtcontroller.login);
router.post("/verify", verifyToken, loginjwtcontroller.verifycation);

export default router;
