import { Sequelize } from 'sequelize';

const db = new Sequelize('proyecto_integrador', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

export default db;