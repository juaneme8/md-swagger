import { Express, Request, Response } from "express";

import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express';
import {version} from '../../package.json';

const options: swaggerJSDoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'REST API Docs',
      version,
      description: 'Using Swagger in Express Server',
    },
  },
  apis: ['./src/index.ts'],
};

const specs = swaggerJSDoc(options);

const swaggerDocs = (app: Express, port: number) => {
  // Swagger page
  app.use('/docs', swaggerUI.serve, swaggerUI.setup(specs));

  // Docs in JSON format
  app.get('/docs.json', (_req: Request, res: Response) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(specs);
  });

  console.log(`Docs available at http://localhost:${port}/docs`);
};

export default swaggerDocs;
