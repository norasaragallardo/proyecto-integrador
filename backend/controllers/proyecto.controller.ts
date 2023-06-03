import Proyectos from '../models/proyectos';
import { NextFunction, Request, Response } from 'express';
import { usuarioSchema } from '../validate/usuarioSchema';

export const getProyectos = async(req: Request, res: Response) => {
    const proyectos = await Proyectos.findAll(); 
    res.json({
        msg: 'getProyectos',
        proyectos
    })
};
export const getProyectosId = async (req: Request, res: Response) => {

    const { id } = req.params;
    console.log(id);
    
  
    const proyectoId = await Proyectos.findByPk(id);
  
    if(proyectoId){
      res.json({
        msg: 'se muestra el proyecto ',
        id,
        proyectoId
      })
    }else{
      res.status(404).json({
        msg: 'el proyecto no existe',
      })
    }
  }

  export const postProyectos = async (req: Request, res: Response, next: NextFunction) => {

    try {
    
    const { body } = req;
    const filename = req.file?.filename;

    body.foto = filename;
    
    await usuarioSchema.validate(body)
    
    const result = await Proyectos.create(body);
    res.status(201).json({
      success: true,
      message: "proyecto creado correctamente",
      data: result,
    }
    );
      
    } catch (error:any) {
      next(error);
    }
  };

  export const deleteProyectos = async (req: Request, res: Response) => {
    const { id } = req.params;
    await Proyectos.destroy({
      where: {
        idproyecto: id
      }
    });
  
    res.json({
        msg: 'el proyecto fue eliminado correctamente',
        id
    })
  }

  export const putProyectos = async (req: Request, res: Response) => {

    const { id } = req.params;
    const { body } = req;
  
   
    
    const usuarioActualizado = Proyectos.update(body, {
      where: {
        idproyecto: id
      }
    });
  
    res.json({
        msg: 'El proyecto fue editado correctamente',
        body,
        id,
        usuarioActualizado
    })
  }
  
