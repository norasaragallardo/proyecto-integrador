import { NextFunction, Request, Response } from 'express';
import Usuarios from '../models/usuarios';
import { usuarioSchema } from '../validate/usuarioSchema';
import { type } from 'os';
import bcryptjs from 'bcryptjs';


export const getUsuarios = async (req: Request, res: Response) => {

    const users = await Usuarios.findAll();
  
    res.json({
        msg: 'getusuarios',
        users
    })
  }

 

  export const getUsuarioId = async (req: Request, res: Response) => {

    const { id } = req.params;
  
    const user = await Usuarios.findByPk(id);
  
    if(user){
      res.json({
        msg: 'getusuarios',
        id,
        user
      })
    }else{
      res.status(404).json({
        msg: 'el usuario no existe',
      })
    }
  }


  export const postUsuarios = async (req: Request, res: Response, next: NextFunction) => {

    try {
      const { body } = req;
    const filename = req.file?.filename;
  

    body.foto = filename;
    
    await usuarioSchema.validate(body)

    const salt = bcryptjs.genSaltSync();
    body.contrasenia = bcryptjs.hashSync(body.contrasenia, salt)

    const result = await Usuarios.create(body);
    res.status(201).json({
      success: true,
      message: "usuario creado correctamente",
      data: result,
    });
    } catch (error: any) {
      next(error);
      //return res.status(500).json({ type: error.name , message : error.message} )
    }
    
  };


  export const deleteUsuario = async (req: Request, res: Response) => {
    const { id } = req.params;
    await Usuarios.destroy({ 
      where: {
        idusuario: id
      }
    });
  
    res.json({
        msg: 'el usuario fue eliminado correctamente',
        id
    })
  }

  export const putUsuario = async (req: Request, res: Response) => {
    console.log('soy el req',req);
    
    const { id } = req.params;
    const { body } = req;
  
    /*const filename = req.file?.filename;
    
    body.idrol = 1;
    body.foto = filename;
  
    await usuarioSchemaActualizar.validate(body);*/
    console.log('-------:',req.file)
    if(req.file){
      const filename = req.file?.filename;
      body.foto = filename;
    }
    
    
    const usuarioActualizado = Usuarios.update(body, {
      where: {
        idusuario: id
      }
    });
  
    res.json({
        msg: 'el usuario fue editado correctamente',
        body,
        id,
        usuarioActualizado
    })
  }
  



// export const postUsuario = async (req: Request, res: Response){

//   const{body} = req;
//   const result = await Usuarios.create(body);
//   res.status(201).json({
//     success: true,
//     message: "usuario creado correctamente"
//    // data: result,
//   })
// }