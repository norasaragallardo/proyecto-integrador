import { DataTypes } from "sequelize";
import db from "../db/connection";

const ExperienciaLaboral = db.define('experiencia_laboral',{
    
    idexperiencia_laboral: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true
    },
    fecha_inicio: {
        type: DataTypes.DATE
    },
    descripcion: {
        type: DataTypes.STRING
    },
    nombre: {
        type: DataTypes.STRING
    },
    url: {
        type: DataTypes.STRING
    },
    foto: {
        type: DataTypes.STRING
    }
},{
    tableName: 'experiencia_laboral'
})
export default ExperienciaLaboral;