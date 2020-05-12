import express from 'express';

const mountRoutes = (app: express.Application) => {
  const apiRouter = express.Router();
  apiRouter.get('/me', (req, res) => {
    return res.json({ data: 'response' });
  });

  app.use('/api', apiRouter);
};

export default mountRoutes;
