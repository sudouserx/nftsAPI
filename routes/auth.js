import { Router } from "express"
import { createLoginToken } from "../controllers/auth"

const authRouter = Router();

authRouter.post("/", createLoginToken);

export default authRouter;