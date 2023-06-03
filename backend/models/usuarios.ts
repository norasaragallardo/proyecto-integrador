import { DataTypes } from "sequelize";
import db from "../db/connection";

const Usuarios = db.define('usuario',{
    
    idusuario: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING
      },
    email: {
        type: DataTypes.STRING
      },
    contrasenia: {
        type: DataTypes.STRING
      },
    foto: {
        type: DataTypes.STRING
      },
    estado: {
        type: DataTypes.TINYINT
      }

},{
    tableName: 'usuarios'
})
export default Usuarios;