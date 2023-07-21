/**
 * Root Router
 * Redirections to Routers
 */

import express, { Request, Response } from "express";
import helloRouter from "./HelloRouter";
import { LogInfo } from "../utils/logger";

// Server instance
let server = express();

//Router instance
let rootRouter = express.Router();

// Activte for requests to http://localhost:8000/api

// GET: http://localhost:8000/api/
rootRouter.get('/', (req: Request, res: Response) => {
  LogInfo('Get: http://localhost:8000/api/')
  // Send Hello World
  res.send('Welcome to Api Restful Express + Nodemon + Jest + TS + Swagger + Mongoose ')
});

// Redirections to Routers & Controllers
server.use('/', rootRouter); // http://localhost:8000/api/
server.use('/hello', helloRouter); // http://localhost:8000/api/hello --> HelloController
// Add more routes to the app

export default server;