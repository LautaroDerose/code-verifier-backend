import express, { Express, Request, Response } from "express";

// Enviroment Variables
import dotenv from 'dotenv';

//Security
import cors from 'cors';
import helmet from 'helmet';

// TODO: HTTPS

//root Router
import rootRouter from '../routes';

//  Create Express APP
const server: Express = express();

// DDefine SERVER to use /api an use rootRouter from 'index.ts' in routes
// From this poin onover: http://localhost:8000/api/...
server.use(
  '/api',
  rootRouter
);

// TODO: Mongoose Connection

// * Security Config
server.use(helmet());
server.use(cors());

// * Content Type Config:
server.use(express.urlencoded({ extended: true, limit: '50mb' }))
server.use(express.json({limit: '50mb'}));

// * Redirection Config
// http://localhost:8000/ --> http://localhost:8000/api/
server.get('/', (req: Request, res: Response) => {
  res.redirect('/api');
});

export default server;