import { adaptRoute } from '@main/adapters'
import { Router } from 'express'
import { SpacexRepository } from '@repositories/spacex';
import api from '@main/config/api'
import { getPastLaunchController } from '@controllers/get-past-launch';

export default (router: Router): void => {
  
  let repository = new SpacexRepository(api);
  let pastController = new getPastLaunchController(repository)
  
  router.get('/past', adaptRoute(pastController))
}