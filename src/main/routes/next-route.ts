import { adaptRoute } from '@main/adapters'
import { Router } from 'express'
import { SpacexRepository } from '@repositories/spacex';
import api from '@main/config/api'
import { getNextLaunchController } from '@controllers/get-next-launch';

export default (router: Router): void => {
  
  let repository = new SpacexRepository(api);
  let nextController = new getNextLaunchController(repository)
  
  router.get('/next', adaptRoute(nextController))
}