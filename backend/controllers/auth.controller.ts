import { Request, Response, NextFunction } from 'express';
import Usuario from '../models/usuarios';


export const login = async (req: Request, res: Response) => {
  
  const { email, contrasenia } = req.body;
  
  try {

    //Verificar el email
    const usuario = await Usuarios.findOne({
      where: {
        email,
      }
    })

    if( ! usuario ){
      return res.status(400).json({
        msg: 'Usuario o contraseña no son correctos'
      })
    }

    //verificar si el estado es activo
    if( usuario.dataValues.estado == 0 ){
      return res.status(400).json({
        msg: 'Usuario inactivo'
      })
    }

    //verficar la contraseña
    const validPassword = bcryptjs.compareSync( contrasenia, usuario.dataValues.contrasenia );

    if( ! validPassword ){
      return res.status(400).json({
        msg: 'Usuario o contraseña no son correctos'
      })
    }

    //generar el token 
    const token = await generarJWT(usuario.dataValues.idusuario);
    res.json({
      token,
      usuario: usuario.dataValues,
      msg: 'ingreso al login',
    })

  } catch (error) {
    res.status(500).json({
      error,
      msg: 'error en el login',
    })
  }
};

export const logout = async(req: Request, res: Response) => {
  res.json({
    msg: 'El usuario cerro sesión correctamente',
  })
};

export const validateToken = async(req: Request, res: Response) => {

  const { uid } = req.body;

  const usuario = await Usuario.findByPk(uid);

  if( ! usuario ){
    return res.status(400).json({
      msg: 'Usuario no existe'
    })
  }

  res.json({
    usuario,
    msg: 'El usuario cerro sesión correctamente',
  })
};
//import { Request, Response } from 'express';
import Usuarios from '../models/usuarios';
import bcryptjs from 'bcryptjs';
import generarJWT from '../utils/generarJWT';
import { getUsuarioId } from './usuarios.controller';



// export const login = async (req: Request, res: Response) => {



//     const { email, contrasenia } = req.body;
//     try {
//         //verificar el email
//         const usuario = await Usuarios.findOne({
//             where: {
//                 email,
//             }
//         })

//         if (!usuario) {
//             return res.status(400).json({
//                 msg: 'usuario o contraseña no son validos'
//             })
//         }
//         //verificar el estado activo
//         if (usuario.dataValues.estado == 0) {
//             return res.status(400).json({
//                 msg: 'usuario inactivo'
//             })
//         }
//         //verificar la contraseña

//         const validPassword = bcryptjs.compareSync(contrasenia, usuario.dataValues.contrasenia);
//         if (!validPassword) {
//             return res.status(400).json({
//                 msg: 'usuario o contraseña incorrecta'
//             })
//         }
//         //verificar el token
//         //encriptar contraseña

//         res.json({
//             msg: 'ingreso al login',

//         })
//     }
//     catch (error) {
//         res.status(500).json({
//             error,
//             msg: 'error en el login',
//         })
//     }
// };
