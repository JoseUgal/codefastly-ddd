import { Router, Request, Response } from 'express';
import { StatusGetController } from '../controllers/StatusGetController';
import container from '../dependency-injection';

export const register = (router: Router) => {
  const statusGetController: StatusGetController = container.get('Apps.moas.controllers.StatusGetController');
  router.get('/status', async (req: Request, res: Response) => statusGetController.run(req, res));
};
