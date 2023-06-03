import { Router } from "express";
import { deleteExperiencia, getExperiencia, getExperienciaId, postExperiencia, putExperiencia } from "../controllers/experiencia_laboral.controller";

const experienciaRouter = Router();

experienciaRouter.get('/',getExperiencia);
experienciaRouter.get('/:id',getExperienciaId);
experienciaRouter.post('/',postExperiencia);
experienciaRouter.put('/:id',putExperiencia);
experienciaRouter.delete('/:id',deleteExperiencia);

export default experienciaRouter;