import express from 'express';
import fileRouteConfig from './config/fileRoutes.cjs';
import routes from './routes.js';
import cors from 'cors';
import path from 'path';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/product-file', fileRouteConfig);
app.use('/category-file', fileRouteConfig);
app.use('/product-file', express.static(path.resolve('uploads')));

app.use(routes);

export default app;
