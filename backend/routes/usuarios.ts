import { Router } from "express";
import { deleteUsuario, getUsuarioId, getUsuarios, postUsuarios, putUsuario } from "../controllers/usuarios.controller";
import multer from "multer";
import { UUIDV4 } from "sequelize";
import { randomUUID } from "crypto";
import upload from "../utils/multer";
import validarJWT from "../utils/validarJWT";



// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, 'uploads/')
//     },
//     filename: function (req, file, cb) {
//       const randomName = UUIDV4();

//       cb(null, `${randomName}.${file.mimetype.split("/")[1]}`)
//     }
//   })
// const upload = multer({storage: storage})

const usuariosRouter = Router();

usuariosRouter.get('/',validarJWT, getUsuarios);
usuariosRouter.get('/:id', getUsuarioId);
usuariosRouter.post('/', upload.single('file'), postUsuarios);
usuariosRouter.delete('/:id', deleteUsuario);
usuariosRouter.put('/:id', upload.single('file'), putUsuario);


export default usuariosRouter;