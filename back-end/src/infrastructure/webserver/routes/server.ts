import express from 'express';
import vaccineRoutes from './vaccineRoutes.js';
import examRoutes from './examRoutes.js';

const app = express();
app.use(express.json());
app.use('/exam', examRoutes);
app.use('/vaccine', vaccineRoutes);

export default app;