import ExperienciaLaboral from "../models/experiencia_laboral";

import { Request, Response } from 'express';


export const getExperiencia = async(req: Request, res: Response) => {
    const experiencia = await ExperienciaLaboral.findAll(); 
    res.json({
        msg: 'lista de experiencia laboral',
        experiencia
    })
};
export const getExperienciaId = async (req: Request, res: Response) => {

    const { id } = req.params;
    console.log(id);
    
  
    const experienciaId = await ExperienciaLaboral.findByPk(id);
  
    if(experienciaId){
      res.json({
        msg: 'se muestra la experiencia',
        id,
        experienciaId
      })
    }else{
      res.status(404).json({
        msg: 'La experiencia no existe',
      })
    }
  }

  export const postExperiencia = async (req: Request, res: Response) => {
    const { body } = req;
    const result = await ExperienciaLaboral.create(body);
    res.status(201).json({
      success: true,
      message: "experiencia creado correctamente",
      data: result,
    });
  };

  export const deleteExperiencia = async (req: Request, res: Response) => {
    const { id } = req.params;
    await ExperienciaLaboral.destroy({
      where: {
        idexperiencia_laboral: id
      }
    });
  
    res.json({
        msg: 'La experiencia fue eliminada correctamente',
        id
    })
  }

  export const putExperiencia = async (req: Request, res: Response) => {

    const { id } = req.params;
    const { body } = req;
  
   
    
    const usuarioActualizado = ExperienciaLaboral.update(body, {
      where: {
        idexperiencia_laboral: id
      }
    });
  
    res.json({
        msg: 'El proyecto fue editado correctamente',
        body,
        id,
        usuarioActualizado
    })
  }
  