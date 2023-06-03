import { Router } from "express";
import { login, logout, validateToken } from "../controllers/auth.controller";
import validarJWT from "../utils/validarJWT";

const authRouter = Router();
authRouter.post('/login', login);
authRouter.post('/logout', validarJWT, logout);
authRouter.post('/validate-token', validarJWT, validateToken);

export default authRouter;

