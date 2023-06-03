import ExperienciaLaboral from "../models/experiencia_laboral";

import { Request, Response } from 'express';
import Tecnologias from "../models/tecnologias";


export const getTecnologia = async(req: Request, res: Response) => {
    const tecnologia = await Tecnologias.findAll(); 
    res.json({
        msg: 'lista de Tecnologias',
        tecnologia
    })
};
export const getTecnologiaId = async (req: Request, res: Response) => {

    const { id } = req.params;
    console.log(id);
    
  
    const tecnologiaId = await Tecnologias.findByPk(id);
  
    if(tecnologiaId){
      res.json({
        msg: 'se muestra la Tecnologia',
        id,
        tecnologiaId
      })
    }else{
      res.status(404).json({
        msg: 'La Tecnologia no existe',
      })
    }
  }

  export const postTecnologia = async (req: Request, res: Response) => {
    const { body } = req;
    const result = await Tecnologias.create(body);
    res.status(201).json({
      success: true,
      message: "etecnologia creada correctamente",
      data: result,
    });
  };

  export const deleteTecnologia = async (req: Request, res: Response) => {
    const { id } = req.params;
    await Tecnologias.destroy({
      where: {
        idtecnologia: id
      }
    });
  
    res.json({
        msg: 'La tecnologia fue eliminada correctamente',
        id
    })
  }

  export const putTecnologia = async (req: Request, res: Response) => {

    const { id } = req.params;
    const { body } = req;
  
   
    
    const tecnologiActualizada = Tecnologias.update(body, {
      where: {
        idtecnologia: id
      }
    });
  
    res.json({
        msg: ' la tecnologia fue editada correctamente',
        body,
        id,
        tecnologiActualizada
    })
  }
  