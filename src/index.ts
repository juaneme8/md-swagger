import express from 'express';
import swaggerDocs from './utils/swagger';

const app = express();

app.use(express.json());

const PORT = 3000;

/**
   * @openapi
   * /ping:
   *  get:
   *     tags:
   *     - Healthcheck
   *     description: Responds if the app is up and running
   *     responses:
   *       200:
   *         description: App is up and running
   */
app.get('/ping', (_req, res) => {
  res.send('pong');
});

/**
   * @openapi
   * /healthcheck:
   *  get:
   *     tags:
   *     - Healthcheck
   *     description: Responds if the app is up and running
   *     responses:
   *       200:
   *         description: App is up and running
   */
app.get('/healthcheck', (_req, res) => {
  res.sendStatus(200);
});

swaggerDocs(app, PORT);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});