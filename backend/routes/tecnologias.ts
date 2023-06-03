import { Router } from "express";
import { deleteTecnologia, getTecnologia, getTecnologiaId, postTecnologia, putTecnologia } from "../controllers/tecnologias.controller";

const tecnologiaRouter = Router();

tecnologiaRouter.get('/',getTecnologia);
tecnologiaRouter.get('/:id',getTecnologiaId);
tecnologiaRouter.post('/',postTecnologia);
tecnologiaRouter.put('/:id',putTecnologia);
tecnologiaRouter.delete('/:id',deleteTecnologia);

export default tecnologiaRouter;