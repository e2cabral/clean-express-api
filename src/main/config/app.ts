import setupRoutes from './routes';
import setupMiddlewares from './middlewares';
import express from 'express';

const app = express();

setupRoutes(app);
setupMiddlewares(app);

export default app;