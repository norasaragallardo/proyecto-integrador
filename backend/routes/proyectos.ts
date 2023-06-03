import { Router } from "express";
import { deleteProyectos, getProyectos, getProyectosId, postProyectos, putProyectos } from "../controllers/proyecto.controller";
import upload from "../utils/multer";

const proyectoRouter = Router();

proyectoRouter.get('/',getProyectos);
proyectoRouter.get('/:id',getProyectosId);
proyectoRouter.post('/',upload.single('file'),postProyectos);
proyectoRouter.put('/:id',putProyectos);
proyectoRouter.delete('/:id',deleteProyectos);

export default proyectoRouter;