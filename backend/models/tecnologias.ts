import { DataTypes } from "sequelize";
import db from "../db/connection";

const Tecnologias = db.define('tecnologias', {
    idtecnologia : {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true
    },
    nombre : {
        type: DataTypes.STRING
    },
    imagen : {
        type:DataTypes.STRING
    }
},{
    tableName: 'tecnologias'
})
export default Tecnologias;