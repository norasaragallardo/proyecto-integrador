import express, { Application } from 'express';
import cors from 'cors';
import db from '../db/connection';

import { errorHandler } from '../middlewares/errorHandler';
import usuariosRouter from '../routes/usuarios';
import proyectoRouter from '../routes/proyectos';
import experienciaRouter from '../routes/experiencia_laboral';
import tecnologiaRouter from '../routes/tecnologias';
import authRouter from '../routes/auth'

class Server {
  private app: Application;
  private port: string | undefined;
  private apiPaths = {
    usuarios: '/api/usuarios',
    proyectos: '/api/proyectos',
    experiencia: '/api/experiencia',
    tecnologia: '/api/tecnologia',
    auth: '/api/auth'
   
  }

  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.dbConnection();
    this.middlewares();
    this.routes();
    this.app.use( errorHandler );
    this.app.use(errorHandler);
  }

  async dbConnection() {
    try {
      await db.authenticate();
      console.log('database online');
    } catch (error) {
      console.log(error);
    }
  }

  middlewares(){
    
    this.app.use( express.json() );
    this.app.use( cors() );
    this.app.use( '/uploads', express.static('uploads') )
  }

  routes(){
    this.app.use(this.apiPaths.usuarios, usuariosRouter),
    this.app.use(this.apiPaths.proyectos, proyectoRouter),
    this.app.use(this.apiPaths.experiencia, experienciaRouter),
    this.app.use(this.apiPaths.tecnologia, tecnologiaRouter),
    this.app.use(this.apiPaths.auth, authRouter)
  }

  listen() {
    this.app.listen(this.port, () => {
        console.log('SERVIDOR CORRIENDO EN EL PUERTO', this.port)
    })
  }
}

export default Server;


