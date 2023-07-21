import express, { Express, Request, Response } from "express";
import dotenv from 'dotenv';

//Configuration the .env file
dotenv.config();

//  Create Express APP
const app: Express = express();
const port: string | number = process.env.PORT || 8000;

// Define the first Route of APP
app.get('/', (req: Request, res: Response) => {
  // Send Hello World
  res.send('Welcome to Api Restful Express + Nodemon + Jest + TS + Swagger + Mongoose ')
});

// Define the first Route of APP
app.get('/hello', (req: Request, res: Response) => {
  // Send Hello World
  res.send('Welcome to GET Route: Hello World! ')
});


//Execute App and Listen Requests to PORT
app.listen(port, () => 
console.log(`EXPRESS SERVER: Running at http://localhost:${port}`)
)


/////////////////////////////////////////////////////////////////////
//  ejercicio1:
// app.get('/ejercicio1', (req: Request, res: Response) => {
//   const data = {
//     message: 'Goobye, world'
//   };
//   res.status(200).json({ data });
// });
// ejercicio 2
// app.get('/ejercicio2', (req: Request, res: Response) => {
//   const name = req.query.name || 'Anonimo';
//   const data = {
//     message: `Hola, ${name}`
//   };
//   res.status(200).json({ data });
// });
////////////////////////////////////////////////////////////////////