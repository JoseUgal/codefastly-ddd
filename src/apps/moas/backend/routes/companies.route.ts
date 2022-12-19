import { Router, Request, Response } from 'express';
import { CompaniesPutController } from '../controllers/CompaniesPutController';
import container from '../dependency-injection';

export const register = (router: Router) => {
  const companiesPutController: CompaniesPutController = container.get('Apps.moas.controllers.CompaniesPutController');
  router.put('/companies/:id', async (req: Request, res: Response) => companiesPutController.run(req, res));
};
