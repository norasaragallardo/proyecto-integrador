import dotenv from 'dotenv';
import Server from './models/server';
import { log } from 'console';

dotenv.config();

const serverInstance = new Server();

serverInstance.listen();
