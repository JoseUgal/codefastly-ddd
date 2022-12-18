import { Router, Request, Response } from 'express';
import { StatusGetController } from '../controllers/StatusGetController';

export const register = (router: Router) => {
  router.get('/status', async (req: Request, res: Response) => {
    const controller = new StatusGetController();
    controller.run(req, res);
  });
};
