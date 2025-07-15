import { Router } from "express";
import signUp from "../controller/user.js";

const router = Router();
router.get("/signup",signUp)

export default router;